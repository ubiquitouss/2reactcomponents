import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'

//faker.js import
import faker from 'faker';


const App =()=>{
    return(
       <div className="ui container comments">
           <CommentDetail 
           author="Sam" 
           timeAgo="Today at 4:45PM" 
           blogPost="this is amazing"
           avatar={faker.image.avatar()} />
           <CommentDetail 
           author="Alex" 
           timeAgo="Today at 2:00PM"
           blogPost="I've some other things"
           avatar={faker.image.avatar()}/>
           <CommentDetail 
           author="Jane" 
           timeAgo="Yesterday at 5:23AM" 
           blogPost="I really have some other things"
           avatar={faker.image.avatar()}/>
        </div>
       
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
