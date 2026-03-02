import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import ClickerMenu from "../../components/ClickerMenu/ClickerMenu";
import ItemList from "../../components/ItemList/ItemList";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {" "}
      <Header />
      <Sidebar />
      <ClickerMenu />
      <ItemList name="Initial upgrades" />
      <Footer />
    </div>
  );
};

export default Home;
