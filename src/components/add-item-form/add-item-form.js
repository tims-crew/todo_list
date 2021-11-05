import React, { Component } from "react";

import './add-item-form.css';

export default class AddItemForm extends Component {
    render() {
        return (
            <form className="item-form-add d-flex">
                <input className="form-control" type="text" placeholder="Write something to be done..."></input>
                <button className="btn btn-outline-secondary" onClick={() => this.props.onItemAdded("Hello world")}>
                    Add Item
                </button>
            </form>
        )
    }
}