import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {
        user,
        stats,
        // changeFollowers,
        // changeFollowing
        changeStats
    } = useContext(TwitterContext);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => changeStats('followers', 1)}
                    onContextMenu={e => {e.preventDefault();
                        changeStats('followers', -1);
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => changeStats('following', 1)}
                    onContextMenu={e => {e.preventDefault();
                        changeStats('following', -1);
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;