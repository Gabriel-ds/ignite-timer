import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";

import logoIgnite from "../../assets/logo-ignite.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to={"/"}>
          <Timer size={24} />
        </NavLink>
        <NavLink to={"/history"}>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
