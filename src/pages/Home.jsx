import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";

const Home = () => {
  const brands = useLoaderData();
  const saleBrands = brands.filter((brnd) => brnd.isSaleOn);
  return (
    <div>
      <section className="relative overflow-hidden">
        <BannerSlider />
      </section>

      <section className="px-6 mt-10">
        <h2 className="text-3xl font-bold text-center mb-8">Top Brands</h2>
        <Marquee pauseOnHover speed={100} gradient={false}>
          <div className="flex items-center gap-4">
            {brands.map((item) => (
              <div className="w-full max-w-sm max-h-80 h-50 flex flex-col items-center justify-center border border-[#d18df8cc] rounded-xl bg-[#e0aaff21] p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link to={`/brand/${item._id}`} className="mb-3">
                  <img
                    src={item.brand_logo}
                    alt={item.brand_name}
                    className="h-20 object-cover"
                  />
                </Link>

                <h3 className="px-4 text-lg font-semibold text-gray-800 text-center mb-1">
                  {item.brand_name}
                </h3>

                <p className="px-4 text-sm text-gray-600 text-center line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* 🔹 Brands on Sell */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Brands on Sell 🔥
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {saleBrands.map((saleb) => (
            <div
              key={saleb._id}
              className="card bg-base-100 shadow-sm hover:shadow-xl duration-5 "
            >
              <figure className="p-6">
                <img
                  src={saleb.brand_logo}
                  alt={saleb.brand_name}
                  className="h-20"
                />
              </figure>

              <div className="card-body text-center">
                <h3 className="card-title justify-center">
                  {saleb.brand_name}
                </h3>
                <p>Category: {saleb.category}</p>
                <p>Total Coupons: {saleb.coupons.length}</p>

                <Link
                  to={`/brand/${saleb._id}`}
                  className="btn btn-md mt-4 bg-[#f66518] text-white hover:bg-[#d8550e] duration-5"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Extra Section 1: Featured Deals */}
      <section className="bg-base-200 py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Offers 🎯</h2>
        <p className="mb-6">Best discount deals from your favorite brands.</p>
        <button className="btn btn-secondary">Explore All Offers</button>
      </section>

      {/* 🔹 Extra Section 2: Newsletter */}
      <section className="px-6 text-center pb-20">
        <h2 className="text-3xl font-bold mb-4">Get Deals in Your Inbox 📩</h2>

        <div className="flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
