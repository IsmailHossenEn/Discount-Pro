import { Link } from "react-router-dom";

const BrandCard = ({ item }) => {
  return (
    <div className="w-full border border-gray-200 rounded-lg bg-white p-4 shadow-sm flex flex-col gap-4">
      {/* Top: Logo + Rating {item.brand_logo}*/}
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

      {/* Middle: Name + Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {item.brand_name}
        </h3>

        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      </div>

      {/* Bottom: Button + Sale Text */}
      <div className="flex items-center justify-between mt-auto">
        <Link to="/login">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            View Coupons
          </button>
        </Link>

        {item.isSaleOn && (
          <span className="btn btn-outline text-red-500 text-sm font-semibold animate-bounce">
            Sale is on
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandCard;
