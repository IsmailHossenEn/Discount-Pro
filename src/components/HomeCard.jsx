import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ saleItem }) => {
  return (
    <div className="card bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/30">
      <figure className="p-6">
        <img
          src={saleItem.brand_logo}
          alt={saleItem.brand_name}
          className="h-20"
        />
      </figure>

      <div className="card-body text-center">
        <h3 className="card-title justify-center">{saleItem.brand_name}</h3>
        <p>Category: {saleItem.category}</p>
        <p>Total Coupons: {saleItem.coupons.length}</p>

        <Link
          to={`/brand/${saleItem._id}`}
          className="btn btn-md mt-4 bg-[#f66518] text-white hover:bg-[#d8550e] duration-5"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
