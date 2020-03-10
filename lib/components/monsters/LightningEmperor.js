import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { LIGHTNING_EMPEROR } from "../constants/LightningEmperor";
import BasicForm from "../base/Form";
import { confirmSaveEmperor, updateEmperor } from "../../ducks/monsters";

const LightningEmperor = () => {
  const dispatch = useDispatch();
  const monsters = useSelector(state => state.monsters);
  const {emperor, isSaveEmperor} = monsters;
  const { FIRE_BALEYAR } = LIGHTNING_EMPEROR;
  const { HP, ATK, DEF, SPD, CRI_RATE, CRI_DMG } = FIRE_BALEYAR;

  const updateField = e => {
    dispatch(
      updateEmperor({
        ...emperor,
        [e.target.name]: e.target.value
      })
    );
  };
  const handleSubmit = (values) => {
    console.log('emperor-values',values);
    dispatch(updateEmperor(values));
    dispatch(confirmSaveEmperor());
  };

  return (
    <div>
      <p>(baleygr)불뇌제 스펙스펙</p>
      <BasicForm
        onSubmit={handleSubmit}
        defaultHp={HP}
        defaultAtk={ATK}
        defaultDef={DEF}
        defaultSpd={SPD}
        defaultCriRate={CRI_RATE}
        defaultCriDmg={CRI_DMG}
        onChange={updateField}
      >
        {isSaveEmperor ? "저장됐어여!!" : "저장 안하면 다날아가요!!!"}
      </BasicForm>
    </div>
  );
};

export default LightningEmperor;
