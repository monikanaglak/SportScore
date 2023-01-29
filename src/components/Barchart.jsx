import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ActivityToolType from "./ActivityToolType";

const Wrapper = styled.div`
  margin-bottom: 3em;
  height: 280px;
  border-radius: 5px;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  @media (max-width: 1025px) {
    padding-left: 0;
  }
  width:650px;
  
`;
const Container = styled.div`
  height: 230px;
  width: 650px;
  background-color: #fbfbfb;
`
const Head = styled.div`
  display: flex;
  justify-content:space-between;
  margin-top:4%;
`;

const Title = styled.h2`
  font-size: 15px;
  line-height: 24px;
  color: #20253a;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #74798c;
  margin-left: 10px;
`;

const Icon = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  align-self: center;
  margin-left: 30px;
`;

const Legend = styled.div`
  display: flex;

`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;
/**
 * Render a BarChart with data of user activity
 * @sessions:array of objects
 * @{number} day
 * @{number} kilogram
 * @{number} calories
 * @return {JSX}
 */
export function Barchart_compo({ sessions }) {
  return (
    <Wrapper>
      <Head>
        <Title>Activité quotidienne</Title>
        <Legend>
          <Info>
            <Icon color="#282D30" />
            <Text>Poids (kg)</Text>
          </Info>
          <Info>
            <Icon color="#E60000" />
            <Text>Calories brûlées (kCal)</Text>
          </Info>
        </Legend>
      </Head>
      <Container>
        <ResponsiveContainer>
          <BarChart barGap={8} barCategoryGap={1} data={sessions}>
            <CartesianGrid vertical={false} strokeDasharray="1 1" />
            <XAxis
              dataKey="day"
              tickLine={false}
              tick={{ fontSize: 14, stroke: "#9B9EAC" }}
              dy={15}
            />

            <YAxis
              yAxisId="kilogram"
              dataKey="kilogram"
              type="number"
              domain={["dataMin - 2", "dataMax + 1"]}
              tickCount="3"
              axisLine={false}
              orientation="right"
              tickLine={false}
              tick={{ fontSize: 14, stroke: "#9B9EAC" }}
              dx={15}
            />
            <YAxis
              yAxisId="calories"
              dataKey="calories"
              type="number"
              domain={["dataMin - 50", "dataMax + 20"]}
              hide={true}
            />
            <Tooltip content={<ActivityToolType/>}/>
            <Bar
              yAxisId="kilogram"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="calories"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[50, 50, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        
      </Container>
    </Wrapper>
  );
}
Barchart_compo.propTypes = {
  day:PropTypes.string,
  calories:PropTypes.number,
  kilogram:PropTypes.number
}