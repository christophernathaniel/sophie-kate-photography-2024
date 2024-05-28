<?php


// Querying posts
$args = array(
    'post_type' => 'post', // Adjust post type as needed
    'posts_per_page' => -1, // Retrieve all posts
);

$context['posts'] = Timber::get_posts($args);
