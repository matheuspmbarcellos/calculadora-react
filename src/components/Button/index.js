import { ButtonContainer } from "./styles"

const Button = ({label, onclick}) => {

  return (
    <ButtonContainer onclick={onclick}>
      {label}
    </ButtonContainer>
  )
}

export default Button;

