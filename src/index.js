//Import React and React-Dom Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


//Create Component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    timeAgo="Today at 3:00 PM"
                    avatar={faker.image.avatar()}
                    comment="Pranam" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()}
                    timeAgo="Yesterday at 4:00 AM"
                    avatar={faker.image.avatar()}
                    comment="Shree RajShyamaji" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()}
                    timeAgo="Yesterday at 6:00 PM"
                    avatar={faker.image.avatar()}
                    comment="Maher" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.findName()}
                    timeAgo="Last Friday at 1:00 PM"
                    avatar={faker.image.avatar()}
                    comment="Good Morning" />
            </ApprovalCard >
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);