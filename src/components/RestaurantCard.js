import { CDN_URL } from "../utils/constants";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwoString,
    avgRating,
    slaString,
  } = resData?.data;
  return (
    <div className="m-4 p-4 w-64 bg-gray-100 rounded-lg hover:scale-110 transition duration-0 hover:duration-300 ">
      <img
        className="rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg pt-3 font-bold truncate">{name}</h3>
      <p className="text-sxm text-gray-900 py-3 break-words truncate">
        {cuisines.join(", ")}
      </p>
      <div className="flex  text-sm font-semibold items-center gap-2">
        <span
          className={
            (avgRating < 4.0 || avgRating === "--"
              ? "bg-orange-500"
              : "bg-green-500") +
            " " +
            "px-2  text-white  "
          }
        >
          <FontAwesomeIcon icon={faStar} size="sm" /> {avgRating}
        </span>

        <span>{slaString} </span>
        <span className="gap-4">{costForTwoString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
