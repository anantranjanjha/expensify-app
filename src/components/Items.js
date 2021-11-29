import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export const Item = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${description}`} >
            <h1>{description}</h1>
        </Link>
        <p>
        {numeral(amount/100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

const ConnectItem = connect()(Item);

export default ConnectItem;