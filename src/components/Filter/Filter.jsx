// import React, { Component } from "react";
import './Filter.css'
import PropTypes from 'prop-types'
import './Filter.css'


const Filter = ({ value, onChange }) => (
    <label className='phonebook__filter-label'>
        Filter by name
        <input
            className="filter__input"
            type="text"
            value={value}
            onChange={onChange}
        />
        
    </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;