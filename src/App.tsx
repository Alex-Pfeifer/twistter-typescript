import './App.css'
import Body from "./components/Body.jsx";
import Navigation from "./components/Navigation.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 0,
        following: 0
    });

    const changeAvatar = url => {
        // setUser(prevState => ({...prevState, avatar: url || user.avatar}));
        setUser( {...user, avatar: url || user.avatar});
    }

    const changeAvatarName = name => {
        setUser( {...user, name: name || user.name});
    }

    // const changeFollowers = sum => {
    //     setStats(prevStats => ({...prevStats, followers: prevStats.followers + sum < 0 ? 0 : prevStats.followers + sum}));
    // }
    //
    // const changeFollowing = sum => {
    //     setStats(prevStats => ({...prevStats, following: prevStats.following + sum < 0 ? 0 : prevStats.following + sum}));
    // }


    const changeStats = (statsTyte, sum) => {
        setStats(prevStats => {
            let res = prevStats[statsTyte] +sum;
            res = res < 0 ? 0 : res;
            return {...prevStats, [statsTyte]: res};
        })
    }

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user,
                stats,
                changeAvatar,
                changeAvatarName,
                // changeFollowers,
                // changeFollowing
                changeStats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
