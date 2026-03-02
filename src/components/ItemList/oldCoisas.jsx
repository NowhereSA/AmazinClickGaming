import { useCallback, useContext } from "react";
import CardItem from "../Carditem/CardItem";
import styles from "./Coisas.module.css";
import { ClickerItensContext } from "../../context/ClickerContext";

const Coisas = () => {
  const { state, dispatch } = useContext(ClickerItensContext);
  return (
    <div className={styles.coisasContainer}>
      <div className={styles.categoryContainer}>
        <p className={styles.titleItem}>Itens de batata</p>
        <div className={styles.itens}>
          <CardItem
            name={"Roblox"}
            valor={50}
            desc={"Click + 2"}
            click={() => dispatch({ type: "M2" })}
            isBuyed={state.upgrades["M2"]}
          />
          <CardItem
            name={"Batata palha"}
            valor={150}
            desc={"Click + 5"}
            click={() => dispatch({ type: "M5" })}
            isBuyed={state.upgrades["M5"]}
          />
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <p className={styles.titleItem}>Batata de ouro</p>
        <div className={styles.itens}>
          <CardItem
            name={"Dorama brasileiro"}
            valor={500}
            desc={"Click + 6"}
            click={() => dispatch({ type: "M6" })}
            isBuyed={state.upgrades["M6"]}
          />
          <CardItem
            name={"Cuz cuz paulista"}
            valor={15000}
            desc={"Click + 10"}
            click={() => dispatch({ type: "M10" })}
            isBuyed={state.upgrades["M10"]}
          />
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <p className={styles.titleItem}>BATATA SUPREMA</p>
        <div className={styles.itens}>
          <CardItem
            name={"Suco de academia"}
            valor={100000}
            desc={"Click + 20"}
            click={() => dispatch({ type: "M20" })}
            isBuyed={state.upgrades["M20"]}
          />
          <CardItem
            name={"MIOJO COM WHEY"}
            valor={999999}
            desc={"Click + 1000"}
            click={() => dispatch({ type: "M1000" })}
            isBuyed={state.upgrades["1000"]}
          />
        </div>
      </div>
      <div className={styles.categoryContainer}>
        <p className={styles.titleItem}>PASSiVAS</p>
        <div className={styles.itens}>
          <CardItem name={"SERINGA USADA"} valor={50} desc={""} />
          <CardItem name={"Jogador de Lol Gordo"} valor={1000} desc={""} />
        </div>
      </div>
    </div>
  );
};

export default Coisas;
