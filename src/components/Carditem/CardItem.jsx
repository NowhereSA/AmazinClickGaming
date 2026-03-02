import styles from "./CardItem.module.css";
const CardItem = ({ name, valor, desc, click, isBuyed }) => {
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
          <div className={styles.button} onClick={click}>
            <p>Comprar</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardItem;
