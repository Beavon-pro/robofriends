import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-light-green br3 dib pd3 ma2 grow bw2 shadow-5'>
			<img alt='photo' src={`https://robohash.org/${id}?200*200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		)
}

export default Card;