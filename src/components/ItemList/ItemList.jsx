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
        {Object.keys(state.initialUpgrades).map((key) => {
          const item = state.initialUpgrades[key];
          return (
            <CardItem
              key={key}
              upgradeKey={key}
              name={item.name}
              valor={item.custo}
              desc={item.desc}
              isBuyed={item.acquired}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
