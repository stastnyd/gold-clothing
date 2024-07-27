import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
	NavigationContainer,
	NavLinks,
	NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};

	return (
		<Fragment>
			<NavigationContainer>
				<Link className="logo-container" to="/">
					Logo
				</Link>

				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<span className="nav-link" onClick={signOutHandler}>
							{" "}
							SIGN OUT{" "}
						</span>
					) : (
						<NavLink className="nav-link" to="/auth">
							SIGN IN
						</NavLink>
					)}

					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
