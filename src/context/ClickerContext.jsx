import { createContext, useReducer, useState } from "react";

const INITIAL_STATE = {
  clickValue: 1,
  clicks: 0,
  initialUpgrades: {
    mouse_gamer: {
      name: "Mouse de Bolinha",
      custo: 50,
      multi: 2,
      acquired: false,
      desc: "Mouse gamer raiz. Click + 2.",
    },
    cafe_ads: {
      name: "Café Requentado",
      custo: 200,
      multi: 5,
      acquired: false,
      desc: "Energia de ruindade. Clique + 5.",
    },
    teclado_mecanico: {
      name: "Teclado RGB",
      custo: 600,
      multi: 12,
      acquired: false,
      desc: "Aumenta o muito o FPS. Clique + 12.",
    },
    placa_video: {
      name: "GT 1030",
      custo: 1500,
      multi: 30,
      acquired: false,
      desc: "Meus clicks vão rodar até sua mãe. Clique + 30.",
    },
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
      initialUpgrades: {
        ...state.initialUpgrades,
        [upgradeKey]: { ...state.initialUpgrades[upgradeKey], acquired: true },
      },
      message: "Upgrade feito com sucesso!",
    };
  }

  return { ...state, message: "Batata fi! ce não tem clicks não" };
};

export const ClickerItensContext = createContext();

export const ClickerProvider = ({ children }) => {
  const reducer = (state, action) => {
    const item = state.initialUpgrades[action.upgradeKey];
    switch (action.type) {
      case "BUY_UPGRADE":
        return upgradeAdded(state, item.custo, item.multi, action.upgradeKey);
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
