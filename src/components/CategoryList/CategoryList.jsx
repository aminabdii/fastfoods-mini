import React from "react";
import Loading from "../Loading/Loading";

import SearchBar from "../SearchBar/SearchBar";
import { useFastFoods } from "../../contexts/FastFoodProvider/FastFoodProvider";

const CategoryList = () => {
  const { isCategoryLoading, categories, filterItems } = useFastFoods();

  if (isCategoryLoading) return <Loading />;

  return (
    <div className="w-full">
      <div
        className="container max-w-screen-lg  mx-auto flex items-center justify-between px-4 gap-5 bg-white h-16 -mt-7 
      "
      >
        <ul className="w-1/2 flex justify-center gap-5 items-center font-vazir">
          <li
            className="hover:text-green-600 duration-150"
            onClick={() => filterItems()}
          >
            <a href="#">همه فست فود ها</a>
          </li>
          {categories.map((category) => {
            return (
              <li
                onClick={() => filterItems(category.id)}
                className="hover:text-green-600 duration-150"
                key={category.id}
              >
                <a href="#">{category.name}</a>
              </li>
            );
          })}
        </ul>
        <SearchBar />
      </div>
    </div>
  );
};

export default CategoryList;
