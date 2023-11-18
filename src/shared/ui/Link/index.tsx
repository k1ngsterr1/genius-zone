import { Link } from "react-router-dom";

interface MenuLinkProps {
  text: string;
  url: string;
}

export const MenuLink: React.FC<MenuLinkProps> = ({ text, url }) => {
  return (
    <Link to={url} className="link">
      {text}
    </Link>
  );
};
