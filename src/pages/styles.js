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
  border: 1px solid #374151;
  background: #1f2937;
  border-radius: 8px;
  padding: 32px;
  button {
    height: 56px;
    width: 100%;
    margin-top: 48px;
    color: #fff;
    background: #9333ea;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 18px;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 64px;
`;

export const Swapper = styled.div`
  display: flex;
`;
export const FlipCard = styled.div``;

export const DivNumberCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  label {
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }
`;

export const InputCard = styled(InputMask)`
  padding: 12px;
  color: #f3f4f6;
  outline: none;
  width: 328px;
  height: 48px;
  :focus {
    border: 1.5px solid #9333ea;
  }
  background: #111827;
  border: 1px solid #374151;
  border-radius: 4px;
`;

export const DivNick = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  label {
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-bottom: 4px;
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
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }
`;

export const InputValitade = styled(InputMask)`
  padding: 12px;
  color: #f3f4f6;
  outline: none;
  width: 182px;
  height: 48px;
  :focus {
    border: 1.5px solid #9333ea;
  }

  background: #111827;

  border: 1px solid #374151;
  border-radius: 4px;
`;

export const DivCVV = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: #e5e7eb;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }
`;

export const InputCVV = styled(InputMask)`
  padding: 12px;
  color: #f3f4f6;
  outline: none;
  width: 130px;
  height: 48px;
  :focus {
    border: 1.5px solid #9333ea;
  }

  background: #111827;

  border: 1px solid #374151;
  border-radius: 4px;
`;

export const DivCard = styled.div`
  width: 50%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  perspective: 1000px;
  :hover {
    .info {
      transform: rotateY(-180deg);
    }
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  width: 280px;
  height: 168px;
  background: rgba(17, 24, 39, 0.4);
  backdrop-filter: blur(24px);
  background-image: url(${bgblur});
  /* border: 1px solid #000000; */
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-position: contain;
  padding: 0px 24px;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  height: 168px;
  width: 280px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: rgba(17, 24, 39, 0.4);
  backdrop-filter: blur(24px);
  background-image: url(${bgbackblur});
  /* border: 1px solid #000000; */
  border: none;
  border-radius: 8px;
  background-position: contain;
  padding-top: 16px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  left: 0px;
  /* padding:0px 24px; */
`;

export const Div = styled.div`
  background: #111827;
  height: 32px;
  width: 100%;
`;

export const DivCVVBack = styled.div`
  padding: 0px 24px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 46px;
  p {
    color: #fff;
  }
`;

export const DivNumberCVV = styled.div`
  background-color: #fff;
  width: 201px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  color: #000;
`;

export const DivVisa = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  img {
    margin-top: 16px;
    width: 32px;
    height: 32px;
  }
  .payment {
    height: 24px;
    width: 24px;
  }
`;

export const DivNumbers = styled.div`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  span {
  }
`;

export const DivNickAndValidate = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #f9fafb;
  }
`;

export const DivSecurityInfo = styled.div`
  margin-top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 16px;
  color: #e5e7eb;
`;
