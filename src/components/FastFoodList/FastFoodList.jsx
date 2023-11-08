import React from "react";
import "./FastFoodList.css";
import Loading from "../Loading/Loading";
import { useFastFoods } from "../../contexts/FastFoodProvider/FastFoodProvider";

const FastFoodList = () => {
  const { isFastfoodLoading, fastfoods } = useFastFoods();

  function renderContent() {
    if (isFastfoodLoading) return <Loading />;
    if (!fastfoods.length) {
      return (
        <p
          className="fade-in-horiz container max-w-screen-lg mx-auto bg-pink-200 border border-pink-500 rounded-md  p-3
            font-vazir  text-center mt-10
            "
        >
          برای کلیدواژه فوق هیچ آیتمی یافت نشد
        </p>
      );
    }
    return <FastFoods fastfoods={fastfoods} />;
  }
  return renderContent();
};

export default FastFoodList;

function FastFoods({ fastfoods }) {
  let delay = 0.1;
  return (
    <div className="w-full">
      <div className="container mx-auto mt-5">
        <FastFoodItem items={fastfoods} delay={delay} />
      </div>
    </div>
  );
}

function FastFoodItem({ items, delay }) {
  return (
    <div
      style={{ animationDelay: delay + "s" }}
      className="fade-in-horiz opacity-0 w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 font-vazir "
    >
      {items.map((fastfood) => {
        delay += 0.03;
        return (
          <div
            key={fastfood.id}
            className="flex flex-col items-center justify-center"
          >
            <div className="card__placeholder fade-in-horiz relative">
              <img
                className="w- rounded-t-md"
                src={fastfood.imageUrl}
                alt={fastfood.name}
              />
              <span className="absolute rounded-md bg-green-500 px-4 top-4 right-3">
                <p className="text-white">قیمت: {fastfood.price} تومان </p>
              </span>
            </div>
            <div className="bg-white h-full w-full p-4 flex flex-col items-center  gap-8 ">
              <p className="text-xl font-medium ">{fastfood.name}</p>
              <p className="text-sm text-gray-500 text-center h-12">
                {fastfood.ingredients}
              </p>
              <button className="border border-green-400 text-green-500 hover:bg-green-400 hover:text-white duration-150 rounded-md w-full py-2">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// function renderMenu() {
//   if (isMenuLoading) {
//     return <Loading />;
//   }

//   if (!fastfoods.length) {
//     return (
//       <p
//         className="fade-in-horiz container max-w-screen-lg mx-auto bg-pink-200 border border-pink-500 rounded-md  p-3
//       font-vazir  text-center mt-10
//       "
//       >
//         برای کلیدواژه فوق هیچ آیتمی یافت نشد
//       </p>
//     );
//   }
//   return <FastFoods fastfoods={fastfoods} />;
// }
