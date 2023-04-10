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
  DivVisa,
  DivNumbers,
  DivNickAndValidate,
  DivSecurityInfo,
  Div,
  DivNumberCVV,
  DivCVVBack,
  Swapper,
  FlipContainer,
  Flipper,
  Front,
  Back,
} from "./styles";

import { useState } from "react";

import visa from "../assets/visa.png";
import security from "../assets/security.png";
import payment from "../assets/payment.png";
import help from "../assets/help.png";

function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [validate, setValidate] = useState("");
  const [code, setCode] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChangeName = (event) => {
    setName(event.target.value);
    validateInputs();
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
    validateInputs();
  };

  const handleChangeValidate = (event) => {
    setValidate(event.target.value);
    validateInputs();
  };

  const handleChangeCode = (event) => {
    setCode(event.target.value);
    validateInputs();
  };

  function validateInputs() {
    if (name !== "" && number !== "" && validate !== "" && code !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function onSubmit(userData) {
    console.log(userData);
  }

  function onSubmitButton() {
    if (number == "" || name === "" || code == "" || validate === "") {
      return alert("preencha todos os dados para compeltar o cadastro");
    } else {
      return alert(
        `Olá ${name}, o Cartão com validade do dia ${validate} foi regristado com sucesso!`
      );
    }
  }

  return (
    <Container>
      <SwapperContainer>
        <Swapper onSubmit={onSubmit}>
          <DivInfo>
            <DivNumberCard>
              <label htmlFor="number">Número do cartão</label>
              <InputCard
                placeholder="Número do cartão"
                mask="9999 9999 9999 9999"
                id="number"
                name="number"
                value={number}
                onChange={handleChangeNumber}
                disableUnderline
              />
            </DivNumberCard>

            <DivNick>
              <label htmlFor="name">Nome do titular</label>
              <InputCard
                placeholder="Nome como está no cartão"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleChangeName}
                maxLength={20}
                disableUnderline
              />
            </DivNick>

            <DivTwoInputs>
              <DivValidate>
                <label htmlFor="validate">Validade</label>
                <InputValitade
                  placeholder="mm/aa"
                  mask="99/99"
                  id="validate"
                  name="validate"
                  value={validate}
                  onChange={handleChangeValidate}
                  disableUnderline
                />
              </DivValidate>

              <DivCVV>
                <div>
                <label htmlFor="code">CVV</label> 
                 <img src={help} alt="botão de ajuda" title="este número está, geralmente, nas costas do seu cartão"/>
                </div>
                <InputCVV
                  placeholder="***"
                  mask="999"
                  id="code"
                  name="code"
                  value={code}
                  onChange={handleChangeCode}
                  disableUnderline
                />
              </DivCVV>
            </DivTwoInputs>
          </DivInfo>

          <FlipContainer>
            <Flipper>
            <Front>
              <DivVisa>
                <img src={visa} alt="" />
                <img className="payment" src={payment} alt="" />
              </DivVisa>

              <DivNumbers>
                <span>
                  {number === "" ? <span>4716 9038 02** ****</span> : number}{" "}
                </span>
              </DivNumbers>

              <DivNickAndValidate>
                <span>{name === "" ? <span>Seu nome aqui</span> : name} </span>
                <span>{validate === "" ? <span>xx/xx</span> : validate} </span>
              </DivNickAndValidate>
            </Front>

            <Back>
              <Div />
              <DivCVVBack>
                <DivNumberCVV>
                  <span>{code === "" ? <span>***</span> : code} </span>
                </DivNumberCVV>
                <p>CVV</p>
              </DivCVVBack>
            </Back>
            </Flipper>
            <DivSecurityInfo className="info">
              <img src={security} alt="" />
              <span>Seus dados estão seguros</span>
            </DivSecurityInfo>

          </FlipContainer>
        </Swapper>
        <button
          className={disabled ? "isdisabled" : "isnotdisabled"}
          disabled={disabled}
          type="submit"
          onClick={() => onSubmitButton()}
        >
          Adicionar cartão
        </button>
      </SwapperContainer>
    </Container>
  );
}

export default Home;
