<?php
/*
    Plugin Name: Manzanita Bloques de Gutenberg
    Plugin URI:
    Description: Agregar bloques a manzanita
    Version: 0.0.1
    Author: Nahuel Clotet
    Text Domain: manzanita-gutenberg
*/

if(!defined('ABSPATH')) die;

// Categorías personalizadas

add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                //Manzanita
                'slug'  => 'manzanita-gutenberg',
                'title' =>  __( 'Manzanita', 'manzanita-gutenberg' ),
                'icon' => 'heart'
            ),
        )
    );
}, 10, 2 );

/* Registrar bloques */
function manzanita_registrar_bloques(){
    // Si gutenberg no existe
    if(!function_exists('register_block_type')){
        return;
    }

    //Registrar los bloques en el editor
    wp_register_script(
        'manzanita-editor-script', //Nombre único
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), //Dependencias
        filemtime(plugin_dir_path( __FILE__ ) . 'build/index.js') // Última versión
    );

    //Estilos para el editor
    wp_register_style( 'manzanita-editor-styles', 
    plugins_url('build/editor.css', __FILE__), //Archivo css para el editor
    array('wp-edit-blocks'), //Dependencias
    filemtime(plugin_dir_path( __FILE__ ) . 'build/editor.css') // Última versión
    );

    wp_register_style( 'manzanita-frontend-styles', 
    plugins_url('build/style.css', __FILE__), //Archivo css para el editor
    array('wp-edit-blocks'), //Dependencias
    filemtime(plugin_dir_path( __FILE__ ) . 'build/style.css') // Última versión
    );

    //Arreglo de bloques
    $blocks = [
        'manzanita/textoimagen',
        'manzanita/imagentexto'
    ];

    //Recorrer bloques para agregar scripts y styles
    foreach ($blocks as $block) {
        register_block_type( $block, array(
            'editor_script' => 'manzanita-editor-script', //Script principal
            'editor_style' => 'manzanita-editor-styles', //Estilos para el editor
            'style' => 'manzanita-frontend-styles' // Estilos para el frontend
        )
        );
    };
};

add_action('init', 'manzanita_registrar_bloques');