import React from "react";
import PropTypes from 'prop-types'
// import css from './Section.css';

function Section({ title, children }) {
    return (<div>
        {title && <h2 className="counter__title">{title}</h2>}
        {children}
    </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
} 
export default Section