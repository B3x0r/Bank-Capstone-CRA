import React from 'react';
import { UserContext, Card } from './context';

function Logout() {
	const { setIsLoggedin } = React.useContext(UserContext);

	const handleLogout = () => {
		setIsLoggedin(false);
		window.location.href = "/#";
		};

	return (
		<Card
			bgcolor="dark"
			header="Log Out"
			body={
				<button type="submit"
					className="btn btn-light"
					onClick={handleLogout}>
					Logout User
				</button>
      }
    />
	)
}

export default Logout;
