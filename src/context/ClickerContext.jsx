import { createContext, useReducer, useState } from "react";

const INITIAL_STATE = {
  clickValue: 1,
  clicks: 0,
  upgrades: {
    M2: false,
    M5: false,
    M6: false,
    M10: false,
    M20: false,
    M1000: false,
  },

  message: "",
};

/**
 *
 * @param {*} clicks Player clicks
 * @param {*} valor Value for upgrade
 * @param {*} multiplicador Multiplier of upgrade
 * @returns an array with state, clicks and clickvalue
 */
const upgradeAdded = (state, custo, newMulti, upgradeKey) => {
  if (state.clicks >= custo) {
    return {
      ...state,
      clicks: state.clicks - custo,
      clickValue: newMulti + state.clickValue,
      upgrades: {
        ...state.upgrades,
        [upgradeKey]: true,
      },
      message: "Upgrade feito com sucesso!",
    };
  }

  return { ...state, message: "Batata fi! ce não tem clicks não" };
};

export const ClickerItensContext = createContext();

export const ClickerProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "M2":
        return upgradeAdded(state, 50, 2, "M2");
      case "M5":
        return upgradeAdded(state, 150, 5, "M5");
      case "M6":
        return upgradeAdded(state, 600, 6, "M6");
      case "M10":
        return upgradeAdded(state, 1500, 20, "M10");
      case "M20":
        return upgradeAdded(state, 1700, 100, "M20");
      case "M1000":
        return upgradeAdded(state, 6500, 1000, "M1000");
      case "CLICK":
        return {
          ...state,
          clicks: state.clicks + state.clickValue,
        };
      case "MESSAGE":
        return { ...state, message: "" };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ClickerItensContext.Provider value={{ state, dispatch }}>
      {children}
    </ClickerItensContext.Provider>
  );
};
