import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  width: 100px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  
`;
const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 150px;
  background-color: #fbfbfb;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
`;
const Fire = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background: #fceced;
  opactity: 6%;
  .something {
    width: 30px;
    height: 30px;
    background: transparent;
  }
`;
const Blue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background:#d9eefd;
  opactity: 6%;
  .something {
    width: 30px;
    height: 30px;
    background: transparent;
  }
`;
const Apple = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background:#fdfdec;
  opactity: 6%;
  .something {
    width: 30px;
    height: 30px;
    background: transparent;
  }
`;
const Hambourger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background:#fcebfc;
  opactity: 6%;
  .something {
    width: 30px;
    height: 30px;
    background: transparent;
  }
`;

const Text = styled.div`
  width: 100px;
  height: 50px;
`;

export function Macrocard({
  calorie,
  proteines,
  carbohydrateCount,
  lipidCount,
}) {
  return (
    <>
      <Container>
        <Article>
          <Image>
            <Fire>
              <img
                src="/public/images/path.png"
                alt="image"
                className="something"
              />
            </Fire>
          </Image>
          <Text>
            <p className="type">{calorie}kCal</p>
            <p className="type_name">Calories</p>
          </Text>
        </Article>

        <Article>
          <Image>
            <Blue>
              <img
                src="/public/images/leg.svg"
                alt="image"
                className="something"
              />
            </Blue>
          </Image>
          <Text>
            <p className="type">{proteines}g</p>
            <p className="type_name">Proteines</p>
          </Text>
        </Article>

        <Article>
          <Image>
            <Apple>
              <img src="/public/images/apple.svg" alt="image" />
            </Apple>
          </Image>
          <Text>
            <p className="type">{carbohydrateCount}g</p>
            <p className="type_name">Glucides</p>
          </Text>
        </Article>

        <Article>
          <Image>
            <Hambourger>
              <img src="/public/images/cheeseburger.svg" alt="image" />
            </Hambourger>
          </Image>
          <Text>
            <p className="type">{lipidCount}g</p>
            <p className="type_name">Lipides</p>
          </Text>
        </Article>
      </Container>
    </>
  );
}
Macrocard.propTypes = {
  calorie: PropTypes.number,
  proteines: PropTypes.number,
  carbohydrateCount: PropTypes.number,
  lipidCount: PropTypes.number,
};
Macrocard.defaut = {
  calorie: "999",
  proteines: "999",
  carbohydrateCount: "999",
  lipidCount: "999",
};
