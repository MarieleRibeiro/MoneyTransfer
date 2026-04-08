import { Wrapper, Perfil, MenuItem, MenuFooter, MenuSectionTitle, Logo } from "./styles";
import { IoGridOutline, IoRepeat, IoCardOutline } from "react-icons/io5";
import { IoMdShuffle } from "react-icons/io";
import { FiDatabase, FiSettings } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { RiExchangeDollarLine } from "react-icons/ri";

import Avatar from "../../Images/Avatar.png";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Logo>
        <div className="logo-icon">
          <RiExchangeDollarLine />
        </div>
        <span className="logo-text">
          Pay<span>Flow</span>
        </span>
      </Logo>

      <Perfil>
        <div className="avatar-wrapper">
          <img src={Avatar} alt="Perfil" />
          <span className="status-badge" />
        </div>
        <div className="profile-text">
          <h3>Mariele Ribeiro</h3>
          <p>2312T45B</p>
        </div>
      </Perfil>

      <MenuSectionTitle>Main Menu</MenuSectionTitle>

      <MenuItem>
        <a href="/">
          <IoGridOutline /> Services
        </a>
        <a href="/">
          <IoRepeat /> Transactions
        </a>
        <a href="/" data-active="true">
          <IoMdShuffle /> Send Money
        </a>
        <a href="/">
          <IoCardOutline /> Cards
        </a>
        <a href="/">
          <FiDatabase /> History
        </a>

        <MenuFooter>
          <a href="/">
            <FiSettings /> Settings
          </a>
          <a href="/">
            <CgLogOut /> Log Out
          </a>
        </MenuFooter>
      </MenuItem>
    </Wrapper>
  );
};
