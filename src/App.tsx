import { useEffect, useState } from "react";
import Listing from "./components/Listing";

const App = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const url = `/etsy.json`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
};

export default App;
