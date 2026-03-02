import { useContext } from "react";
import CardItem from "../Carditem/CardItem";
import styles from "./ItemList.module.css";
import { ClickerItensContext } from "../../context/ClickerContext";

const ItemList = ({ name }) => {
  const { state, dispatch } = useContext(ClickerItensContext);
  return (
    <div>
      <p style={{ textAlign: "center" }}>{name}</p>
      <div className={styles.coisasContainer}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default ItemList;
