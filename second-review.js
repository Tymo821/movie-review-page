import React from "react";
import Stars from "./star-rating";
import UserReview from "./user-review";

export default class secondReview extends React.Component {
    render(){
        let secondReview = {
            username: "Cindy Moore",
            reviewPara: "What a great movie, it really makes me happy I have a furry friend in my life!",
            starsGiven: <Stars idx="5" />
           }

           return(
            <div id="reviews">
                <div className="card">
                    <h4 className="card-title">
                        Reviewed by: {secondReview.username}
                    </h4>
                    <p>
                        {secondReview.reviewPara}
                    </p>
                    <div className="card-footer">
                        {secondReview.starsGiven}
                    </div>
                </div>
                <UserReview/>
            </div>
           )
    }
}