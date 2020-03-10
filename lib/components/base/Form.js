import React from "react";
import PropTypes from "prop-types";
import { Form, Input, InputNumber, Col, Row, Button } from "antd";
const BasicForm = ({
  defaultHp,
  defaultAtk,
  defaultDef,
  defaultSpd,
  defaultCriRate,
  defaultCriDmg,
  onChange,
  onSubmit,
  children
}) => {
  const onFinish = values => {
    onSubmit();
    console.log("values", values);
  };

  return (
    <div className="basic-form">
      <style jsx>{`
        .basic-form:global(.ant-input-number-input) {
          margin-right: 10px;
        }
      `}</style>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item label="HP">
          <Input.Group>
            <Row gutter={16}>
              <Col span={6}>
                <InputNumber disabled defaultValue={defaultHp} />
              </Col>
              <Col span={6}>
                <Form.Item name="addHp 0" onChange={onChange}>
                  <InputNumber
                    className="hp"
                    name="addHp0"
                    placeholder="뒷체"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="addHp 1" onChange={onChange}>
                  <InputNumber
                    className="hp"
                    name="addHp1"
                    placeholder="추가 체%"
                    defaultValue={0}
                    formatter={value => `${value}%`}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="addHp 2" onChange={onChange}>
                  <InputNumber
                    className="hp"
                    name="addHp2"
                    placeholder="추가 깡체"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Form.Item label="DEF">
          <Input.Group>
            <Row gutter={16}>
              <Col span={6}>
                <InputNumber disabled defaultValue={defaultDef} />
              </Col>
              <Col span={6}>
                <Form.Item name="addDef0" onChange={onChange}>
                  <InputNumber
                    className="def"
                    name="addDef0"
                    placeholder="뒷방 "
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="addDef1" onChange={onChange}>
                  <InputNumber
                    className="def"
                    name="addDef1"
                    placeholder="추가 방%"
                    defaultValue={0}
                    formatter={value => `${value}%`}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="addDef2" onChange={onChange}>
                  <InputNumber
                    className="def"
                    name="addDef2"
                    placeholder="추가 깡방"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Form.Item label="ATK">
          <Input.Group>
            <Row gutter={16}>
              <Col span={6}>
                <InputNumber disabled defaultValue={defaultAtk} />
              </Col>
              <Col span={6}>
                <Form.Item name="addAtk0" onChange={onChange}>
                  <InputNumber
                    className="atk"
                    name="addAtk0"
                    placeholder="뒷공"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="addAtk1" onChange={onChange}>
                  <InputNumber
                    className="atk"
                    name="addAtk1"
                    placeholder="추가 공%"
                    defaultValue={0}
                    formatter={value => `${value}%`}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="addAtk2" onChange={onChange}>
                  <InputNumber
                    className="atk"
                    name="addAtk2"
                    placeholder="추가 깡공"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Form.Item label="SPD">
          <Input.Group>
            <Row gutter={16}>
              <Col span={6}>
                <InputNumber disabled defaultValue={defaultSpd} />
              </Col>
              <Col span={6}>
                <Form.Item name="addSpd" onChange={onChange}>
                  <InputNumber
                    className="spd"
                    name="addSpd"
                    placeholder="뒷속"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="buffSpd" onChange={onChange}>
                  <InputNumber disabled placeholder="속버프" />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>

        <Form.Item label="CRI_DMG">
          <Input.Group>
            <Row gutter={16}>
              <Col span={6}>
                <InputNumber disabled defaultValue={defaultCriDmg} />
              </Col>
              <Col span={6}>
                <Form.Item name="addCriDmg1" onChange={onChange}>
                  <InputNumber
                    className="criDmg"
                    name="addCriDmg1"
                    placeholder="뒷치피"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="addCriDmg2" onChange={onChange}>
                  <Form.Item name="addCriDmg2" onChange={onChange}>
                    <InputNumber
                      className="criDmg"
                      name="addCriDmg2"
                      placeholder="추가 치피"
                    />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            저장하기
          </Button>
          <Button type="secondary">결과확인하기</Button>
        </Form.Item>
        {children}
      </Form>
    </div>
  );
};

BasicForm.propTypes = {
  defaultHp: PropTypes.number.isRequired,
  defaultAtk: PropTypes.number.isRequired,
  defaultDef: PropTypes.number.isRequired,
  defaultSpd: PropTypes.number.isRequired,
  defaultCriRate: PropTypes.number,
  defaultCriDmg: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

BasicForm.defaultProps = {
  defaultCriRate: 0,
  defaultCriDmg: 0
};

export default BasicForm;
