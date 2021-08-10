import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  /*
  NOTE: Use 'alt' attribute, just in case our image does not load up correctly
  NOTE: CommentDetail is a component, so we use it as a JSX tag <CommentDetail />, we dont treat it as a JS variable, so we dont do {CommentDetail}
  => Relationship between App & CommentDetail; App = parent component, CommentDetail = child component
  => <ApprovalCard>,  <CommentDetail> are the component we created and can use here as tag components
  => Props can be attributes like author="Sam", avatar={faker.image.avatar()} OR even a component like <CommentDetail/> 
   */
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Todat at 2:20PM"
          comment="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Todat at 4:50PM"
          comment="Cool blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="James"
          timeAgo="Yesterday at 11:20AM"
          comment="Hi there!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Means we want ReactDOM to render an instance of App component into ("#root")
ReactDOM.render(<App />, document.querySelector('#root'));
