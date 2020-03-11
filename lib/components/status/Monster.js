import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

const inputStyle = {
  display: "inline-block",
  width: "calc(33% - 5px)",
  height: "100px",
  marginRight: 4
};

const Monster = () => {
  const onFinish = values => {
    console.log("Received values from form: ", values);
  };
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item label="뇌제 3스 레벨" name="thirdSkillLevel">
          <InputNumber name="third-level" max={4} />
        </Form.Item>
        <Form.Item label="전열몹 수" name="numberOfBattleLine">
          <InputNumber name="numberOfBattleLine" max={4} suffix="마리" />
        </Form.Item>
        <Form.Item style={inputStyle}>
          <Button type="primary" htmlType="submit">
            저장하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Monster;
