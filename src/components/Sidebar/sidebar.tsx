import { Container, Wrapper, Perfil, MenuItem, MenuFooter, } from "./styles"
import { IoGridOutline, IoRepeat, IoCardOutline } from 'react-icons/io5'
import { IoMdShuffle } from 'react-icons/io'
import { FiDatabase, FiSettings } from 'react-icons/fi'
import { CgLogOut } from 'react-icons/cg'

import Avatar from "../../Images/Avatar.png"

export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Perfil>
          <img src={Avatar} alt="Perfil" />
          <h3>Mariele Ribeiro</h3>
          <p>2312T45B</p>
        </Perfil>
        <MenuItem>
          <a href="/" > <IoGridOutline /> Services</a>
          <a href="/"> <IoRepeat /> Transitions</a>
          <a href="/"> <IoMdShuffle /> Send Money</a>
          <a href="/"> <IoCardOutline /> Card</a>
          <a href="/"> <FiDatabase /> History</a>
          <MenuFooter>
            <a href="/"> <FiSettings /> Setting</a>
            <a href="/"> <CgLogOut /> Log Out</a>
          </MenuFooter>
        </MenuItem>
      </Wrapper>
    </Container>
  )
}