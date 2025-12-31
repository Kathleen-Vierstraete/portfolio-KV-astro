---
layout: '@/templates/BasePost.astro'
title: Pixel Perfect
description: Site de vente d'articles multimédias.
pubDate: 2024-04-18T00:00:00Z
imgSrc: '../../public/assets/images/index-logos/pp-logo2.png'
imgAlt: 'Logo Pixel Perfect'
---

Pixel perfect est un site demo de vente d'articles multimédias en ligne. Il a été conçu avec une équipe composée de 5 développeurs, 2 testeuses. La personne en charge du design avait commencé à nous faire des maquettes, mais a dû quitter l'aventure peu de temps après le début des intégrations. L'application a été développée via React-Redux, ainsi que Tailwind, pour la partie FrontEnd et via Symfony pour le BackEnd, notamment pour les APIs. Elle n'a pas été déployée, l'objectif étant de pratiquer, de monter en compétences et d'intégrer des fonctionnalités telle Stripe. 

#### GitHub Repositories

Le repository pour la partie FrontEnd est disponible ici :  [Pixel Perfect Front Github](https://github.com/Kathleen-Vierstraete/pixel-perfect-team-frontend "Pixel Perfect GitHub Front")

Le repository pour la partie BackEnd est disponible ici :  [Pixel PerfectBack Github](https://github.com/Kathleen-Vierstraete/pixel-perfect-team-backend "Pixel Perfect GitHub Back")


#### Page d'accueil

Une fois sur la page d'accueil, l'utilisateur se connecter, découvrir les produits et commencer à faire des achats. 

![Pixel Perfect Homepage](../../../public/assets/images/pixelperfect/pp-home.png 'Pixel Perfect Homepage')

#### Inscription / Connexion

L'utilisateur a la possibilité de s'incrire et de se connecter pour accéder au contenu complet du site, faire des achats, mais aussi accéder à son compte utilisateur. 

![Pixel Perfect Sign in](../../../public/assets/images/pixelperfect/pp-signin.png 'Pixel Perfect Sign in')

![Pixel Perfect Login](../../../public/assets/images/pixelperfect/pp-login.png 'Pixel Perfect Login')

#### Navigation sur le site

Il est possible de voir le détail du produit en cliquant dessus :

![Pixel Perfect Single Product](../../../public/assets/images/pixelperfect/pp-oneproduct.png 'Pixel Perfect Single Product')

Mais aussi de voir les produits d'une catégorie spécifique :

![Pixel Perfect Single Product](../../../public/assets/images/pixelperfect/pp-category.png 'Pixel Perfect Single Product')

Une fois connecté, l'utilisateur a accès aux informations du compte :

![Pixel Perfect My Account](../../../public/assets/images/pixelperfect/pp-myaccount.png 'Pixel Perfect My Account')

L'utilisateur peut aussi ajouter des produits au panier, et des produits similaires lui sont proposés :

![Pixel Perfect Basket](../../../public/assets/images/pixelperfect/pp-basket.png 'Pixel Perfect Basket')

![Pixel Perfect Basket2](../../../public/assets/images/pixelperfect/pp-basket2.png 'Pixel Perfect Basket2')

Une fois l'adresse sélectionnée, l'utilisateur peut ensuite poursuivre vers le paiement :

![Pixel Perfect Stripe](../../../public/assets/images/pixelperfect/pp-stripe.png 'Pixel Perfect Stripe')

Lorsque les données sont bien passées (données factices fournies par Stripe), l'achat est validé. L'utilisateur peut retrouver ce dernier dans les informations de son compte, sous la rubrique mes commandes :

![Pixel Perfect Stripe](../../../public/assets/images/pixelperfect/pp-paiementok.png 'Pixel Perfect Stripe')

#### Stripe

En tant que développeurs, il nous est possible d'accéder à la page test des paiements de stripe et de vérifier que ce dernier a bien été pris en compte. 

![Pixel Perfect Stripe Page](../../../public/assets/images/pixelperfect/pp-stripe-page.png 'Pixel Perfect Stripe Page')







