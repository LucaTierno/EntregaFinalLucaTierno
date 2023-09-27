import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';

export default function CartWidget() {
    return (
      <Badge badgeContent={2} color="error">
        <ShoppingCartIcon />
      </Badge>
    );
}
