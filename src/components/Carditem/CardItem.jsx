import { useContext } from "react";
import styles from "./CardItem.module.css";
import { ClickerItensContext } from "../../context/ClickerContext";

const CardItem = ({
  upgradeKey,
  name,
  valor,
  desc,
  isBuyed,
  upgrades,
  rarity,
}) => {
  const { state, dispatch } = useContext(ClickerItensContext);
  console.log(rarity);
  const rarityClass =
    {
      commom: styles.commom,
      uncommon: styles.uncommom,
      rare: styles.rare,
      legendary: styles.legendary,
    }[rarity] || styles.commom;

  const handleClick = (e) => {
    e.preventDefault();
    if (isBuyed) return;

    const actionType =
      upgrades === "initialUpgrades" ? "BUY_UPGRADE" : "STORE_UPGRADE";

    dispatch({
      type: actionType,
      upgradeKey: upgradeKey,
      upgrades: upgrades,
    });
  };
  return (
    <>
      <div className={`${styles.baseCard} ${rarityClass}`}>
        <div className={styles.text}>
          <p>{name}</p>
          <p style={{ color: "#e26111" }}>{valor}</p>
          <p>{desc}</p>
          {isBuyed ? (
            <div className={styles.buyed}>
              <p>Adquirido</p>
            </div>
          ) : (
            <div className={styles.button} onClick={handleClick}>
              <p>Comprar</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardItem;
