import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const Item = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${description}`} >
            <h1>{description}</h1>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

const ConnectItem = connect()(Item);

export default ConnectItem;