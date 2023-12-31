import {InputContainer} from "./styles"

const Input = ({value, result}) => {

    return (
        <InputContainer>
            
            <input disabled value={value}/>
            <p>{result}</p>
            
            
        </InputContainer>
    );
}

export default Input;