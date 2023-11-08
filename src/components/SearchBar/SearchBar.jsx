import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useFastFoods } from "../../contexts/FastFoodProvider/FastFoodProvider";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const { searchItems } = useFastFoods();

  async function submitHandler(e) {
    e.preventDefault();
    await searchItems(value);
  }
  return (
    <form onSubmit={submitHandler} className="w-1/2 flex items-center ">
      <label className="w-full relative  flex items-center">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="w-full z-1 p-2 px-9 font-vazir text-gray-500 rounded-md border border-green-500 focus:outline-none"
          type="text"
          placeholder="جستجو کنید"
        />
        <BsSearch
          type="submit"
          size={20}
          color="#22c55e"
          className="absolute mr-3"
        />
      </label>
    </form>
  );
};

export default SearchBar;
