---
layout: '@/templates/BasePost.astro'
title: Koney Island Wordpress
description: Thème personalisé wordpress, avec possibilité de publier des articles. 
pubDate: 2024-04-18T00:00:00Z
imgSrc: '../../public/assets/images/index-logos/koney-logo.png'
imgAlt: 'Logo Opoils'
---

Site d'articles avec un thème personalisé Wordpress, avec possibilité de publier des articles depuis le backoffice. 

#### GitHub Repositories

Le repository est disponible ici:  [Koney Island Repository](https://github.com/Kathleen-Vierstraete/koney-island-wp "Koney Island Worpress GitHub Repository")

#### Page d'accueil

L'application a été développée avec une idée de mise à disposition d'articles sur le lieu fictif de Koney Island. La page d'accueil se présente de la sorte :

![Koney Homepage](../../../public/assets/images/koneywp/koney-home-1.png 'Koney Island Wordpress Homepage')

![Koney Homepage](../../../public/assets/images/koneywp/koney-home-2.png 'Koney Island Wordpress Homepage')

Les menus du header et du footer ont été développés grâce à la fonctionnalité menu de Wordpress, où des pages statiques types ont été crées. Un slider a été intégré via Javascript pour ajouter un peu plus de dynamisme dans le thème. 

#### Page article

Les liens ont été paramétrés via Wordpress et depuis la page d'accueil, l'utilisateur peut accéder à l'article qui l'intéresse. 

![Koney Post](../../../public/assets/images/koneywp/koney-post.png 'Koney Island Wordpress Post')

#### Page statique

Grâce aux menus Wordpress, les liens des pages statiques (type contactez-nous par exemple) ont été mis en place. Depuis le backoffice de Wordpress, il a été possible de personaliser ces pages, tout en y intégrant le CSS voulu pour ce thème personalisé. 

![Koney Page](../../../public/assets/images/koneywp/koney-page.png 'Koney Island Wordpress Page')

#### Le backoffice

Via le backoffice Wordpress, il est possible de créer des articles, des pages statiques, ou encore de personaliser les menus, selon les besoins. 

![Koney Backoffice 1](../../../public/assets/images/koneywp/koney-backoffice-1.png 'Koney Island Wordpress Backoffice 1')

![Koney Backoffice 2](../../../public/assets/images/koneywp/koney-backoffice-3.png 'Koney Island Wordpress Backoffice 2')


![Koney Backoffice 3](../../../public/assets/images/koneywp/koney-backoffice-2.png 'Koney Island Wordpress Backoffice 3')

#### Le fichier functions.php

C'est via ce fichier que quelques unes des fonctionnalités ont pu être mises en place pour ce thème personalisé, comme le CSS, la mise en place de vignette sur la page d'accueil pour les articles, les titres de pages, les menus, ou encore le script du slider de la homepage. 

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

#### Déploiement

Le site n'a pas vocation a afficher de vrais articles, il n'a donc pas été déployé, mais exploité en local, via une machine virtuelle et le système Linux. 




