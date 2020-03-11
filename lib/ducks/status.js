const GLORY_STATE = {
  fire: 0,
  spd: 0,
  atk: 0,
  hp: 0,
  def: 0,
  criDmg: 0,
  isSaveGlory: false
};

const GUILD_STATE = {
  guildLV: 0,
  guildATK: 0,
  guildDEF: 0,
  guildHP: 0,
  isSaveGuild: false
};

const initialState = {
  glory: GLORY_STATE,
  guild: GUILD_STATE
};

export const SETTING_GLORY_BUILDINGS = "SETTING_GLORY_BUILDINGS";
export const CONFIRM_SAVE_GLORY = "CONFIRM_SAVE_GLORY";
export const SETTING_GUILD_STATE = "SETTING_GUILD_STATE";

export const settingGloryBuildings = glory => ({
  type: SETTING_GLORY_BUILDINGS,
  glory
});
export const confirmSaveGlory = () => ({
  type: CONFIRM_SAVE_GLORY
});
export const settingGuildState = guild => ({
  type: SETTING_GUILD_STATE,
  guild
});

const status = (state = initialState, action) => {
  switch (action.type) {
    case SETTING_GLORY_BUILDINGS:
      return {
        ...state,
        glory: {
          fire: action.glory.fire,
          spd: action.glory.spd,
          atk: action.glory.atk,
          hp: action.glory.hp,
          def: action.glory.def,
          criDmg: action.glory.criDmg
        }
      };
    case CONFIRM_SAVE_GLORY:
      return {
        ...state,
        glory: {
          ...state.glory,
          isSaveGlory: true
        }
      };
    default:
      return state;
  }
};

export default status;
