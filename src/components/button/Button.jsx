import { StyledButton } from './styles';

const Button = ({ children, action }) => {
	return (
		<>
			<StyledButton onClick={action}>{children}</StyledButton>
		</>
	);
};

export default Button;
