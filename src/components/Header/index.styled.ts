import styled from 'styled-components'
import {
  CloseOutlined,
  CustomerServiceOutlined,
  FileOutlined, HomeOutlined, MenuOutlined, MessageOutlined, PictureOutlined, UserOutlined,
} from '@ant-design/icons'

export const Label = styled.label`
  color: white;
  font-size: 2rem;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
`
export const MenuIcon = styled(MenuOutlined)`
  font-size: 2rem;
  color: white;
  line-height: 80px;
  float:right;
  margin-right: 2rem !important;
  cursor: pointer;  
  display:none;
`
export const NavContainer = styled.nav`
  background: #0082e6;
  width: 100%;
  height: 80px;
  & .anticon{
    margin: 0 5px;
  }
  & ul{
    float: right;
    margin-right: 20px;
  }
  & ul li {
    display: inline-block;
    margin: 10px 10px;
  }
  & ul li a{
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 13px;
    
  @media only screen and  (max-width: 952px){
    ${Label}{
      font-size: 1.5rem;
      padding-left: 50px;
    }
    & ul li a{
      font-size: 1rem;
    }
  }

  @media only screen and (max-width : 858px){
    ${MenuIcon}{
      display:block !important;
    }
  } 
`;
export const UnOrderedList = styled.ul`

`
export const ListItem = styled.li`

`

export const AnchorTag = styled.a`
  text-decoration: none;
  padding: 0.8rem;
  &:active, :hover{
    background: #1b9bff;
    transition: 0.5s;
  }  
`
export const HomeIcon = styled(HomeOutlined)`
`
export const AboutIcon = styled(UserOutlined)`
`
export const SkillsIcon = styled(FileOutlined)`
`
export const ServicesIcon = styled(CustomerServiceOutlined)`
`
export const PortfolioIcon = styled(PictureOutlined)`
`
export const ContactIcon = styled(MessageOutlined)`
`

// Nav Close Button
export const NavCloseButton = styled(CloseOutlined)`
  
`

export default {}
