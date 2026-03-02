import styles from "./ClickerMenu.module.css";
import { useContext, useEffect } from "react";
import { ClickerItensContext } from "../../context/ClickerContext";

const ClickerMenu = () => {
  const { state, dispatch } = useContext(ClickerItensContext);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "MESSAGE" });
    }, 3000);
  }, [state.message]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.clickerContainer}>
        <p className={styles.text}>Quantidade de Cliks:</p>
        <p className={styles.clicks}>{state.clicks}</p>
        {state.message && (
          <div className={styles.upgrade}>
            <p>{state.message}</p>
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <div onClick={() => dispatch({ type: "CLICK" })}>
          <p>+{state.clickValue}</p>
          <p>Aumentar click </p>
        </div>
      </div>
    </div>
  );
};
export default ClickerMenu;
