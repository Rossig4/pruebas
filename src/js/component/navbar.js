import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const eliminarFavoritos = indice => {
        let sinEliminar = nuevoArrayFav.filter((fav, index) => {
            if (indice != index) return fav;
        });

    
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
                <img
                    src= className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
<span>Star Wars</span>
<div className="dropdown-menu dropdown-menu-lg">
    <button
    className=""
</div>
