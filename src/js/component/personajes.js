import React, { useContext } from "react";
import Card from "./card";
import { Context } from "../store/appContext";
import { Detalle } from "../views/detalle";

const personajes = () => {
    const ( store, actions ) = useContext(Context);
    return (
        <div className="container-fluid">
            <h1>Personajes</h1>
            <div className="scroll-carddeck">
                {store.personajes.map((personaje, i) => {
                    return <Card key={uid} name={personaje.name} index={uid} tipo={"personaje"} />;
                })}
            </div>
        </div>
    );
};

export default personajes;