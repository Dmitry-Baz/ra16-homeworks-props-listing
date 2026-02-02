// src/components/Listing.tsx
import type { ListingItem } from "../types";
import ListingCard from "./ListingCard";

interface Props {
  items: ListingItem[];
}

const Listing = ({ items }: Props) => {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <ListingCard key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default Listing;
