import {
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const NavbarEnglish = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/en/">
        <div className="flex items-center">
          <img src="/icons8-home-32.png" alt="home icon" className="mr-4" />
          <p className="font-semibold text-purple-800">Kate's portfolio</p>
        </div>
      </a>

      <NavMenu>
        <NavMenuItem
          href="https://github.com/Kathleen-Vierstraete"
          target="_blank"
        >
          GitHub
        </NavMenuItem>
        <NavMenuItem
          href="https://www.linkedin.com/in/kathleen-vierstraete/"
          target="_blank"
        >
          LinkedIn
        </NavMenuItem>
        <NavMenuItem
          href="https://drive.google.com/file/d/1BYctr0W3pPYsIn_QGqGcGOs-upQ03w_F/view?usp=drive_link"
          target="_blank"
        >
          CV
        </NavMenuItem>

        <a href="/">
          <div className="ml-10 flex items-center">
            <p className="font-semibold text-blue-600">Version française</p>
          </div>
        </a>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { NavbarEnglish };
