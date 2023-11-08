import React, { createContext, useContext, useState } from "react";
import useAxios from "../../hooks/useAxios";

const FastfoodContext = createContext();

const FastFoodProvider = ({ children }) => {
  const [url, setUrl] = useState("/FastFood/list");

  // fetch category List

  const [isCategoryLoading, categories, ,] = useAxios({
    url: "/FoodCategory/categories",
  });

  // fetch fastfoods Menu

  const [isFastfoodLoading, fastfoods, ,] = useAxios({
    url,
  });

  // create Filter method for filter fastfoods
  const filterItems = (id) => {
    setUrl(`/FastFood/list?${id && "categoryId=" + id}`);
  };

  // search products by user

  const searchItems = (term) => {
    setUrl(`/FastFood/search?${term && "term=" + term}`);
  };

  return (
    <FastfoodContext.Provider
      value={{
        isCategoryLoading,
        isFastfoodLoading,
        categories,
        fastfoods,
        filterItems,
        searchItems,
      }}
    >
      {children}
    </FastfoodContext.Provider>
  );
};

export default FastFoodProvider;

export const useFastFoods = () => useContext(FastfoodContext);

// const [url, setUrl] = useState("/FastFood/list");

// // fetch categories

// const [isLoading, categories] = useAxios({
//   method: "get",
//   url: "/FoodCategory/categories",
// });

// // fetch and filter fastfoods menu

// const [isMenuLoading, fastfoods] = useAxios({
//   method: "get",
//   url,
// });

// function filterItems(id) {
//   setUrl(`/FastFood/list?${id && "categoryId=" + id}`);
// }

// // search fastfoods

// async function searchFastFoods(term) {
//   setUrl(`/FastFood/search?${term && "term=" + term}`);
// }
