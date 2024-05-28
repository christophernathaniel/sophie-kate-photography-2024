<?php

/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 */

// Load Composer dependencies.
require_once __DIR__ . '/../vendor/autoload.php';

require_once __DIR__ . '/../_App/StarterSite.php';

Timber\Timber::init();

// Sets the directories (inside your theme) to find .twig files.
Timber::$dirname = ['/../_App'];

new StarterSite();

add_filter('show_admin_bar', '__return_false');

function block_render_callback($block, $content = '', $is_preview = false)
{
    $context = Timber::context();

    // Store block values.
    $context['block'] = $block;
    $blockname = str_replace("acf/", "", $block['name']);

    // Store field values.
    $context['fields'] = get_fields();
    $context['is_preview'] = $is_preview; // Store $is_preview value.

    // Store classList values
    $context['classList'] = array();
    $context['dataTemplate'] = 'data-temp="' . $blockname . '.twig"';
    $context['dataType'] = 'data-type="organism"';

    // Push Block name
    array_push($context['classList'], $blockname);


    $bytes = random_bytes(20);
    $context['uuid'] = bin2hex($bytes);

    // Custom Field Logic
    if (!empty($context['fields'])) {
        foreach (array_keys($context['fields']) as $loopfields) {
            $createFieldUrl = get_template_directory() . '/../_App/modules/_fields/' . $loopfields . '.php';
            if (file_exists($createFieldUrl)) {
                include $createFieldUrl;
            }
        }
    }


    // Custom Organism Block Logic
    $createFileUrl = get_template_directory() . '/../_App/modules/_organisms/' . $blockname  . '/' . $blockname  . '.php';
    if (file_exists($createFileUrl)) {
        include  $createFileUrl;
    }

    // Convery classList to string
    $context['classlist'] = implode(" ", $context['classList']);

    $context['options'] = get_fields('option');

    if (isset($context['fields']['flip']) && $context['fields']['flip']) {
        $context['flip'] = true;
    }

    Timber::render('/modules/_organisms/' . $blockname  . '/' . $blockname  . '.twig', $context, 0);
}


function acf_gutenberg_register()
{
    if (function_exists('acf_register_block')) {
        require get_template_directory() . '/../_App/php/register.php';
    }
}
add_action('acf/init', 'acf_gutenberg_register');



add_filter('acf/settings/save_json', 'bks_acf_json_save_point');
function bks_acf_json_save_point($path)
{
    // update path
    $path = plugin_dir_path(__DIR__) . '/acf-json';
    // return
    return $path;
}


function my_acf_json_save_point($path)
{
    return get_stylesheet_directory() . '/acf-json';
}
add_filter('acf/settings/save_json', 'my_acf_json_save_point');


function my_acf_json_load_point($paths)
{
    // Remove the original path (optional).
    unset($paths[0]);

    // Append the new path and return it.
    $paths[] = get_stylesheet_directory() . '/acf-json';

    return $paths;
}
add_filter('acf/settings/load_json', 'my_acf_json_load_point');


// Add backend styles for Gutenberg.
add_action('admin_enqueue_scripts', 'block_scripts');

function block_scripts()
{
    // Load the theme styles within Gutenberg.
    wp_enqueue_style('block_scripts', get_theme_file_uri('../static/AppJS.css'), FALSE);
}


// Set the password cookie when a password is submitted
function set_password_cookie()
{
    if (isset($_POST['post_password'])) {
        $password = sanitize_text_field($_POST['post_password']);
        setcookie('parent_page_password', $password, time() + 3600, COOKIEPATH, COOKIE_DOMAIN);
    }
}
add_action('wp', 'set_password_cookie');

// Check the password cookie and grant access to child pages
function check_password_cookie($posts)
{
    if (empty($posts) || !is_array($posts)) {
        return $posts;
    }

    foreach ($posts as $post) {
        if (!post_password_required($post)) {
            continue;
        }

        // Get the parent page ID
        $parent_id = wp_get_post_parent_id($post->ID);
        if ($parent_id) {
            $parent_post = get_post($parent_id);

            // Check if the cookie password matches the parent page password
            if (isset($_COOKIE['parent_page_password']) && $_COOKIE['parent_page_password'] == $parent_post->post_password) {
                // Grant access to the child page
                add_filter('the_content', function ($content) use ($post) {
                    return get_post_field('post_content', $post);
                });
                $post->post_password = '';
            }
        }
    }

    return $posts;
}
add_filter('the_posts', 'check_password_cookie');

// Automatically password protect child pages with the same password as the parent page
function password_protect_child_pages($post_id)
{
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (wp_is_post_revision($post_id)) return;

    if (get_post_type($post_id) !== 'client-gallery') return;

    $post = get_post($post_id);

    // Check if the post is password protected
    if ($post->post_password) {
        // Get all child pages of the parent page
        $child_pages = get_pages(array(
            'child_of' => $post_id,
            'post_type' => 'client-gallery',
            'post_status' => 'publish'
        ));

        // Password protect each child page
        foreach ($child_pages as $child_page) {
            if ($child_page->post_password !== $post->post_password) {
                wp_update_post(array(
                    'ID' => $child_page->ID,
                    'post_password' => $post->post_password
                ));
            }
        }
    }
}
add_action('save_post', 'password_protect_child_pages');

// Automatically update child pages' passwords if the parent page's password is updated
function update_child_pages_password($post_id, $post_after, $post_before)
{
    // Only proceed if the post type is 'page' and the password has changed
    if (get_post_type($post_id) !== 'client-gallery') return;
    if ($post_after->post_password !== $post_before->post_password) {
        password_protect_child_pages($post_id);
    }
}
add_action('post_updated', 'update_child_pages_password', 10, 3);
