import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-2 py-1 font-medium
         text-[#c82cc8] transition-all duration-300
         border-b-2 ${isActive ? "border-[#c82cc8]" : "border-transparent"}
         hover:border-[#c82cc8]
         hover:animate__animated hover:animate__pulse`
      }
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItem;
