import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = props => {
    const ( store, actions ) = useContext(Context);
    let uid = store.personajes[props.index].uid;
    return (
        <div className="card cardPersonaje">
            <img
            src={
                props.tipo == "personaje"
                ? 'https://starwars-visualguide.com/assets/img/
                characters/${uid}.jpg'
            }
            className="card-img-top">
            alt="imagen no disponible"
            />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text" />
                <div className="d-flex justify-content-between">
                    <Link to={"/detalle/" + uid}>
                        <button type="button" className="btn
                        btn-outline-secondary">
                            Más información
                        </button>
                    </Link>
                    <button type="button" className="btn btn-outline-danger">
                        <i className="fas fa-heart" />
                    </button>
                </div>
            </div>
        </div>
    );
};






const { store, actions }