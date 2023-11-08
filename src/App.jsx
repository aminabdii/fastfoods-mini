import "./App.css";
import CategoryList from "./components/CategoryList/CategoryList";
import FastFoodList from "./components/FastFoodList/FastFoodList";
import Header from "./components/Header/Header";
import FastFoodProvider from "./contexts/FastFoodProvider/FastFoodProvider";

function App() {
  return (
    <FastFoodProvider>
      <Header />
      <CategoryList />
      <FastFoodList />
    </FastFoodProvider>
  );
}

export default App;
