import { links } from "@/utils";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex justify-center items-center md:gap-8">
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize font-light tracking-wide ${
                isActive ? "text-primary" : ""
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
