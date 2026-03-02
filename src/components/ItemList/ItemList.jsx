import { useContext, useMemo, useState } from "react";
import CardItem from "../Carditem/CardItem";
import styles from "./ItemList.module.css";
import { ClickerItensContext } from "../../context/ClickerContext";
import { CgEnter } from "react-icons/cg";

const ItemList = ({ name }) => {
  const { state, dispatch } = useContext(ClickerItensContext);
  const [rerollTick, setRerollTick] = useState(0);

  const randomKeys = useMemo(() => {
    const keys = Object.keys(state.storeUpgrades);
    return keys.sort(() => Math.random() - 0.5).slice(0, 8);
  }, [rerollTick]);

  const handleReroll = () => {
    if (state.clicks >= 100) {
      dispatch({ type: "STORE_REROL" });
      setRerollTick((prev) => prev + 1);
    } else {
      dispatch({ type: "MESSAGE", payload: "Cliques insuficientes" });
    }
  };

  return (
    <>
      {name === "Store" ? (
        <>
          <div>
            <div className={styles.header}>
              <h2 style={{ textAlign: "center", color: "#ff8c38" }}>
                Loja de Upgrades
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}
              >
                <button onClick={handleReroll} className={styles.rerollBtn}>
                  🔄 Reroll (100 Clicks)
                </button>
              </div>
            </div>
            <div className={styles.coisasContainer}>
              {randomKeys.map((key) => {
                const item = state.storeUpgrades[key];
                return (
                  <CardItem
                    key={key}
                    upgradeKey={key}
                    upgrades={"storeUpgrades"}
                    name={item.name}
                    valor={item.custo}
                    desc={item.desc}
                    isBuyed={item.acquired}
                    rarity={item.type}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div>
          <p style={{ textAlign: "center" }}>{name}</p>
          <div className={styles.coisasContainer}>
            {Object.keys(state.initialUpgrades).map((key) => {
              const item = state.initialUpgrades[key];
              return (
                <CardItem
                  key={key}
                  upgradeKey={key}
                  upgrades={"initialUpgrades"}
                  name={item.name}
                  valor={item.custo}
                  desc={item.desc}
                  isBuyed={item.acquired}
                  rarity={item.rarity}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;
