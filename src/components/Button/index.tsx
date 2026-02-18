import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ title, ...rest }) => {
  return <ButtonContainer {...rest}>{title}</ButtonContainer>;
};


export default Button;
