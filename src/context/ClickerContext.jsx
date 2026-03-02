import { createContext, useReducer, useState } from "react";

const INITIAL_STATE = {
  clickValue: 1000,
  clicks: 0,
  initialUpgrades: {
    mouse_gamer: {
      name: "Mouse de Bolinha",
      custo: 50,
      multi: 2,
      acquired: false,
      desc: "Mouse gamer raiz. Click + 2.",
      type: "common",
    },
    cafe_ads: {
      name: "Café Requentado",
      custo: 200,
      multi: 5,
      acquired: false,
      desc: "Energia de ruindade. Clique + 5.",
      type: "common",
    },
    teclado_mecanico: {
      name: "Teclado RGB",
      custo: 600,
      multi: 12,
      acquired: false,
      desc: "Aumenta o muito o FPS. Clique + 12.",
      type: "uncommon",
    },
    placa_video: {
      name: "GT 1030",
      custo: 1500,
      multi: 30,
      acquired: false,
      desc: "Meus clicks vão rodar até sua mãe. Clique + 30.",
      type: "common",
    },
  },
  storeUpgrades: {
    setup_limpo: {
      name: "Setup Limpo",
      custo: 250,
      multi: 5,
      acquired: false,
      desc: "Organização é tudo. Cliques valem +5.",
      type: "uncommon",
    },
    internet_fibra: {
      name: "Internet Discada",
      custo: 100,
      multi: 2,
      acquired: false,
      desc: "Bem vindo lag! Cliques valem +2.",
      type: "commom",
    },
    cadeira_gamer: {
      name: "Cadeira De Bar",
      custo: 1000,
      multi: 35,
      acquired: false,
      desc: "Farmou aura. Cliques valem +35.",
      type: "uncommon",
    },
    teclado_mecanico: {
      name: "Teclado Mecânico da Shopee",
      custo: 2000,
      multi: 45,
      acquired: false,
      desc: "Cliques valem +45.",
      type: "uncommun",
    },
    gpu_raytracing: {
      name: "GPU Usada",
      custo: 6000,
      multi: 120,
      acquired: false,
      desc: "Gráficos no ultra. Cliques valem +120.",
      type: "rare",
    },
    ia_assistente: {
      name: "IA",
      custo: 15000,
      multi: 350,
      acquired: false,
      desc: "Quebra o código. Cliques valem +350.",
      type: "rare",
    },
    super_computador: {
      name: "Notebook da Positivo",
      custo: 1,
      multi: 1.5,
      acquired: false,
      desc: "Sem comentarios. Cliques 1.5x.",
      type: "legendary",
    },
    neuralink: {
      name: "DAVI JONES",
      custo: 1,
      multi: 2,
      acquired: false,
      desc: "É O WESKER?. Cliques valem 2x.",
      type: "legendary",
    },
    canetaAzul: {
      name: "CANETA AZUL",
      custo: 500,
      multi: 10,
      acquired: false,
      desc: "Azul caneta, caneta azul! Cliques valem +10.",
      type: "common",
    },

    ednaldoPereira: {
      name: "EDNALDO PEREIRA",
      custo: 5000,
      multi: 150,
      acquired: false,
      desc: "Você não vale nada, você vale tudo! Cliques valem +150.",
      type: "uncommon",
    },

    vovoInvestidor: {
      name: "VOVÔ DO BITCOIN",
      custo: 25000,
      multi: 800,
      acquired: false,
      desc: "Comprei na alta, vendi na baixa. Cliques valem +800.",
      type: "rare",
    },

    pobreComputador: {
      name: "PC DA POSITIVO",
      custo: 1000,
      multi: -5, // Um upgrade que na verdade é um bait kkkk
      acquired: false,
      desc: "O Windows está atualizando... Cliques valem -5.",
      type: "common",
    },

    jailsonMendes: {
      name: "PAI DE FAMÍLIA",
      custo: 1,
      multi: 3.5,
      acquired: false,
      desc: "Ai, que delícia, cara! Clique x 3.5.",
      type: "legendary",
    },

    ratinho: {
      name: "RATINHOOO",
      custo: 1,
      multi: 1200,
      acquired: false,
      desc: "Rapaz!!. Cliques valem +1200.",
      type: "rare",
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
const upgradeAdded = (
  state,
  custo,
  newMulti,
  upgradeKey,
  upgradesKey,
  type,
) => {
  // Verificamos se o jogador tem cliques suficientes
  if (state.clicks >= custo) {
    return {
      ...state,
      clicks: state.clicks - custo,
      clickValue: state.clickValue + newMulti,
      [upgradesKey]: {
        ...state[upgradesKey],
        [upgradeKey]: {
          ...state[upgradesKey][upgradeKey],
          acquired: true,
        },
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
    const storeItem = state.storeUpgrades[action.upgradeKey];
    switch (action.type) {
      case "BUY_UPGRADE":
        return upgradeAdded(
          state,
          item.custo,
          item.multi,
          action.upgradeKey,
          action.upgrades,
          action.type,
        );
      case "STORE_UPGRADE":
        return upgradeAdded(
          state,
          storeItem.custo,
          storeItem.multi,
          action.upgradeKey,
          action.upgrades,
          action.type,
        );
      case "STORAGE_REROL":
        const cost = 100;
        if (state.clicks >= cost) {
          return {
            ...state,
            clicks: state.clicks - cost,
            message: "Loja atualizada!",
          };
        }
        return { ...state, message: "Sem cliques para o Reroll!" };
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
