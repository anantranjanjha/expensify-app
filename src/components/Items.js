import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

export const Item = ({ description, amount, createdAt, id }) => (
    <Link className="list-item" to={`/edit/${description}`} >
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

const ConnectItem = connect()(Item);

export default ConnectItem;