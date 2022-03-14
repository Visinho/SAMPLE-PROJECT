import React from 'react'

import './styleCss/LearnMore.css';

function LearnMore() {
	return (
		<div className='diaryinfo'>
			<h2>likely expected things to write in your dairy</h2>
			<div className='diaryhint'>
				<ul>
					<li>Your travel goal.</li>
					<li>Details about the person you’ve been crushing on.</li>
					<li>Aspirations and hopes you have for the future.</li>
					<li>List of things you are grateful for about your bad and good day.</li>
					<li>A day dream plan you want to make reality.</li>
					<li>Your horoscope for the day.</li>
					<li>An insightful quote you don’t want to forget.</li>
					<li>Recipes your mom shared with you.</li>
					<li>Your username and password.</li>
				</ul>
				<div className='imgbox'>
					<img src='/img/Bg2.png' className='bg2pic' alt='pic' />
				</div>
			</div>
		</div>
	)
}

export default LearnMore;