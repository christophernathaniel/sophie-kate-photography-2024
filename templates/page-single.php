<?php /* Template Name: Single Page */

/**
 * The Template for displaying all single posts
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */

$context         = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;


$args = array(
	'post_type' => 'post', // Adjust post type as needed
	'posts_per_page' => 4, // Retrieve all posts
);

$recent_posts = Timber::get_posts($args);


// Pass the recent posts data to the Twig template

$context['recent_posts'] = $recent_posts;


if (post_password_required($timber_post->ID)) {
	Timber::render('single-password.twig', $context);
} else {
	Timber::render(array('page-single.twig', 'single-' . $timber_post->post_type . '.twig', 'single-' . $timber_post->slug . '.twig', 'single.twig'), $context);
}
