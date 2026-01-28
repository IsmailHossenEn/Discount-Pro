import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import HomeCard from "../components/HomeCard";

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

      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Brands on Sell 🔥
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {saleBrands.map((saleb) => (
            <HomeCard key={saleb._id} saleItem={saleb}></HomeCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-linear-to-br from-[#c82cc8]/5 via-white to-[#f66518]/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Why Choose <span className="text-[#c82cc8]">Discount-Pro</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Verified coupons, trusted brands, and a smooth experience designed
            to help you save.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white border hover:border-[#c82cc8] hover:shadow-[0_20px_40px_rgba(200,44,200,0.15)]  transition-all duration-300">
              <div className="w-12 h-12 mb-5 rounded-full bg-[#c82cc8]/10 flex items-center justify-center">
                <span className="text-[#c82cc8] text-xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Verified Coupons
              </h3>
              <p className="text-gray-600">
                All deals are tested and updated regularly for reliability.
              </p>
            </div>

            <div
              className="
        group p-8 rounded-2xl bg-white border
        hover:border-[#f66518]
        hover:shadow-[0_20px_40px_rgba(246,101,24,0.15)]
        transition-all duration-300
      "
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-[#f66518]/10 flex items-center justify-center">
                <span className="text-[#f66518] text-xl font-bold">★</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Top Brands
              </h3>
              <p className="text-gray-600">
                Exclusive offers from popular and trusted brands.
              </p>
            </div>

            <div
              className="
        group p-8 rounded-2xl bg-white border
        hover:border-black
        hover:shadow-xl
        transition-all duration-300
      "
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-black/10 flex items-center justify-center">
                <span className="text-black text-xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Simple & Fast
              </h3>
              <p className="text-gray-600">
                Clean UI with one-click coupon copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-linear-to-r from-[#c82cc8] to-[#f66518]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Start Saving Today</h2>

          <p className="text-white/90 max-w-2xl mx-auto mb-10">
            Discover the best coupons and discounts from your favorite brands.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/brands"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition-all"
            >
              Browse Brands
            </Link>

            <Link
              to="/about"
              className="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
