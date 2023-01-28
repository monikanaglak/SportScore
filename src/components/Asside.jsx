import styled from "styled-components";
import yoga from "../../public/images/yoga.svg";
import bike from "../../public/images/bike.svg";
import swimming from "../../public/images/swimming.svg";
import musculation from "../../public/images/musculation.svg";
import copy from "../../public/images/copy.png"
const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 10vw;
  max-height: 750px;
`;
const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border-radius: 6px;
  background-color: white;
`;
const Copy= styled.div`
 margin-bottom:200px;
 width:10px;
 height:20px;

 .copy{
  margin-top:50px;
 }
`;
export function Asside() {
  return (
    <Wrapper>
      <Box>
        <img src={yoga} alt="yoga" className="yoga icon"></img>
      </Box>
      <Box>
        <img src={bike} alt="bike" className="bikking icon"></img>
      </Box>
      <Box>
        <img src={swimming} alt="swimming" className="swimming icon"></img>
      </Box>
      <Box>
        <img src={musculation} alt="logo" className="musculation icon"></img>
      </Box>
      <Copy>
      <img src={copy} alt="logo" className="copy"></img>
      </Copy>
    </Wrapper>
  );
}
