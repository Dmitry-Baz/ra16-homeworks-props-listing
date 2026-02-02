import type { ListingItem } from "../types";

const ListingCard = ({ item }: { item: ListingItem }) => {
  // Обрезка названия до 50 символов
  const title =
    item.title.length > 50 ? item.title.slice(0, 47) + "..." : item.title;

  // Форматирование цены
  const formatPrice = (): string => {
    const numPrice = parseFloat(item.price);
    const formatted = isNaN(numPrice) ? item.price : numPrice.toFixed(2);
    const code = item.currency_code.trim().toUpperCase();

    switch (code) {
      case "USD":
        return `$${formatted}`;
      case "EUR":
        return `€${formatted}`;
      case "GBP":
        return `£${formatted}`;
      default:
        return `${code} ${formatted}`;
    }
  };

  // Класс для остатка
  const getStockClass = (): string => {
    const qty = item.quantity;
    if (qty <= 10) return "stock-low";
    if (qty <= 20) return "stock-medium";
    return "stock-high";
  };

  // URL изображения с fallback
  const imageUrl = item.MainImage.url_570xN || "/no-image.png";

  return (
    <div className="product-card">
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <div className="price-container">
            <div className="product-price">{formatPrice()}</div>
            <span className={`stock-badge ${getStockClass()}`}>
              {item.quantity} left
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ListingCard;
