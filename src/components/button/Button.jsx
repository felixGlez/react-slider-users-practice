import { StyledButton } from './styles';

const Button = ({ children, action, disabled }) => {
	console.log(disabled);
	return (
		<>
			<StyledButton disabled={disabled} onClick={action}>
				{children}
			</StyledButton>
		</>
	);
};

export default Button;
