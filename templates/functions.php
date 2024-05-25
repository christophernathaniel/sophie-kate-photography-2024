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
add_action('enqueue_block_editor_assets', 'gutenberg_editor_assets');

function gutenberg_editor_assets()
{
    // Load the theme styles within Gutenberg.
    wp_enqueue_style('gutenberg-editor-styles', get_theme_file_uri('../staticApp.css'), FALSE);
}
