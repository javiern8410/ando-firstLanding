import React from 'react';
import './to-top-btn.scss';

const ToTopBtn: React.FunctionComponent<any> = () => {
	return (
		<a  className="back-top"
			data-aos="fade-left"
			data-aos-offset="10"
			data-aos-anchor-placement="top-center"
			title="Go to Top" href="#top"
		>
			<i className="fa fa-level-up" aria-hidden="true"></i>
		</a>
	)
}

export default ToTopBtn;
