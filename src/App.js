import './App.css';
import VideoGame from "./components/videoGame";
import {useEffect, useState} from "react";

function App() {
    const [videGames, setVideoGames] = useState([]);
    const getVideoGames = () => {
        fetch('videoGames.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        ).then(function (response) {
            console.log(response)
            return response.json();
        }).then(function (myJson) {
            console.log(myJson);
            setVideoGames(myJson)
        });
    }
    useEffect(() => {
        getVideoGames()
    }, [])

    return (
        <div className="root">
            <h1>Video Games</h1>
            <div className="wrapper">
            {videGames.map((videoGame, index) => {
                return <VideoGame key={index} {...videoGame}/>
            })}
            </div>
        </div>
    );
}

export default App;
