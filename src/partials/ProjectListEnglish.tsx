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

const ProjectListEnglish = () => (
  <>
    <Section title={<>My Web Projects</>}>
      <div className="flex flex-col gap-6">
        <Project
          name="O'poils"
          description="Dating website for dogs, where dogs owners can meet and organize dates for their pets, to have amazing plays or unforgettable walks"
          link="projects/opoils/"
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
          link="projects/pixelperfect/"
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
          link="projects/react-todo-list/"
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
          name="The tiny Labyrinthe"
          description="Une petite pause via ce jeu pour m'aider à trouver de nouvelles opportunités et redévouvrir mon CV."
          link="projects/tinygame/"
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
          link="projects/koney/"
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

    <Section title={<>My Design Works</>}>
      <div className="flex flex-col gap-6">
        <Project
          name="Bakery Sign"
          description="Request from a client for a Bakery Sign"
          link="projets/bakery/"
          img={{
            src: BoulangerieLogo.src,
            alt: 'Bakery Project Logo',
          }}
          category={
            <>
              <Tags color={ColorTags.ROSE}>Adobe Illustrator</Tags>
              <Tags color={ColorTags.BLUE}>Adobe Photoshop</Tags>
            </>
          }
        />

        <Project
          name="2025 Christmas Menu"
          description="Various designs to promote our partner restaurant's Christmas Menu"
          link="projets/ChristmasMenu2025/"
          img={{
            src: MenuNoel2025Logo.src,
            alt: '2025 Christmas menu logo',
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
          name="2025 Christmas Trees Sale"
          description="A poster to promote the 2025 Christmas Tree Sale"
          link="projets/ChristmasTreesSale2025/"
          img={{
            src: VenteSapins2025.src,
            alt: '2025 Christmas Trees Sale logo',
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

export { ProjectListEnglish };
