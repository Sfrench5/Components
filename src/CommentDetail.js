import React from 'react';
import faker from "faker";

const CommentDetail = (props) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.avatar}/>
			</a>
			<div className="contemt">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metadata">
    <span className="date">{faker.date.weekday()}{props.timeAgo}</span>
					<div className="text">{faker.company.catchPhrase()}</div>
				</div>
			</div>
		</div>
	);
};

export default CommentDetail;


