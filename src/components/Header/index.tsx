import { FC } from 'react';
import {
  AboutIcon,
  AnchorTag, ContactIcon, HeaderContainer, HomeIcon, ListItem,
  NavContainer, PortfolioIcon, ServicesIcon, SkillsIcon, UnOrderedGrid,
} from './index.styled';

const Header: FC = () => (
  <HeaderContainer>
    <NavContainer>
      {/* Portfolio Person */}
      <AnchorTag>
        Alexa
      </AnchorTag>
      {/* Grid Items */}
      <UnOrderedGrid>
        <ListItem>
          <AnchorTag href="#home">
            <HomeIcon />
            Home
          </AnchorTag>
        </ListItem>
        <ListItem>
          <AnchorTag href="#about">
            <AboutIcon />
            About
          </AnchorTag>
        </ListItem>
        <ListItem>
          <AnchorTag href="#skills">
            <SkillsIcon />
            Skills
          </AnchorTag>
        </ListItem>
        <ListItem>
          <AnchorTag href="#services">
            <ServicesIcon />
            Services
          </AnchorTag>
        </ListItem>
        <ListItem>
          <AnchorTag href="#portfolio">
            <PortfolioIcon />
            Portfolio
          </AnchorTag>
        </ListItem>
        <ListItem>
          <AnchorTag href="#contact">
            <ContactIcon />
            Contact
          </AnchorTag>
        </ListItem>
      </UnOrderedGrid>
    </NavContainer>

  </HeaderContainer>

)

export default Header;
