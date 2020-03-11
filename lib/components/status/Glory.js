import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, InputNumber, Input } from "antd";

import { confirmSaveGlory, settingGloryBuildings } from "../../ducks/status";

const inputStyle = {
  display: "inline-block",
  width: "calc(33% - 5px)",
  marginRight: 4
};

const Glory = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.status);
  const {glory} = status;
  
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
        <Form.Item label="명건작 상태를 입력하세오">
          <Form.Item name="fire"  style={inputStyle}>
            <InputNumber name="fire" placeholder="불속성 공격력 건물" max={10} />
          </Form.Item>
          <Form.Item name="spd"  style={inputStyle}>
            <InputNumber name="spd" placeholder="공속" max={10} />
          </Form.Item>
          <Form.Item name="atk" style={inputStyle}>
            <InputNumber name="atk" placeholder="공격력" max={10} />
          </Form.Item>
          <Form.Item name="hp"  style={inputStyle}>
            <InputNumber name="hp" placeholder="체력" max={10} />
          </Form.Item>
          <Form.Item name="def"  style={inputStyle}>
            <InputNumber name="def" placeholder="방어력" max={10} />
          </Form.Item>
          <Form.Item name="criDmg"  style={inputStyle}>
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
