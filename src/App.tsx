import './App.css'
import Body from "./components/Body.tsx";
import Navigation from "./components/Navigation.tsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.ts";
import {Stats, StatsType, User} from "./utils/types";

function App() {
    const [user, setUser] = useState<User>({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState<Stats>({
        followers: 0,
        following: 0
    });

    const changeAvatar = (url: string) => {
        setUser( {...user, avatar: url || user.avatar});
    }

    const changeAvatarName = (name: string) => {
        setUser( {...user, name: name || user.name});
    }

    const changeStats = (statsTyte: StatsType, sum: number) => {
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
                changeStats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
