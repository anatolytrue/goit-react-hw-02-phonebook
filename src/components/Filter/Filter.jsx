// import React, { Component } from "react";
import './Filter.css'

const Filter = ({ value, onChange }) => (
    <label>
        Filter by name
        <input
            className="filter__input"
            type="text"
            value={value}
            onChange={onChange}
        />
        
    </label>
)
export default Filter;