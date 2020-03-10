import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, InputNumber } from "antd";

import { confirmSaveGlory, settingGloryBuildings } from "../../ducks/glory";

const Glory = () => {
  const dispatch = useDispatch();
  const glory = useSelector(state => state.glory);

  const updateField = e => {
    dispatch(
      settingGloryBuildings({
        ...glory,
        [e.target.name]: e.target.value
      })
    );
    console.log("실행되네");
  };
  const onFinish = values => {
    console.log("values", values);
    dispatch(
      settingGloryBuildings({
        ...values
      })
    );
    dispatch(confirmSaveGlory());
  };
  return (
    <div className="glory">
      <p>(Glory building) 명건작</p>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item label="Fire Building">
          <Form.Item name="fire" onChange={updateField}>
            <InputNumber
              name="fire"
              placeholder="불속성 공격력 건물"
              max={10}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="SPD">
          <Form.Item name="spd" onChange={updateField}>
            <InputNumber name="spd" placeholder="공속" max={10} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="ATK">
          <Form.Item name="atk" onChange={updateField}>
            <InputNumber name="atk" placeholder="공격력" max={10} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="HP">
          <Form.Item name="hp" onChange={updateField}>
            <InputNumber name="hp" placeholder="체력" max={10} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="DEF">
          <Form.Item name="def" onChange={updateField}>
            <InputNumber name="def" placeholder="방어력" max={10} />
          </Form.Item>
        </Form.Item>
        <Form.Item label="CRI_DMG">
          <Form.Item name="criDmg" onChange={updateField}>
            <InputNumber name="criDmg" placeholder="치피" max={10} />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            저장하기
          </Button>
        </Form.Item>
        <p>
          {glory.isSaveGlory ? "저장됐어여!!" : "저장 안하면 다날아가요!!!"}
        </p>
      </Form>
    </div>
  );
};

export default Glory;
