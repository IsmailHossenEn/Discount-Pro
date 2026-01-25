import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const handleCopy = (code) => {
  try {
    navigator.clipboard.writeText(code);
    toast.success("Coupon code copied");
  } catch (error) {
    toast.error("Failed to copy code");
  }
};

const BrandDetails = () => {
  const { id } = useParams();
  const brands = useLoaderData();

  const brand = brands.find((b) => b._id === id);
  return (
    <div className="w-11/12 mx-auto py-8">
      <div className="flex items-center gap-4 mb-8 border p-4 rounded-lg">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-20 h-20 object-contain"
        />

        <div>
          <h2 className="text-2xl font-bold">{brand.brand_name}</h2>
          <p className="flex items-center gap-1 text-yellow-500">
            <FaStar /> {brand.rating}
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Available Coupons</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {brand.coupons.map((coupon, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm flex flex-col justify-between"
          >
            <div>
              <p className="font-medium mb-2">{coupon.description}</p>
              <p className="text-sm text-gray-500">
                Expires: {coupon.expiry_date}
              </p>
              <p className="mt-2 font-mono bg-gray-100 px-2 py-1 inline-block rounded">
                {coupon.coupon_code}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleCopy(coupon.coupon_code)}
                className="btn btn-outline btn-sm"
              >
                Copy Code
              </button>

              <a
                href={brand.shop_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Use Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
