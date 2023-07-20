import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowitems] = useState(false);

  const handleClick = () => {
    setShowitems(!showItems);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-white shadow-sm p-2 border-b-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <MenuItemList items={data.itemCards} />}
      </div>
      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
