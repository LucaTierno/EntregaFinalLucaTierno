import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export default function CartWidget() {

  const  { getTotalQuantity } = useContext(CartContext)

  let total = getTotalQuantity()

  return (
    <Link to="/cart" style={{textDecoration: "none", color: "#333"}}>
      <Badge badgeContent={total} color="error">
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
}
