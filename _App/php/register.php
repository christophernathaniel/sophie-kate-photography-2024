<?php


$blocks_directory = get_template_directory() . '/../_App/modules/_organisms/';
// Scan the directory for block folders
$block_folders = array_diff(scandir($blocks_directory), array('..', '.'));

// Define common properties
$common_properties = array(
    'category' => 'cc-page-blocks',
    'mode' => 'preview',
    'supports' => array('mode' => false, 'align' => false),
    'icon' => 'admin-comments',
    'keywords' => array('custom', 'block', 'cc'),
    'render_callback' => 'block_render_callback',
);

// Define block titles array
$block_titles = array();

foreach ($block_folders as $folder) {
    // Construct the block title from the folder name
    $block_title = ucwords(str_replace('-', ' ', $folder));
    // Add the block title to the array
    $block_titles[] = __($block_title);
}


// Register blocks
foreach ($block_titles as $title) {
    $thetitle = array('title' => $title);
    $thename = array('name' => strtolower(str_replace(' ', '-', $title)));
    $registered_block = array_merge($thename, $common_properties);
    $registered_block = array_merge($thetitle, $registered_block);
    acf_register_block($registered_block);
}
