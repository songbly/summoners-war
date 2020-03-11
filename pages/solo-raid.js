import React from "react";
import { Tabs, Collapse } from "antd";

import Layout from "../lib/components/base/Layout";
import Info from "../lib/components/Info";
import LightningEmperor from "../lib/components/monsters/LightningEmperor";
import CowGirl from "../lib/components/monsters/CowGirl";
import Viking from "../lib/components/monsters/Viking";
import WarBear from "../lib/components/monsters/WarBear";
import Glory from "../lib/components/status/Glory";
import Guild from "../lib/components/status/Guild";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const SoloRaid = () => {
  if (process.browser) {
    const windowSize = window.innerWidth;
    console.log("window size", windowSize);
  }
  return (
    <div className="index">
      <style jsx>{`
        .solo-raid-title {
          position: relative;
          margin: 280px 0 0 0;
          padding: 5px 10px 15px;
          font-size: 18px;
        }
        .info {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          padding: 15px;
          background: #fff;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.12);
        }
        .contents {
          position: relative;
        }
      `}</style>
      <p className="solo-raid-title">뇌솔드 덱을 만들자!!</p>
      <div className="info">
        <p>
          <strong>⭐️⇩ 사용방법! ⇩ ⭐️ </strong>
        </p>
        <p>
          '추가' 항목들은 룬강이나 연마, 변환 등을 통해 예상되는 최종 스펙을
          알아보기 위함. (없으믄 안써도 되고, 있으면 쓰세여!)
        </p>
        <p>
          (예: 뇌제 공% 연마 2%, 깡공 연마 18 가능 -> 추가 공%에 '2%' 입력, 추가
          깡공에 '18' 입력)
        </p>
        <p> 해당 없거나 현재 스펙 그대로 보기 위해선 모두 숫자 '0' 입력</p>
        <p>
          모든 데이터의 출처는 미자쓰 길드의 <strong>쿨미자</strong>님의{" "}
          <a href="https://cafe.naver.com/smonwar/1862450">자료</a>를 바탕으로
          개발되었습니다. <br />
          사이트 개발은 제가했어요 희희 🤗
        </p>
      </div>
      <div className="contents">
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="내 상태를 입력하자 @_@ (명건작 & 길드버프 & 리더 종류)" key="1">
            <div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Glory" key="1">
                  <Glory />
                </TabPane>
                <TabPane tab="Guild" key="2">
                  <Guild />
                </TabPane>
              </Tabs>
            </div>
          </Panel>
          <Panel header="몹들의 스펙을 맞추자!" key="2">
            <div>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Info" key="1">
                  <Info />
                </TabPane>
                <TabPane tab="Emperor" key="2">
                  <LightningEmperor />
                </TabPane>
                <TabPane tab="CowGirl" key="3">
                  <CowGirl />
                </TabPane>
                <TabPane tab="Viking" key="4">
                  <Viking />
                </TabPane>
                <TabPane tab="WarBear" key="5">
                  <WarBear />
                </TabPane>
              </Tabs>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default SoloRaid;
