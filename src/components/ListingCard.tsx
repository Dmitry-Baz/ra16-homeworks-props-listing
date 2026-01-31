
interface Listing {
  listing_id?: number;
  url?: string;
  MainImage?: {
    url_570xN?: string;
  };
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

const ListingCard = ({ item }: { item: Listing }) => {
  const titleText = (item.title || "").trim();
  const displayTitle =
    titleText.length > 50 ? titleText.slice(0, 47) + "..." : titleText;

  const imageUrl =
    item.MainImage?.url_570xN ||
    item.MainImage?.["url_570xN"] || 
    "https://via.placeholder.com/260x240?text=No+Image";

  const formatPrice = (): string => {
    const rawPrice = item.price?.trim() || "0";
    const numPrice = parseFloat(rawPrice);
    const priceStr = isNaN(numPrice) ? rawPrice : numPrice.toFixed(2);

    const currency = (item.currency_code || "").trim();
    switch (currency) {
      case "USD":
        return `$${priceStr}`;
      case "EUR":
        return `€${priceStr}`;
      case "GBP":
        return `£${priceStr}`;
      default:
        return `${currency} ${priceStr}`;
    }
  };

  const quantity = item.quantity ?? 0;
  let stockClass = "stock-high";
  if (quantity <= 10) {
    stockClass = "stock-low";
  } else if (quantity <= 20) {
    stockClass = "stock-medium";
  }

  return (
    <div className="product-card">
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={displayTitle || "Product"}
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">{displayTitle || "No title"}</h3>
          <div className="price-container">
            <div className="product-price">{formatPrice()}</div>
            <span className={`stock-badge ${stockClass}`}>{quantity} left</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ListingCard;
