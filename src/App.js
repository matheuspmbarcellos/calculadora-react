import { Container, Content, Row } from "./styles";
import Input from "./components/Input"
import Button from "./components/Button"

const App = () => {

  return (
    <Container>
      <Content>
        <p>Casio-Matheus</p>
        <Input />
        <Row>
          <Button label="%" onclick=""/>
          <Button label="C" onclick=""/>
          <Button label="÷" onclick=""/>
          <Button label="×" onclick=""/>
        </Row>
        <Row>
          <Button label="7" onclick=""/>
          <Button label="8" onclick=""/>
          <Button label="9" onclick=""/>
          <Button label="-" onclick=""/>
        </Row>
        <Row>
          <Button label="4" onclick=""/>
          <Button label="5" onclick=""/>
          <Button label="6" onclick=""/>
          <Button label="+" onclick=""/>
        </Row>
        <Row>
          <Button label="1" onclick=""/>
          <Button label="2" onclick=""/>
          <Button label="3" onclick=""/>
          <Button label="=" onclick=""/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
