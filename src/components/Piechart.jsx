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
width:200px;
height:320px;
background-color: #fbfbfb;


`
const Test = styled.div`
transform:rotate(45deg);
border:2px solid red;


`
const Rotation = styled.div`

transform: rotate(-45deg);

`

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
      <h4>Score</h4>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          style={{ backgroundColor: "#FBFBFB" }}
          width="100%"
          height="100%"
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          innerRadius={70}
          barSize={10}
          data={differents_scores}
          startAngle={-120}
          endAngle={-450}
        >
          
          <circle cx="50%" cy="50%" fill="white" r="82"></circle>
         
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
          <text
            className="scoreSize"
            fontWeight="700"
            fontSize={26}
            fill="#282D30"
            x="50%"
            y="45%"
            textAnchor="middle"
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
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
ScoreChart.propTypes = {
  todayScore: PropTypes.number,
  score: PropTypes.number
};
