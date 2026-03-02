import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClickerMenu from "../../components/ClickerMenu/ClickerMenu";
import ItemList from "../../components/ItemList/ItemList";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { ClickerItensContext } from "../../context/ClickerContext";

const Store = () => {
  const { state } = useContext(ClickerItensContext);
  return (
    <div>
      {" "}
      <Header />
      <Sidebar />
      <ItemList name="Store" />
      <Footer />
    </div>
  );
};

export default Store;
