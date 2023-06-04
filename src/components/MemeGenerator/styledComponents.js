import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    width: 70%;
  }
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 300px;
  background-size: cover;
  padding: 0px 10px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 48%;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`

export const TextContainer = styled.p`
  font-size: ${props => props.activeFontSizeId}px;
  font-family: 'Open Sans';
  color: #ffffff;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomLabel = styled.label`
  font-size: 15px;
  line-height: 1.2;
  margin-bottom: 0px;
  font-family: 'Open Sans';
  font-weight: 600;
  color: #7e858e;
`

export const CustomInput = styled.input`
  width: 100%;
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  padding: 12px 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #d7dfe9;
`

export const CustomSelect = styled.select`
  width: 45%;
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  border: 1px solid #d7dfe9;
  height: 40px;
  padding: 10px;
  margin: 10px 0px;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding: 12px 14px;
`

export const GenerateButton = styled.button`
  font-size: 16px;
  font-family: 'Open Sans';
  color: #ffffff;
  background-color: #0b69ff;
  border: none;
  padding: 12px 38px;
  border-radius: 8px;
  min-width: 25px;
  max-width: 150px;
  cursor: pointer;
  outline: none;
  margin-top: 15px;
`

export const Heading = styled.h1`
  font-size: 33px;
  font-family: 'Open Sans';
  font-weight: 700;
  color: #35469c;
`
