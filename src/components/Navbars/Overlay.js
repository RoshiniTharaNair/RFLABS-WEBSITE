import React from 'react';
import './Overlay.css'; // Make sure to create this CSS file

const Overlay = ({ show }) => (
 <div className={`overlay ${show ? 'shown' : 'hidden'}`}></div>
);

export default Overlay;
