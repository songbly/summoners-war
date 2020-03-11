import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

const InputGroup = Input.Group;

const inputStyle = {
  display: "inline-block",
  width: "calc(33% - 5px)",
  marginRight: 4
};

const Guild = () => {
  const onFinish = values => {
    console.log("Received values from form: ", values);
  };
  return (
    <div className="glory">
      <p>길드 버프는 얼마나 받을 수 있으까??</p>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item label="길드 레벨을 입력하세요!">
          <>
            <Form.Item name="guildLV" style={inputStyle}>
              <InputNumber name="guildLV" placeholder="길드레벨" max={30} />
            </Form.Item>
            <Form.Item style={inputStyle}>
              <Button type="primary" htmlType="submit">저장하기</Button>
            </Form.Item>
          </>
          <InputGroup>
            <Form.Item name="guildATK" style={inputStyle}>
              <Input name="guildATK" placeholder="공격력" max={10} disabled />
            </Form.Item>

            <Form.Item name="guildHP" style={inputStyle}>
              <Input name="guildHP" placeholder="체력" max={10} disabled />
            </Form.Item>
            <Form.Item name="guildDEF" style={inputStyle}>
              <Input name="guildDEF" placeholder="방어력" max={10} disabled />
            </Form.Item>
          </InputGroup>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Guild;
