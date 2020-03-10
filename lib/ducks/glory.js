const initialState = {
  fire: 0,
  spd: 0,
  atk: 0,
  hp: 0,
  def: 0,
  criDmg: 0,
  isSaveGlory: false
};

export const SETTING_GLORY_BUILDINGS = "SETTING_GLORY_BUILDINGS";
export const CONFIRM_SAVE_GLORY = "CONFIRM_SAVE_GLORY";

export const settingGloryBuildings = glory => ({
  type: SETTING_GLORY_BUILDINGS,
  glory
});
export const confirmSaveGlory = () => ({
  type: CONFIRM_SAVE_GLORY
});

const glory = (state = initialState, action) => {
  switch (action.type) {
    case SETTING_GLORY_BUILDINGS:
      return {
        ...state,
        fire: action.glory.fire,
        spd: action.glory.spd,
        atk: action.glory.atk,
        hp: action.glory.hp,
        def: action.glory.def,
        criDmg: action.glory.criDmg
      };
    case CONFIRM_SAVE_GLORY:
      return {
        ...state,
        isSaveGlory: true
      };
    default:
      return state;
  }
};

export default glory;
