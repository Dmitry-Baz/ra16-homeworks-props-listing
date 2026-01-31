// src/components/Listing.tsx
// import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

interface ListingItem {
  listing_id?: number;
  url?: string;
  MainImage?: { url_570xN?: string };
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

interface Props {
  items?: ListingItem[];
}

const Listing = ({ items = [] }: Props) => {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <ListingCard key={item.listing_id ?? Math.random()} item={item} />
      ))}
    </div>
  );
};

export default Listing;
