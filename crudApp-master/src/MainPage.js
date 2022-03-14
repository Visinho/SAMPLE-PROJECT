import React from 'react';
import { Link } from 'react-router-dom';

import './styleCss/MainPage.css';

function MainPage() {
	return (
		<div>
			<section>
				<div className='circle'></div>
				<div className='content'>
					<div className='textbox'>
						<h2>It's not just a Diary<br />It's <span>noteis.</span></h2>
						<p>Noteis is an online diary where we writes about what we have seen,
						heard or what we have been doing. Note-it diaries are usually typewritten.
						We all like to keep diaries for a variety of reasons, we may want to keep a
						record for ourselves about what we are doing or have done during the day.</p>
						<Link to='/learnmore' className='learnbtn'>Learn More</Link>
					</div>
					<div className='imgbox'>
						<img src='/img/Bg.png' className='img' alt='pic' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default MainPage;