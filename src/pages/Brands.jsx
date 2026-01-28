import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import { useState } from "react";

const Brands = () => {
  const [inputSearch, setInputSearch] = useState("");
  const brands = useLoaderData();

  const handleSearchInput = (e) => {
    const inputdata = e.target.value;
    setInputSearch(inputdata);
  };

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(inputSearch.toLowerCase()),
  );

  return (
    <div className="w-11/12 mx-auto pt-10">
      <div>
        <h2 className="font-semibold text-3xl text-center py-3"> Brands</h2>
      </div>

      <div className="join mb-7">
        <div>
          <label className="input border border-[#cc40c5cb] validator join-item ">
            <input
              type="text"
              value={inputSearch}
              onChange={handleSearchInput}
              placeholder="Brand Name"
            />
          </label>
        </div>
        <button className="btn btn-neutral join-item bg-[#b61dae] text-white border border-[#3b0639]">
          Search
        </button>
      </div>

      <div className="flex flex-col gap-5 pb-30">
        {filteredBrands.map((item) => (
          <BrandCard key={item._id} item={item}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
