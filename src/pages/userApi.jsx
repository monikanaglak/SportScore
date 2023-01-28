import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Asside } from "../components/Asside";
import { Greetings } from "../components/Greetings";
import { Macrocard } from "../components/Macrocard";
import { Barchart_compo } from "../components/Barchart";
import { Average_sessions } from "../components/Average_sessions";
import { RadarCh } from "../components/Radarchart";
import { ScoreChart } from "../components/Piechart";
import { apiCalls } from "../utils/calls";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100%;
`;
const Allinside = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: auto;
`;
const Main = styled.div`
  display: flex;
`;
const ContainerAsside = styled.div`
  height: 740px;
`;
const Ass = styled.div`
  margin-left: 10px;
`;
const Article = styled.div`
  margin-top: 1px;
`;
const Diagrams = styled.div`
  display: flex;
  margin-left: 50px;
  gap: 10px;
  margin-top: -60px;
`;
export function UserApi() {
  const { id } = useParams();
  const [userApi, setUserApi] = useState(null);
  const [userApiActivity, setUserApiActivity] = useState(null);
  const [userApiPerformance, setUserApiPerformance] = useState(null);
  const [userApiSessions, setUserApiSessions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataApiUser = await apiCalls.getUser(id);
      setUserApi(dataApiUser);

      const dataApiUserActivity = await apiCalls.getUserActivity(id);
      setUserApiActivity(dataApiUserActivity);

      const dataApiPerformance = await apiCalls.getUserPerformance(id);
      const format_performance = dataApiPerformance.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: "cardio" };
          case 2:
            return { ...data, kind: "energy" };
          case 3:
            return { ...data, kind: "endurance" };
          case 4:
            return { ...data, kind: "strenght" };
          case 5:
            return { ...data, kind: "speed" };
          case 6:
            return { ...data, kind: "intensity" };
        }
      });
      setUserApiPerformance(format_performance);

      let dataApiSessions = await apiCalls.getUserAverageSession(id);

      const format_data = dataApiSessions.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
        }
      });
      setUserApiSessions(format_data);
    };
    fetchData(id);
  }, []);

  if (!userApi || !userApiPerformance || !userApiSessions || !userApiActivity) {
    return <h2>API n'est pas disponible...</h2>;
  }
  return (
    <Allinside>
      <Header />
      <Container>
        <ContainerAsside>
          <Asside />
        </ContainerAsside>
        <Main>
          <Article>
            <div className="greet">
              <Greetings name={userApi.userInfos.firstName}></Greetings>
              <Barchart_compo sessions={userApiActivity.sessions} />
            </div>
            <Diagrams>
              <Average_sessions average={userApiSessions} />
              <RadarCh performance={userApiPerformance} />
              <ScoreChart
                todayScore={userApi.todayScore}
                score={userApi.score}
              />
            </Diagrams>
          </Article>
          <Ass>
            <Macrocard
              calorie={userApi.keyData.calorieCount}
              proteines={userApi.keyData.proteinCount}
              carbohydrateCount={userApi.keyData.carbohydrateCount}
              lipidCount={userApi.keyData.lipidCount}
            />
          </Ass>
        </Main>
      </Container>
    </Allinside>
  );
}
