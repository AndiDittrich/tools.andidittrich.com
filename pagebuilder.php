<?php

// change current working dir
chdir(__DIR__);

// get filelist
$files = scandir(__DIR__);

// pages to process
$pages = array(
    'PasswordGenerator' => 'Password Generator',
    'TextFilter' => 'Text Filter',
    'Base64' => 'Base64',
    'Token' => 'Token Generator'
);

// process filelist
foreach ($pages as $currentPage => $n){
    renderPage($currentPage);
}

// utility
function renderPage($pageName){
    global $pages;

    echo 'Rendering Page [', $pageName, ']', PHP_EOL;

    // capture output
    ob_start();
    include($pageName . '.phtml');
    $content = ob_get_clean();

    // store static file
    file_put_contents('dist/' . $pageName . '.html', $content);
}