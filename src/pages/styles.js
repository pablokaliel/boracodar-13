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

  .isdisabled {
    opacity: 0.5;
    :hover {
      background: #9333ea;
    }
  }

  .isnotdisabled {
    opacity: 1;
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
    :hover {
      background: #a855f7;
    }
  }
`;

export const DivInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 64px;

  @media (max-width: 780px) {
    width: 100%;
    margin-right: 0px;
    margin-top: 215px;
  }
`;

export const Swapper = styled.form`
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
    margin-bottom: 6px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;

    @media (max-width: 780px) {
      margin-bottom: 8px;
    }
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
    margin-bottom: 6px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;

    @media (max-width: 780px) {
      margin-bottom: 8px;
    }
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
    margin-bottom: 6px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;

    @media (max-width: 780px) {
      margin-bottom: 8px;
    }
  }
`;

export const InputValitade = styled(InputMask)`
  width: 182px;
  height: 48px;
  padding: 12px;

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

  div {
    display: flex;
    gap: 6px;

    img {
      width: 14px;
      height: 14px;
    }
  }

  label {
    margin-bottom: 6px;
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;

    @media (max-width: 780px) {
      margin-bottom: 8px;
    }
  }
`;

export const InputCVV = styled(InputMask)`
  width: 130px;
  height: 48px;
  padding: 12px;

  background: #111827;
  color: #f3f4f6;
  border-radius: 4px;
  border: 1px solid #374151;
  outline: none;

  :focus {
    border: 1.5px solid #9333ea;
  }
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
  justify-content: space-between;
  margin-bottom: 50px;

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

  text-align: justify;
  letter-spacing: 4px;
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

  gap: 8px;

  font-size: 14px;
  line-height: 16px;
  color: #e5e7eb;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const FlipContainer = styled.div`
  perspective: 1000px;
  width: 100%;

`;

export const Flipper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  transition: all 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;

  @media (max-width: 780px) {
    display: flex;
    justify-content:center;
  }

  :hover {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.div`
  width: 100%;
  height: 168px;
  padding: 0px 24px;
  position: absolute;

  background-image: url(${bgbackblur});
  backface-visibility: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: none;
  
  @media (max-width: 780px) {
   width:280px; 
  }
`;

export const Back = styled.div`
  width: 100%;
  height: 168px;
  position: absolute;
  padding-top: 16px;

  background-image: url(${bgblur});
  backface-visibility: hidden;
  border-radius: 8px;

  transform: rotateY(180deg);

  @media (max-width: 780px) {
   width:280px; 
  }
`;
