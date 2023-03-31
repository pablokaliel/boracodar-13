import {
  Container,
  SwapperContainer,
  DivInfo,
  DivNumberCard,
  InputCard,
  DivNick,
  DivTwoInputs,
  DivValidate,
  InputValitade,
  DivCVV,
  InputCVV,
  DivCard,
  CardFront,
  DivVisa,
  DivNumbers,
  DivNickAndValidate,
  DivSecurityInfo,
  CardBack,
  Div,
  DivNumberCVV,
  DivCVVBack,
  Swapper,
  FlipCard,
} from "./styles";

import visa from "../assets/visa.png";
import security from "../assets/security.png";
import payment from "../assets/payment.png";
import { useState } from "react";
import InputMask from "react-input-mask";



function Home() {

  const [name,setName]= useState("")
  const [number,setNumber]= useState("")
  const [validate,setValidate]= useState("")
  const [code,setCode]= useState("")

  const handleChangeName = (event) => {
    setName(event.target.value);
    
  };
  
  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
    
  };

  const handleChangeValidate = (event) => {
    setValidate(event.target.value);
    
  };

  const handleChangeCode = (event) => {
    setCode(event.target.value);
    
  };


  return (
    <Container>
      <SwapperContainer>

        <Swapper>
          <DivInfo>
            <DivNumberCard>
              <label htmlFor="number">Número do cartão</label>
              <InputCard placeholder="Número do cartão" mask="9999 9999 9999 9999" id="number" name="number" value={number} onChange={handleChangeNumber}  disableUnderline/>
              
            </DivNumberCard>
            <DivNick>
              <label htmlFor="name">Nome do titular</label>
              <InputCard  placeholder="Nome como está no cartão" id="name" name="name" type="text" value={name} onChange={handleChangeName} maxLength={20} disableUnderline/>
            </DivNick>
            <DivTwoInputs>
              <DivValidate>
                <label htmlFor="validate">Validade</label>
                <InputValitade placeholder="mm/aa" mask="99/99" id="validate" name="validate" value={validate} onChange={handleChangeValidate} disableUnderline/>
              </DivValidate>
              <DivCVV>
                <label htmlFor="code">CVV</label>
                <InputCVV placeholder="***" mask="999" id="code" name="code" value={code} onChange={handleChangeCode} disableUnderline/>
              </DivCVV>
            </DivTwoInputs>
          </DivInfo>

          <DivCard>
            <CardFront>
              <DivVisa>
                <img src={visa} alt="" />
                <img className="payment" src={payment} alt="" />
              </DivVisa>
              <DivNumbers>
              <span>{number === "" ? <span>4716 9038 02** ****</span> : number} </span>
              </DivNumbers>
              <DivNickAndValidate>
                <span>{name === "" ? <span>Seu nome aqui</span> : name} </span>
                <span>{validate === "" ? <span>xx/xx</span> : validate} </span>
                
              </DivNickAndValidate>
            </CardFront>

            <CardBack>
              <Div />
              <DivCVVBack>
                <DivNumberCVV><span>{code === "" ? <span>***</span> : code} </span></DivNumberCVV>
                <p>CVV</p>
              </DivCVVBack>
            </CardBack>

            <DivSecurityInfo className="info">
              <img src={security} alt="" />
              <span>Seus dados estão seguros</span>
            </DivSecurityInfo>
          </DivCard>

        </Swapper>
        <button>Adicionar cartão</button>
      </SwapperContainer>
    </Container>
  );
}

export default Home;
