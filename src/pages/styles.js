import styled from "styled-components";

import bgblur from "../assets/background-blur.png";
import bgbackblur from "../assets/backgroundback-blur.png";

import InputMask from "react-input-mask";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
`;

export const SwapperContainer = styled.div`
  width: 736px;
  height: 420px;
  padding: 32px;

  border: 1px solid #374151;
  background: #1f2937;
  border-radius: 8px;

  @media (max-width: 780px) {
   width: 100%;
   height: 100%;
   padding: 32px 32px;
  }

  button {
    height: 56px;
    width: 100%;
    margin-top: 48px;

    color: #fff;
    background: #9333ea;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 18px;
    
    transition: all 0.3s;
    :hover{
      background: #A855F7;
    }
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 64px;

  @media (max-width: 780px) {
    width:100%;
    margin-right:0px;
    margin-top:215px;
  }
`;

export const Swapper = styled.div`
  display: flex;

  @media (max-width: 780px) {
    flex-direction: column-reverse;
  }
`;

export const DivNumberCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    margin-bottom: 4px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
  }
`;

export const InputCard = styled(InputMask)`
  padding: 12px;
  width: 328px;
  height: 48px;

  color: #f3f4f6;
  background: #111827;
  border: 1px solid #374151;
  border-radius: 4px;

  outline: none;
  :focus {
    border: 1.5px solid #9333ea;
  }
`;

export const DivNick = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    margin-bottom: 4px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
  }
`;

export const DivTwoInputs = styled.div`
  display: flex;
  gap: 16px;
`;

export const DivValidate = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 4px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
  }
`;

export const InputValitade = styled(InputMask)`
  padding: 12px;
  width: 182px;
  height: 48px;

  background: #111827;
  border: 1px solid #374151;
  border-radius: 4px;
  color: #f3f4f6;
  outline: none;

  :focus {
    border: 1.5px solid #9333ea;
  }
`;

export const DivCVV = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 4px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
  }
`;

export const InputCVV = styled(InputMask)`
  padding: 12px;
  width: 130px;
  height: 48px;

  background: #111827;
  border: 1px solid #374151;
  border-radius: 4px;
  color: #f3f4f6;
  outline: none;

  :focus {
    border: 1.5px solid #9333ea;
  }
`;

export const DivCard = styled.div`
  width: 50%;
  position: relative;

  transition: transform 0.6s;
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 100%;
  }

  :hover {
  transform: rotateY(180deg);
    .info {
      transform: rotateY(-180deg);
    }
  }
`;

export const CardFront = styled.div`
  width: 280px;
  height: 168px;
  padding: 0px 24px;
  position: absolute;

  background: rgba(17, 24, 39, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: none;

  background-image: url(${bgblur});
  backdrop-filter: blur(24px);
  background-position: contain;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  height: 168px;
  width: 280px;
  padding-top: 16px;
  position: absolute;
  left: 0px;

  background: rgba(17, 24, 39, 0.4);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: none;

  background-image: url(${bgbackblur});
  backdrop-filter: blur(24px);
  background-position: contain;

  transform: rotateY(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const Div = styled.div`
  height: 32px;
  width: 100%;
  background: #111827;
`;

export const DivCVVBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px 24px;
  gap: 6px;
  margin-top: 46px;

  p {
    color: #fff;
  }
`;

export const DivNumberCVV = styled.div`
  width: 201px;
  height: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;

  background-color: #fff;
  border-radius: 4px;
  color: #000;
`;

export const DivVisa = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;

  img {
    width: 32px;
    height: 32px;
    margin-top: 16px;
  }

  .payment {
    height: 24px;
    width: 24px;
  }
`;

export const DivNumbers = styled.div`
  width: 100%;
  margin-bottom: 24px;

  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  text-align:justify;
  letter-spacing:4px;
  color: #fff;
`;

export const DivNickAndValidate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #f9fafb;
  }
`;

export const DivSecurityInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 220px;
  gap: 8px;

  font-size: 14px;
  line-height: 16px;
  color: #e5e7eb;

  @media (max-width: 780px) {
   display:none;
  }
`;
