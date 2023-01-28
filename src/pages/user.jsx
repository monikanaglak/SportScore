import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mocked_Data } from "../utils/local_data";
import { Header } from "../components/Header";
import { Asside } from "../components/Asside";
import { Greetings } from "../components/Greetings";
import { Macrocard } from "../components/Macrocard";
import { Barchart_compo } from "../components/Barchart";
import { Average_sessions } from "../components/Average_sessions";
import { RadarCh } from "../components/Radarchart";
import { ScoreChart } from "../components/Piechart";
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
  margin-top: 1px;
  display: flex;
  margin-left: 30px;
  gap: 10px;
  margin-top: -60px;
`;
export function User() {
  let { id } = useParams();
  const [user_Data, set_user_Data] = useState([]);
  const [userActivity, set_user_Activity] = useState(null);
  const [userPerformance, setUser_performance] = useState(null);
  const [userSessions, set_user_Sessions] = useState(null);
  useEffect(() => {
    const dataUser = mocked_Data.get_mock_user_info(id);
    set_user_Data(dataUser);

    const dataActivity = mocked_Data.get_mock_activity_info(id);
    set_user_Activity(dataActivity);

    const data_performance = mocked_Data.get_mock_performance_info(id);
    const format_performance = data_performance.data.map((data) => {
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
    setUser_performance(format_performance);

    const dataSessions = mocked_Data.get_mock_sessions_info(id);
    if (dataSessions.sessions.length == 0) return null;
    const format_data = dataSessions.sessions.map((data) => {
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
    set_user_Sessions(format_data);
  }, []);

  if (!userActivity || !userPerformance || !userSessions || !userActivity) {
    return <h2>Loading...</h2>;
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
              <Greetings name={user_Data.userInfos.firstName}></Greetings>
              <Barchart_compo sessions={userActivity.sessions} />
            </div>
            <Diagrams>
              <Average_sessions average={userSessions} />
              <RadarCh performance={userPerformance} />
              <ScoreChart {...user_Data} />
            </Diagrams>
          </Article>
          <Ass>
            <Macrocard
              calorie={user_Data.keyData.calorieCount}
              proteines={user_Data.keyData.proteinCount}
              carbohydrateCount={user_Data.keyData.carbohydrateCount}
              lipidCount={user_Data.keyData.lipidCount}
            />
          </Ass>
        </Main>
      </Container>
    </Allinside>
  );
}
