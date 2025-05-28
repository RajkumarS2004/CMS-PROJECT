import { createContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import userService from '../service/userservice';
import { useNavigate } from 'react-router';

const AuthContext = createContext();
function AuthProvider({ children }) {
	const [isAuth, setIsAuth] = useState(false);
	const navigate = useNavigate();

	function signin(email, password) {
		try {
			userService.authenticate(email, password);
			setIsAuth(true);
			navigate('/dashboard/intro');
			Swal.fire({
				title: "Success",
				text: "Login is successful",
				icon: "success"
			});
		} catch (error) {
			Swal.fire({
				title: "Invalid",
				text: error.message,
				icon: "error"
			});
		}
	}
	function logout() {
		setIsAuth(false);
		Swal.fire({
			title: "Success",
			text: "Logout successful",
			icon: "success"
		});
	}
	function signup(email, dept, state, country, hobby, password) {
		try {
			userService.addUser(email, dept, state, country, hobby, password);
			setIsAuth(true);
			navigate('/dashboard/intro');
			Swal.fire({
				title: "Success",
				text: "Registration is successful",
				icon: "success"
			});
		} catch (error) {
			Swal.fire({
				title: "Invalid",
				text: error.message,
				icon: "error"
			});
		}
	}
	return (
		<AuthContext.Provider value={{ signin, logout, signup, isAuth }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider };
export default AuthContext;