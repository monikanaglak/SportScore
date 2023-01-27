import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
const Wrapper = styled.div`
width:200px;
height:250px;
background-color: #282d30;
`

/**
 * RadarChart of recharts, represents performance of the user
 * @param {object} performance 
 * @param {string} kind of perfromance
 * @param {number} value of the performance
 * @return {JSX}
 */

export function RadarCh({ performance }) {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={performance}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
          />
          <PolarAngleAxis />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
RadarCh.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string,
    })
  ),
};
RadarCh.defaultProps = {
  List: [],
};
