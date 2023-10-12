import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

export default function CartWidget() {
  return (
    <Link to="/cart" style={{textDecoration: "none", color: "#333"}}>
      <Badge badgeContent={2} color="error">
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
}
