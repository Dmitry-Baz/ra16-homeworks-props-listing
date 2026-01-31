import { useEffect, useState } from "react";
import listings from "./data/etsy.json"; // ✅ Импорт как модуля
import Listing from "./components/Listing";

const App = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Просто передаём импортированные данные
    setItems(listings);
  }, []);

  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
};

export default App;
