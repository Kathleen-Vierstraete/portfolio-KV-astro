import {
  ColorTags,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import BoulangerieLogo from '../../public/assets/images/index-logos/enseigne-black-white-logo.png';
import KoneyLogo from '../../public/assets/images/index-logos/koney-logo.png';
import LabyLogo from '../../public/assets/images/index-logos/laby-logo2.png';
import MenuNoel2025Logo from '../../public/assets/images/index-logos/menu-noel-2025-logo.jpg';
import OpoilsLogo from '../../public/assets/images/index-logos/opoils-logo.png';
import PixelPerfectLogo from '../../public/assets/images/index-logos/pp-logo2.png';
import TodoListLogo from '../../public/assets/images/index-logos/todo-list-logo2.png';
import VenteSapins2025 from '../../public/assets/images/index-logos/vente-sapins-2025-logo.png';

const ProjectList = () => (
  <>
    <Section title={<>Mes Projets Web</>}>
      <div className="flex flex-col gap-6">
        <Project
          name="O'poils"
          description="Site de rencontre pour chiens, où les propriétaires de chiens peuvent se rencontrer et organiser des rendez-vous pour leurs compagnons à quatre pattes, pour des parties de jeux ou des promenades inoubliables. "
          link="projets/opoils/"
          img={{
            src: OpoilsLogo.src,
            alt: 'Project Opoils Logo',
          }}
          category={
            <>
              <Tags color={ColorTags.ORANGE}>HTML</Tags>
              <Tags color={ColorTags.ROSE}>SCSS</Tags>
              <Tags color={ColorTags.BLUE}>PHP</Tags>
              <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
              <Tags color={ColorTags.INDIGO}>REACT</Tags>
              <Tags color={ColorTags.STONE}>SYMFONY</Tags>
              <Tags color={ColorTags.AMBER}>TWIG</Tags>
            </>
          }
        />

        <Project
          name="Pixel Perfect"
          description="Site de vente d'articles multimédias. Envie d'acheter le casque dernier cri pour des parties endiablées en ligne? Ne cherchez pas plus loin."
          link="projets/pixelperfect/"
          img={{
            src: PixelPerfectLogo.src,
            alt: 'Project Pixel Perfect',
          }}
          category={
            <>
              <Tags color={ColorTags.ORANGE}>HTML</Tags>
              <Tags color={ColorTags.PURPLE}>CSS</Tags>
              <Tags color={ColorTags.BLUE}>PHP</Tags>
              <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
              <Tags color={ColorTags.INDIGO}>REACT</Tags>
              <Tags color={ColorTags.STONE}>SYMFONY</Tags>
            </>
          }
        />
        <Project
          name="React TO-DO LIST"
          description="Une application pour s'organiser, en version multilingue."
          link="projets/react-todo-list/"
          img={{
            src: TodoListLogo.src,
            alt: 'Project Todo list logo',
          }}
          category={
            <>
              <Tags color={ColorTags.ORANGE}>HTML</Tags>
              <Tags color={ColorTags.PURPLE}>CSS</Tags>
              <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
              <Tags color={ColorTags.INDIGO}>REACT</Tags>
            </>
          }
        />

        <Project
          name="Le Petit Labyrinthe"
          description="Une petite pause via ce jeu pour m'aider à trouver de nouvelles opportunités et redévouvrir mon CV."
          link="projets/tinygame/"
          img={{
            src: LabyLogo.src,
            alt: 'Project Todo list logo',
          }}
          category={
            <>
              <Tags color={ColorTags.ORANGE}>HTML</Tags>
              <Tags color={ColorTags.PURPLE}>CSS</Tags>
              <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
            </>
          }
        />

        <Project
          name="Koney Island"
          description="Un thème créé via Wordpress, avec toutes les fonctionnalités nécessaires en backoffice"
          link="projets/koney/"
          img={{
            src: KoneyLogo.src,
            alt: 'Koney Wordpress logo',
          }}
          category={
            <>
              <Tags color={ColorTags.ORANGE}>HTML</Tags>
              <Tags color={ColorTags.PURPLE}>CSS</Tags>
              <Tags color={ColorTags.BLUE}>PHP</Tags>
              <Tags color={ColorTags.YELLOW}>JAVASCRIPT</Tags>
            </>
          }
        />
      </div>
    </Section>

    <Section title={<>Mes Créations Graphiques</>}>
      <div className="flex flex-col gap-6">
        <Project
          name="Enseigne Boulangerie"
          description="Demande Client pour une enseigne de Boulangerie."
          link="projets/boulangerie/"
          img={{
            src: BoulangerieLogo.src,
            alt: 'Project Boulangerie Logo',
          }}
          category={
            <>
              <Tags color={ColorTags.ROSE}>Adobe Illustrator</Tags>
              <Tags color={ColorTags.BLUE}>Adobe Photoshop</Tags>
            </>
          }
        />

        <Project
          name="Menu de Noël 2025"
          description="Affiches pour la promotion du Menu de Noël 2025 du restaurant partenaire La Cuisine Solidaire Territoriale."
          link="projets/MenuNoel2025/"
          img={{
            src: MenuNoel2025Logo.src,
            alt: 'Project Menu Noel 2025',
          }}
          category={
            <>
              <Tags color={ColorTags.ORANGE}>Adobe Illustrator</Tags>
              <Tags color={ColorTags.BLUE}>Adobe Photoshopt</Tags>
              <Tags color={ColorTags.ROSE}>Adobe InDesign</Tags>
            </>
          }
        />
        <Project
          name="Vente Sapin Noël 2025"
          description="Une affiche pour promouvoir la vente de Sapins de Noël"
          link="projets/venteSapins2025/"
          img={{
            src: VenteSapins2025.src,
            alt: 'vente sapin 2025 logo',
          }}
          category={
            <>
              <Tags color={ColorTags.ORANGE}>Adobe Illustrator</Tags>
            </>
          }
        />
      </div>
    </Section>
  </>
);

export { ProjectList };
