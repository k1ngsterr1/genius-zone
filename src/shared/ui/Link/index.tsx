import { Link } from "react-router-dom";

import "./styles.scss";

interface MenuLinkProps {
  text: string;
  url: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ text, url }) => {
  return (
    <Link to={url} className="link mt-12">
      {text}
    </Link>
  );
};
