import { FC } from 'react';
import {
  AboutIcon,
  AnchorTag, ContactIcon, HomeIcon, Label, ListItem,
  MenuIcon,
  // NavCloseButton,
  NavContainer, PortfolioIcon, ServicesIcon, SkillsIcon, UnOrderedList,
} from './index.styled';

const Header: FC = () => (
  <NavContainer>
    <MenuIcon />
    {/* Portfolio Person */}
    <Label>
      Hamza Zaheer
    </Label>
    {/* Nav Items */}
    <UnOrderedList>
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
    </UnOrderedList>
    {/* Nav Close Button */}
    {/* <NavCloseButton /> */}

  </NavContainer>
)

export default Header;
