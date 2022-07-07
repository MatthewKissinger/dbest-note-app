import React from "react"

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome To the Best Note-App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. Lorem ipsum dolor sit amet, consectetur adipisce placerat mauris nisl. Proin vitae urna eu sem pellentesque laoreet. </p>
            <img src={require('../images/orange.png')} alt="orange sliced in half" className="home-orange-image"></img>
            <button>Go to Notes</button>
        </div>
    )
}