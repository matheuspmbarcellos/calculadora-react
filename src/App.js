import { Container, Content, Row } from "./styles";
import Input from "./components/Input"
import Button from "./components/Button"
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState("0")
  const [firstNumber, setFirstNumber] = useState("0")
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("")

  const handleOnClear = () => {
    setCurrentNumber("0")
    setFirstNumber("0")
    setResult(null)
    setOperation("")
  }

  const handleCurrentNumberClear = () => {
    setCurrentNumber("0")
  }

  const handleAddNumber = (number) => {    
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)  
  }

  const handleAddComma = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber(prev => `${prev}${'.'}`);
    }
  }

  const handleAddSum = () => {

    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("+")
    } else {
        const sum = Number(firstNumber) + Number(currentNumber)
        setResult(String(sum))
        setFirstNumber(String(sum))
        setOperation("+")
    }

  }

  const handleAddSubtraction = () => {    
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("-")
    } else {
        const sub = Number(firstNumber) - Number(currentNumber)
        setResult(String(sub))
        setFirstNumber(String(sub))
        setCurrentNumber("0")
        setOperation("-")
    }    
  }

  const handleAddMultiplication = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("*")
    } else {
        const multiplication = Number(firstNumber) * Number(currentNumber)
        setResult(String(multiplication))
        setFirstNumber(String(multiplication))
        setCurrentNumber("0")
        setOperation("*")
    }
  }

  const handleAddDivision = () => {
    if(firstNumber === "0"){
      setFirstNumber(String(currentNumber))
      setCurrentNumber("0")
      setOperation("/")
    } else {
        const division = Number(firstNumber) / Number(currentNumber)
        setResult(String(division))
        setFirstNumber(String(division))
        setCurrentNumber("0")
        setOperation("/")
    }
  }

  const handlePercent = () => {
    const percent = Number(currentNumber) / 100
    setCurrentNumber(percent)
  }

  const handleInequality = () => {
    const inequality = Number(currentNumber) * (-1);
    setCurrentNumber(inequality)
  }

  const handleAddEquals = () => {
    if (firstNumber !== "0" && currentNumber !== "0" && operation !== "") {
      switch(operation) {
        case "+":
          handleAddSum();
          break
        case "-":
          handleAddSubtraction();
          break
        case "*":
          handleAddMultiplication();
          break
        case "/":
          handleAddDivision();
          break
        default:
          break
      }
    }
  }


  return (
    <Container>
      <Content>
        <p>Casio-Matheus</p>
        <Input value={currentNumber} result={result}/>
        <Row>
          <Button label="CE" onClick={handleCurrentNumberClear}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="%" onClick={handlePercent}/>
          <Button label="÷" onClick={handleAddDivision}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")}/>
          <Button label="8" onClick={() => handleAddNumber("8")}/>
          <Button label="9" onClick={() => handleAddNumber("9")}/>
          <Button label="×" onClick={handleAddMultiplication}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")}/>
          <Button label="5" onClick={() => handleAddNumber("5")}/>
          <Button label="6" onClick={() => handleAddNumber("6")}/>
          <Button label="-" onClick={handleAddSubtraction}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")}/>
          <Button label="2" onClick={() => handleAddNumber("2")}/>
          <Button label="3" onClick={() => handleAddNumber("3")}/>
          <Button label="+" onClick={handleAddSum}/>
        </Row>
        <Row>
          <Button label="±" onClick={handleInequality}/>
          <Button label="0" onClick={() => handleAddNumber("0")}/>
          <Button label="," onClick={handleAddComma}/>
          <Button label="=" onClick={handleAddEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
