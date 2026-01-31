import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

interface Listing {
  listing_id: number;
  url: string;
  MainImage: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

interface Props {
  items?: Listing[];
}

const Listing = ({ items = [] }: Props) => {
  const [listings, setListings] = useState<Listing[]>(items);

  useEffect(() => {
    if (items.length === 0) {
      fetch("/data/etsy.json")
        .then((res) => res.json())
        .then((data) => setListings(data))
        .catch((err) => console.error("Failed to load listings:", err));
    }
  }, [items.length]);

  return (
    <div className="product-grid">
      {listings.map((item) => (
        <ListingCard key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default Listing;
