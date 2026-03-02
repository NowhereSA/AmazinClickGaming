import { useContext } from "react";
import styles from "./CardItem.module.css";
import { ClickerItensContext } from "../../context/ClickerContext";
const CardItem = ({ upgradeKey, name, valor, desc, isBuyed }) => {
  const { state, dispatch } = useContext(ClickerItensContext);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "BUY_UPGRADE", upgradeKey: upgradeKey });
  };
  return (
    <>
      {isBuyed ? (
        <div className={styles.cardBuyed}>
          <div className={styles.text}>
            <p>{name}</p>
            <p>{valor}</p>
            <p>{desc}</p>
          </div>
          <div className={styles.buyed}>
            <p>Adquirido</p>
          </div>
        </div>
      ) : (
        <div className={styles.cardItem}>
          <p>{name}</p>
          <p>{valor}</p>
          <p>{desc}</p>
          <div className={styles.button} onClick={handleClick}>
            <p>Comprar</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardItem;
