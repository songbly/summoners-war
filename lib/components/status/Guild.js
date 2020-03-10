import { Form, Input, InputNumber, Col, Row, Alert } from "antd";
import React, { useState } from "react";
const InputGroup = Input.Group;
const Guild = () => {
  const [building, setBuilding] = useState({
    fire: 0,
    spd: 0,
    atk: 0,
    hp: 0,
    def: 0,
    criDmg: 0
  });
  const updateField = e => {
    console.log("e.target", e, e.target);
    setBuilding(
      {
        ...building,
        [e.target.name]: e.target.value
      },
      console.log("실행되네")
    );
  };
  return (
    <div className="glory">
      <p>길드 버프는 얼마나 받을 수 있으까??</p>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="길드 레벨을 입력하세요!">
          <InputGroup>
            <Row gutter={16}>
              <Col span={6}>
                <Form.Item name="guildLv" onChange={updateField}>
                  <InputNumber name="guildLv" placeholder="길드레벨" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="guildATK" onChange={updateField}>
                  <InputNumber
                    name="guildATK"
                    placeholder="공격력 버프"
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="guildHP" onChange={updateField}>
                  <InputNumber
                    name="guildHP"
                    placeholder="체력 버프"
                    disabled
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="guildDEF" onChange={updateField}>
                  <InputNumber
                    name="guildDEF"
                    placeholder="방어력 버프"
                    disabled
                  />
                </Form.Item>
              </Col>
            </Row>
          </InputGroup>
          <Alert message="Success" type="success" showIcon />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Guild;
