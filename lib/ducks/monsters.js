import { LIGHTNING_EMPEROR } from "../components/constants/LightningEmperor";
const { FIRE_BALEYAR } = LIGHTNING_EMPEROR;
const { HP, ATK, DEF, SPD, CRI_RATE, CRI_DMG } = FIRE_BALEYAR;
const EMPEROR_STATE = {
  defaultHp: HP,
  addHp0: 0,
  addHp1: 0,
  addHp2: 0,
  expectHp: 0,
  defaultAtk: ATK,
  addAtk0: 0,
  addAtk1: 0,
  addAtk2: 0,
  expectAtk: 0,
  defaultDef: DEF,
  addDef0: 0,
  addDef1: 0,
  addDef2: 0,
  expectDef: 0,
  defaultSpd: SPD,
  addSpd: 0,
  buffSpd: 0,
  expectSpd: 0,
  defaultCriRate: CRI_RATE,
  addCriRate: 0,
  expectCriRate: 0,
  defaultCriDmg: CRI_DMG,
  addCriDmg1: 0,
  addCriDmg2: 0,
  expectCriDmg: 0
};

const initialState = {
  emperor: EMPEROR_STATE,
  isSaveEmperor: false
};

export const UPDATE_EMPEROR = "UPDATE_EMPEROR";
export const CONFIRM_SAVE_EMPEROR = "CONFIRM_SAVE_EMPEROR";

export const updateEmperor = (emperor) => ({
  type: UPDATE_EMPEROR,
  emperor
});
export const confirmSaveEmperor = () => ({
  type: CONFIRM_SAVE_EMPEROR
});

const monsters = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMPEROR:
      return {
        ...state,
        emperor: {
          ...state.emperor,
          ...action.emperor
        }
      };
    case CONFIRM_SAVE_EMPEROR:
      return {
        ...state,
        isSaveEmperor: true
      };
    default:
      return state;
  }
};

export default monsters;
