import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detalle = props => {
    const { store, actions } = useContext(Context);
    const params = useParam();
    const id = parseInt(params.uid) -1;
    useEffect(() => {
        actions.getDetallePersonajes(params.uid);
    }, []);
    return (
        <div>
            <div className="card mb-3" style={{ maxwidth: "80%" }}>
                <div className="row no gutters">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img
                            src={'http://starwars-visualguide.com/assets/img/
                            characters/${params.uid}
                            .jpg'}
                            alt="..."
                        />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">store.detalles.name}</h5>
                        <p>{store.detalle.eye_color}</p>
                        <p className="card-text">
                            bla bla bla
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>

                    </div>
                </div>
        );
    };
    
export default personajes;