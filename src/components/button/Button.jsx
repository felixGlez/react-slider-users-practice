import { StyledButton } from './styles';

const Button = ({ children, action, $userIndex }) => {
	console.log($userIndex);
	return (
		<>
			<StyledButton disabled={$userIndex} onClick={action}>
				{children}
			</StyledButton>
		</>
	);
};

export default Button;
