import React from "react";
import styled from "styled-components";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import PropTypes from "prop-types";
import { UserApi } from "../pages/userApi";

const Wrapper = styled.div`
  width: 260px;
  height: 250px;
  background-color: #fbfbfb;
  position: relative;
`;

const Score = styled.div`
  z-index: 9999;
  position: absolute;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 5px;
`;
const Matisse = styled.div`
  display: flex;
  flex-direction: column;
  .chiffre {
    position:absolute;
    top:100px;
    left:115px;
    font-weight: 600;
    font-size:28px;
  }
  .expl{
    font-size:18px;
    font-weight:500;
    position:absolute;
    top:133px;
    left:108px;
  }
`;

/**
 * RadialBarChart of recharts, represents score of the user
 * @param {number} todayScore
 * @param {number} score
 * @return {JSX}
 */
export function ScoreChart({ todayScore, score }) {
  const differents_scores = [{ value: todayScore || score }];
  return (
    <Wrapper>
      <Score>Score</Score>

      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          width="100%"
          height="100%"
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          innerRadius={80}
          outerRadius={120}
          barSize={10}
          data={differents_scores}
          startAngle={90}
          endAngle={360}
          className="momo"
        >
          <circle
            cx="50%"
            cy="50%"
            fill="white"
            r="82"
            className="momo"
          ></circle>

          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={1}
            tick={false}
          />
          <RadialBar
            background
            dataKey="uv"
            angleAxisId={1}
            fill="#E60000"
            cornerRadius="10"
            data={[UserApi] ? [UserApi] : [user_Data]}
          />
          {/* <text
            className="scoreSize"
            fontWeight="700"
            fontSize={26}
            fill="#282D30"
            x="40%"
            y="45%"
            >{`${todayScore ? todayScore * 100 : score * 100}%`}</text>
          
          <text
            className="graphTitle"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="55%"
            textAnchor="middle"
          >
            de votre
          </text>
          <text
            className="graphTitle"
            fontWeight="500"
            fill="#74798C"
            x="50%"
            y="65%"
            textAnchor="middle"
          >
            objectif
  </text>*/}
        </RadialBarChart>
      </ResponsiveContainer>
      <Matisse>
        <p className="chiffre">{`${
          todayScore ? todayScore * 100 : score * 100
        }%`}</p>
        <div className="expl">
        <p>de votre</p>
        <p>objectif</p>
        </div>
      </Matisse>
    </Wrapper>
  );
}
ScoreChart.propTypes = {
  todayScore: PropTypes.number,
  score: PropTypes.number,
};
