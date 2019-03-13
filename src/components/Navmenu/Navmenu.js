import React from 'react';

const Navmenu = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
	return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('signout')} className='f3 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 pointer'>Sign Out</p>
		</nav>
		);
	} else {
		return (
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('signin')} className='f3 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 pointer'>Sign In</p>
			<p onClick={() => onRouteChange('register')} className='f3 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 pointer'>Register</p>
		</nav>
		);
	}
}

export default Navmenu;