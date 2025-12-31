import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

import AvatarKV from '../../public/assets/images/AvatarMaker-removebg-preview.png';
import Indesign from '../../public/assets/images/languagesIcons/icons8-adobe-indesign-48.png';
import ChinaFlag from '../../public/assets/images/languagesIcons/icons8-china-48.png';
import CSSLogo from '../../public/assets/images/languagesIcons/icons8-css3-48.png';
import Excel from '../../public/assets/images/languagesIcons/icons8-excel-48.png';
import FranceFlag from '../../public/assets/images/languagesIcons/icons8-france-48.png';
import HTMLLogo from '../../public/assets/images/languagesIcons/icons8-html-48.png';
import Illustrator from '../../public/assets/images/languagesIcons/icons8-illustrator-48.png';
import JSLogo from '../../public/assets/images/languagesIcons/icons8-javascript-48.png';
import MySQLLogo from '../../public/assets/images/languagesIcons/icons8-mysql-48.png';
import Photoshop from '../../public/assets/images/languagesIcons/icons8-photoshop-48.png';
import PHPLogo from '../../public/assets/images/languagesIcons/icons8-php-48.png';
import Powerpoint from '../../public/assets/images/languagesIcons/icons8-powerpoint-48.png';
import ReactLogo from '../../public/assets/images/languagesIcons/icons8-react-48.png';
import SpainFlag from '../../public/assets/images/languagesIcons/icons8-spain-flag-48.png';
import SymfonyLogo from '../../public/assets/images/languagesIcons/icons8-symfony-48.png';
import UkFlag from '../../public/assets/images/languagesIcons/icons8-uk-48.png';
import Word from '../../public/assets/images/languagesIcons/icons8-word-48.png';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Hello, c'est Kate</>}
      description={
        <>
          Je suis développeuse FullStack, avec une certaine appétance pour le
          BackEnd. Je suis également créatrice multimédia et communication
          graphique. N'hésitez pas à découvrir mes projets, développés seule ou
          en équipe. Je suis disponible pour de nouvelles aventures pleines de
          code et de challenges. Pour me contacter, c'est juste ici :{' '}
          <span className="text-purple-800 hover:underline">
            <a href="mailto:ctrlkate89@gmail.com">ctrlkate89@gmail.com</a>
          </span>
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src={AvatarKV.src}
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <div className="mt-5">
          <h3 className="mb-4 text-lg font-semibold text-gray-400">
            Mes Compétences Développement Web :
          </h3>
          <div className="mt-5 grid grid-cols-4 gap-4 md:grid-cols-8">
            <HeroSocial src={HTMLLogo.src} alt="HTML icon" />

            <HeroSocial src={CSSLogo.src} alt="CSS icon" />

            <HeroSocial src={PHPLogo.src} alt="PHP icon" />

            <HeroSocial src={JSLogo.src} alt="JavaScript icon" />

            <HeroSocial src={SymfonyLogo.src} alt="Symfony icon" />

            <HeroSocial src={ReactLogo.src} alt="React icon" />

            <HeroSocial src={MySQLLogo.src} alt="MySQL icon" />
          </div>
        </div>
      }
    />
    <HeroAvatar
      title={<></>}
      description={<></>}
      avatar={<></>}
      socialButtons={
        <div className="mt-5">
          <h3 className="mb-4 text-lg font-semibold text-gray-400">
            Mes Compétences Suite Adobe et Pack Office :
          </h3>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
            <div className="flex flex-col items-center">
              <HeroSocial src={Illustrator.src} alt="illustrator logo" />
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={Photoshop.src} alt="photoshop logo" />
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={Indesign.src} alt="indesign logo" />
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={Word.src} alt="Word logo" />
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={Excel.src} alt="Excel logo" />
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={Powerpoint.src} alt="Powerpoint logo" />
            </div>
          </div>
        </div>
      }
    />
    <HeroAvatar
      title={<></>}
      description={<></>}
      avatar={<></>}
      socialButtons={
        <div className="mt-5">
          <h3 className="mb-4 text-lg font-semibold text-gray-400">
            Je parle plusieurs langues :
          </h3>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
            <div className="flex flex-col items-center">
              <HeroSocial src={FranceFlag.src} alt="France Flag" />
              <p>C2</p>
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={UkFlag.src} alt="UK Flag" />
              <p>C1</p>
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={SpainFlag.src} alt="Spain Flag" />
              <p>B1</p>
            </div>

            <div className="flex flex-col items-center">
              <HeroSocial src={ChinaFlag.src} alt="China Flag" />
              <p>A2</p>
            </div>
          </div>
        </div>
      }
    />
  </Section>
);

export { Hero };
