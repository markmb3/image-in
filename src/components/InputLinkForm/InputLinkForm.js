import React from 'react';
import './InputLinkForm.css';


const InputLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<h1 className='f2 f1-l fw2 white-90 mb0 lh-title'>{'Face Detection'}</h1>
			<h2 className='fw1 f3 white-80 mt3 mb4'>{'Enter an image link'}</h2>
			<div className='center'>
				<div className='form center pa4 br3 shadow-3'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default InputLinkForm;