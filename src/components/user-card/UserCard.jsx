import { useState } from 'react';
import Button from '../button/Button';
import { StyledAvatar, StyledInfo, StyledName, StyledUserCard } from './styles';
import { USERS } from '../../constants/users';

const UserCard = () => {
	const [currentUser, setCurrentUser] = useState(0);
	return (
		<>
			<StyledUserCard>
				<StyledAvatar src={USERS[currentUser].profileImage} />
				<StyledName>Name: {USERS[currentUser].name}</StyledName>
				<StyledInfo>Username: {USERS[currentUser].username}</StyledInfo>
				<StyledInfo>Email: {USERS[currentUser].email}</StyledInfo>
				<Button
					$userIndex={currentUser === 0}
					action={() => prevUser(currentUser, setCurrentUser)}
				>
					Previous
				</Button>
				<Button
					$userIndex={currentUser === USERS.length - 1}
					action={() => nextUser(currentUser, setCurrentUser)}
				>
					Next
				</Button>
			</StyledUserCard>
		</>
	);
};

const nextUser = (currentUser, setCurrentUser) => {
	setCurrentUser(currentUser + 1);
};

const prevUser = (currentUser, setCurrentUser) => {
	setCurrentUser(currentUser - 1);
};

export default UserCard;
