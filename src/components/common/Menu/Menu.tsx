import React, { memo } from "react";
import { Link } from "react-router-dom";
import { MenuProps, MenuType } from "@common-types/menu";
import "./menu.css";

const Menu: React.FC<MenuProps> = memo(({ menuList }) => {
  function renderMenuList(list: MenuType[]) {
    return list.map((item) => (
      <li className="menu__item" key={item.key}>
        <a href="">{item.label}</a>
      </li>
    ));
  }

  return (
    <div data-testid="menu" className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/">Home</Link>
        </li>
        {renderMenuList(menuList)}
      </ul>
    </div>
  );
});

export default Menu;
