import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faHome, faMailBulk } from '@fortawesome/free-solid-svg-icons';

import './styleCss/Navbar.css';

function Navbar() {
	return (
		<div>
			<header>
				<div className='logo'>noteis</div>
				<ul>
					<Link to='/' ><li><FontAwesomeIcon icon={faHome}/> Home</li></Link>
					<Link to='/adddiary' ><li><FontAwesomeIcon icon={faEdit}/> New Note</li></Link>
					<Link to='/diary' ><li><FontAwesomeIcon icon={faMailBulk}/> Diary</li></Link>
				</ul>
			</header>
		</div>
	)
}

export default Navbar;
