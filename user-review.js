import React from "react";
import Stars from "./star-rating";


export default class UserReview extends React.Component {
    render(){
        let reviewDiv = document.getElementById("reviews")
       function pushUserReview() {
            document.getElementById("reviews").prepend(
                `<div className="card">
                <h4 className="card-title">
                Reviewed by: {userReviewUsername}
                </h4>
                <p>
                    {userReviewReviewPara}
                </p>
                <div className="card-footer">
                    {starsGiven}
                    </div>
                </div>`
            )
            document.getElementById("userReviewUsername").innerHTML = "";
            document.getElementById("userReviewReviewPara").innerHTML = "";
        };

        return(
            <div>
            <input type="text" placeholder="Name" id="userReviewUsername">
            </input>
            <input type="text" placeholder="Text" id="userReviewReviewPara">
            </input>
            <Stars />
            <button onClick="pushUserReview()">Publish</button>
            </div>
            
        )
    }
}