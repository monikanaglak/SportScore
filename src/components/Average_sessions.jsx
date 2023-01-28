import React from "react";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceArea,
  Tooltip,
} from "recharts";
import SessionsToolType from "./SessionsToolType.jsx";

const Container = styled.div`
  position: relative;
  width: 225px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ff0000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  padding: 10px;
`;

const Title = styled.h2`
  position: absolute;
  font-weight: 600;
  font-size: 15px;
  padding: 10px 34px 2px 14px;
  color: rgba(255, 255, 255, 0.7);
  opacity:70%;
`;

/**
 * Render a LineChart with user average sessions Data
 * average:array of objects
 * @return {string} day
 * @return {number} sessionLenght
 * @return {JSX}
 */

export function Average_sessions({ average }) {
  console.log(average)
  const [index, setIndex] = useState(null);
  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={average}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, stroke: "rgba(255,255,255,0.7)" }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsToolType />} />
          {index !== null && <ReferenceArea x1={index} x2={index + 1} />}
          <Line
            type="monotone"
            padding={{ left: 20 }}
            dataKey="sessionLength"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              strokeWidth: 4,
              onClick: (_event, payload) => setIndex(payload.index),
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
Average_sessions.propTypes = {
  Average_sessions: PropTypes.shape({
    average: PropTypes.number,
  }),
};
