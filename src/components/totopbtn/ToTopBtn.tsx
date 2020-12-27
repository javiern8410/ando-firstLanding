import React from 'react';
import './to-top-btn.scss';

const ToTopBtn: React.FunctionComponent<any> = () => {
	return (
		<div className="back-top"
			data-aos="fade-left"
			data-aos-offset="10"
			data-aos-anchor-placement="top-center"
		>
			<a title="Go to Top" href="#top">
				<i className="fa fa-level-up" aria-hidden="true"></i>
			</a>
		</div>
	)
}

export default ToTopBtn;
