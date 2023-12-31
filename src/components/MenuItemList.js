import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuItemList = ({ items }) => {
  //console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="fooditems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-b-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="text-lg">{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4  ">
            <div className="absolute ">
              <button
                className="px-3 py-1 mt-14 ml-6 bg-white shadow-lg  rounded-md text-green-600 text-xs font-bold"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuItemList;
