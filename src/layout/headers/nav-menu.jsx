import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <ul> 
      {menu_data.map((menu_item, i) => (
        <li key={i}>
          <Link href={menu_item.link} className={menu_item.has_dropdown ? "has-dropdown" : ""}>
            {menu_item.title}
            {menu_item.has_dropdown && (
              <i className="fa-solid fa-arrow-down" style={{marginLeft: '8px', fontSize: '12px'}}></i>
            )}
          </Link>
          {menu_item.has_dropdown && (
            <ul className="submenu"> 
              {menu_item.sub_menus.map((sub_menu, j) => (
                <li key={j}>  
                  <Link href={sub_menu.link}><span>{sub_menu.title}</span></Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
