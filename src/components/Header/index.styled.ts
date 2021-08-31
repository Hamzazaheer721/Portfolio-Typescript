import styled from 'styled-components'
import {
  CloseOutlined,
  CustomerServiceOutlined,
  FileOutlined, HomeOutlined, MessageOutlined, PictureOutlined, UserOutlined,
} from '@ant-design/icons'

export const HeaderContainer = styled.div`
  max-width: 768px;
  margin-left: 15px;
  margin-right: 15px;
`
export const NavContainer = styled.div`

`;

export const UnOrderedList = styled.ul`
  display: inline-block;
  gap: 1.5px;
  list-style-type: none;
`

export const ListItem = styled.li`
`

export const AnchorTag = styled.a`
  text-decoration: none;
  font-style: normal;
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
