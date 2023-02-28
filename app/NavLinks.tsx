import { categories } from "../constant";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <nav>
      {categories.map((category) => (
        <NavLink key={category} category={category} />
      ))}
    </nav>
  );
}

export default NavLinks;
