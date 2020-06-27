import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
	return (
		<div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo=" at 6:30PM"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo=" at 4:45PM"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Jane" 
                timeAgo=" at 1:45AM"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
		</div>
	);
};

ReactDom.render(<App />, document.querySelector('#root'));
