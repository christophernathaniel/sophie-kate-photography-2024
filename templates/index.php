<?php

/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

$context          = Timber::context();
$context['posts'] = Timber::get_posts();
$context['foo']   = 'bar';
$templates        = array('index.twig');


// Fetch recent posts
$recent_posts_args = array(
	'post_type'      => 'post',
	'posts_per_page' => 5, // Adjust as needed
	'orderby'        => 'date',
	'order'          => 'DESC'
);
$context['recent_posts'] = Timber::get_posts($recent_posts_args);

// Fetch categories
$context['categories'] = Timber::get_terms('category');



foreach ($context['posts'] as $post) {
	if ($post->post_password) {
		$context['password_protected'] = true;
		break; // No need to continue checking if one post is already password protected
	}
}

$templates = array('index.twig');
if (is_home()) {
	array_unshift($templates, 'front-page.twig', 'home.twig');
}

// Render the appropriate templates with the context
Timber::render($templates, $context);
