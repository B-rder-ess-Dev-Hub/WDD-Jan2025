import React from "react";

const Shoe = () => {
  return (
    <section className="flex justify-between items-center bg-gray-200 mx-9 rounded-xl px-12 py-12">
      <div>
        <h1 className="text-blue-500 text-4xl font-bold mb-2">
          Grab Unto 5% Off On
        </h1>
        <h1 className="text-blue-500 text-4xl font-bold mb-2">Selected Shoe</h1>
        <button className="bg-[#2C3E50] text-white px-6 py-2 ml-9 mt-5 rounded-full hover:bg-gray-700">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Shoe;
