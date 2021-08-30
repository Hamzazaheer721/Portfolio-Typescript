import { FC } from 'react';
import { HeaderContainer, ListItem, UnOrderedGrid } from './index.styled';

const Header: FC = () => (
  <HeaderContainer>
    <UnOrderedGrid>
      <ListItem>
        <a href="#Home">
          <i>Home</i>
        </a>
      </ListItem>
      <ListItem>
        Services
      </ListItem>
      <ListItem>
        Skills
      </ListItem>
      <ListItem>
        Portfolio
      </ListItem>
      <ListItem>
        About
      </ListItem>
      <ListItem>
        Contact
      </ListItem>
    </UnOrderedGrid>
  </HeaderContainer>

)

export default Header;
