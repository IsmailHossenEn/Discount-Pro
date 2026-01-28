import { Link } from "react-router-dom";

const BrandCard = ({ item }) => {
  return (
    <div className="w-full border border-[#b61dae] rounded-lg bg-[#ecdef5] p-4 shadow-md hover:shadow-2xl hover:bg-white transition-all duration-1000 ease-in-out flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img
          src={item.brand_logo}
          alt={item.brand_name}
          className="h-14 w-14 object-contain"
        />

        <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
          <span>⭐</span>
          <span>{item.rating}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {item.brand_name}
        </h3>

        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <Link to={`/brand/${item._id}`}>
          <button className="px-4 py-2 text-sm bg-[#f66518] text-white hover:bg-[#d8550e] duration-300 ease-in-out cursor-pointer">
            View Coupons
          </button>
        </Link>

        {item.isSaleOn && (
          <span className="btn btn-outline text-red-500 text-sm font-semibold bg-white animate-bounce">
            Sale is on
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandCard;
