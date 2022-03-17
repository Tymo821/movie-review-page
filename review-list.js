import React from "react";


export default class ReviewList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            reviewPara: props.reviewPara,
            starsGiven: props.starsGiven
        }
    }
   render() {
       let reviewList = [];

       return (
           console.log("review list")
       )
    }
}