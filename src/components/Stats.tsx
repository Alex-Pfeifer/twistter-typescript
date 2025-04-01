
import Avatar from "./Avatar.tsx";
import {TwitterContext} from "../utils/context.ts";
import {useContext} from "react";

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
                <Avatar/>
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