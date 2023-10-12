import ProductCard from "../../common/producCard/ProductCard";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  return (
    <div className="container-productos container">
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};
