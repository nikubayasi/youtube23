import React from 'react'
import {OrbitControls, Stage} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Mac from './Mac';
import styled from 'styled-components';
const Desc = styled.div`
  width: 200px;
  height: 80px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top:200px;
  right:100px;

  @media only screen and (max-width: 768px){
  top:0;
  left:0;
  right: 0;
  bottom:0;
  margin:auto;
  }
`;
const Development = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.8}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>We design products with a strong focus on both world class design and ensuring your product is a market success.</Desc>
    </>
  )
}

export default Development
