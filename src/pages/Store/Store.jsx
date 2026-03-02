import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClickerMenu from "../../components/ClickerMenu/ClickerMenu";
import ItemList from "../../components/ItemList/ItemList";
import Footer from "../../components/Footer/Footer";

const Store = () => {
  return (
    <div>
      {" "}
      <Header />
      <Sidebar />
      <ItemList name="Store" />
      <ItemList />
      <Footer />
    </div>
  );
};

export default Store;
