import React, { useState } from "react";
import styled from "styled-components";
import Development from './Development';
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
]

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
position:relative;
color: black;
font-size: 14px;
font-weight: 300;
`;

const Container = styled.div`
width: 1300px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 768px){
  width: 100%;
  flex-direction: column;
  }
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 768px){
  padding: 20px;
  justify-content: center;
  }
`;

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor:pointer;
  color:transparent;
  -webkit-text-stroke: 1px white;
  position: relative; 
  
  @media only screen and (max-width: 768px){
  font-size: 24px;
  color: white;
  -webkit-text-stroke: 0px;
  }

  &::after{
    content: "${(props) => props.$text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow:hidden;
    white-space: nowrap;
  }
  &:hover{
    &::after{
      animation: moveText 0.5s linear both;

      @keyframes moveText{
        to{
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`

flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
            <ListItem key={item} $text={item} onClick={()=>setWork(item)}>
              {item}
            </ListItem>
          ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
            ) : work === "Development" ? (
            <Development />
            ) : (
            <ProductDesign />
            )}
        </Right>
      </Container>
    </Section>
  )
}

export default Works;

// import React from 'react'
// import styled from 'styled-components'

// const data = [
//   "Web Design",
//   "Development",
//   "Illustration",
//   "Product Design",
//   "Social Media",
// ];

// const Section = styled.div`
// height: 100vh;
// scroll-snap-align: center;
// display: flex;
// justify-content:center;
// `;

// const Container = styled.div`
// width: 1300px;
// display: flex;
// justify-content: space-between;
// `;

// const Left = styled.div`
// flex: 1;
// display: flex;
// align-items: center;
// `;

// const List = styled.ul`
// list-style: none;
// display: flex;
// flex-direction: column;
// gap: 20px;
// `;

// const ListItem = styled.li`
// font-size: 100px;
// font-weight: bold;
// cursor: pointer;
// color: transparent;
// -webkit-text-stroke: 1px white;
// position: relative;

// /* 初期状態の ::after */
//   ::after {
//     content: "${(props) => props.$text}";
//     position: absolute;
//     top: 0;
//     left: 0;
//     color: pink;
//     width: 0;
//     overflow: hidden;
//     z-index: 1;
//     background: rgba(0, 0, 0, 0.1); /* デバッグ用の背景色 */
//     opacity: 1; /* 一時的に可視化 */
//   }

//  &:hover {
//   ::after{
//     animation: moveText 0.5s linear both;

//     @keyframes moveText{
//       to{
//         width: 100%;
//         }
//       }
//     }
//   }
// `;
// const Right = styled.div`
// flex: 1;
// `;

// const Works = () => {
//   return (
//     <Section>
//       <Container>
//         <Left>
//           <List>
//             {data.map((item) => (
//             <ListItem key={item} $text={item}>{item}</ListItem>
//           ))}
//           </List>
//         </Left>
//         <Right>

//         </Right>
//       </Container>
//     </Section>
//   )
// }

// export default Works
