---
layout: '@/templates/BasePostEnglish.astro'
title: Koney Island Wordpress
description: A personalized Wordpress theme, with the possibility to post articles
pubDate: 2024-04-18T00:00:00Z
imgSrc: '../../../public/assets/images/index-logos/koney-logo.png'
imgAlt: 'Logo Opoils'
---

Articles website, with a personalized Wordpress theme, with the possibility to post articles via the backoffice.
Koney ite d'articles avec un thème personalisé Wordpress, avec possibilité de publier des articles depuis le backoffice. 

#### GitHub Repositories

The repository is available here:  [Koney Island Repository](https://github.com/Kathleen-Vierstraete/koney-island-wp "Koney Island Worpress GitHub Repository")

#### Homepage

The application was build with the idea of displaying articles about the fake place named Koney Island. The homepage displays like so:

![Koney Homepage](../../../../public/assets/images/koneywp/koney-home-1.png 'Koney Island Wordpress Homepage')

![Koney Homepage](../../../../public/assets/images/koneywp/koney-home-2.png 'Koney Island Wordpress Homepage')

The menus of the header and the footer were build via Wordpress menu feature, where the static pages where created. A slider was added via Javascript to add dynamism to the theme. 

#### Article Page

The links were set via Wordpress and via the homepage, the user can access any article :

![Koney Post](../../../../public/assets/images/koneywp/koney-post.png 'Koney Island Wordpress Post')

#### Statique Page

Thanks to the Wordpress menus, the links to the static pages (such as contact us for instance) were set. From Wordpress backoffice, it was possible to customize the pages, but also to add the wanted CSS according to the personalized theme. 

![Koney Page](../../../../public/assets/images/koneywp/koney-page.png 'Koney Island Wordpress Page')

#### The backoffice

Via Wordpress backoffice, il is possible to create articles, static pages, or personalized the menus, according to the needs. 

![Koney Backoffice 1](../../../../public/assets/images/koneywp/koney-backoffice-1.png 'Koney Island Wordpress Backoffice 1')

![Koney Backoffice 2](../../../../public/assets/images/koneywp/koney-backoffice-3.png 'Koney Island Wordpress Backoffice 2')

![Koney Backoffice 3](../../../../public/assets/images/koneywp/koney-backoffice-2.png 'Koney Island Wordpress Backoffice 3')

#### functions.php file

It was via this file that a few features were set for this personalized theme, such as the CSS, adding an image tag for the articles on the homepage, the pages' titles, the menus, or the script for the homepage slider. 

```php 
<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @link https://adambrown.info/p/wp_hooks/hook
 */

function charging_styles() {
  // https://developer.wordpress.org/reference/functions/wp_enqueue_style/

    //charging the css sheet named koney-style, it takes the style.css in the current css template
    //the third parameter allows to wait for the reset to be loaded before going to the style.css sheet

    wp_enqueue_style('koney-style', get_template_directory_uri() . '/css/style.css', ['koney-reset-style']);
    wp_enqueue_style('koney-reset-style', get_template_directory_uri() . '/css/reset.css');

}
// https://developer.wordpress.org/reference/functions/add_action/
 add_action( 'wp_enqueue_scripts', 'charging_styles' );

// adding this line to make sure the option add a post thumbnail appears in the backoffice and being able to add the_post_thumbnail in the loop
add_theme_support( 'post-thumbnails' );

//adding a dynamic title on the pages, so that it shows on the tab
add_theme_support('title-tag');

//activating the menus in the wp backoffice
add_theme_support('menus');

// Saving the menus to use them
// https://developer.wordpress.org/themes/functionality/navigation-menus/
function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => ( 'Header-Menu' ), //menu's name
      'footer-menu' => ('Footer-Menu')
     )
   );
 }
 add_action( 'init', 'register_my_menus' );

//adding a js slider for the header images
//https://www.easywp.com/blog/adding-javascript-to-wordpress/#:~:text=You%20can%20access%20it%20through,using%20the%20wp_enqueue_script()%20function.
 function slider_script() {
  wp_enqueue_script( 'slider_script(', get_template_directory_uri() . '/javascript/slider.js', array(), '1.0', true );
}

add_action( 'wp_enqueue_scripts', 'slider_script' );
```

#### Deployment

The site wasn't designed to display real articles, and as a result, was not deployed. It was build locally, via a virtual machine and the Linux system. 




