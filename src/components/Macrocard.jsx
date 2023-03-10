import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  width: 200px;
  display: flex;
  margin-top: 110px;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 20px;
`;
const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 110px;
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
  width: 55px;
  height: 55px;
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
  width: 55px;
  height: 55px;
  border-radius: 5px;
  background: #d9eefd;
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
  width: 55px;
  height: 55px;
  border-radius: 5px;
  background: #fdfdec;
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
  width: 55px;
  height: 55px;
  border-radius: 5px;
  background: #fcebfc;
  opactity: 6%;
  .something {
    width: 30px;
    height: 30px;
    background: transparent;
  }
`;

const Text = styled.div`
  width: 80px;
  height: 40px;
  margin-left: 10px;

  .type {
    font-weight: 700;
    font-size: 18px;
  }
  .type_name {
    font-weight: 400;
    font-size: 16px;
  }
`;

export function Macrocard({
  calorie,
  proteines,
  carbohydrateCount,
  lipidCount,
}) {
  console.log(calorie)
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
