import React from "react";
import "./star-rating.css";


export default class Stars extends React.Component {
    render() {
        const selectedStars = document.querySelectorAll('#stars a');
        const starDiv = document.querySelectorAll('#stars');

        selectedStars.forEach((star, idx) => {
            star.addEventListener('click', () => {
                starDiv.classList.add("disabled");
                selectedStars.forEach((otherStar, otherIdx) => {
                    if (otherIdx <= idx) {
                        otherStar.classList.add("active");
                    }
                })
            })
        })
        return (
            <div id="stars">
                <a>⭐</a>
                <a>⭐</a>
                <a>⭐</a>
                <a>⭐</a>
                <a>⭐</a>
            </div>
            
        )
    }
}