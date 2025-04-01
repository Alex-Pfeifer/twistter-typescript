import React, {useContext} from 'react';
import Stats from "./Stats.jsx";
import {TwitterContext} from "../utils/context.js";

const Sidebar = () => {

    const {stats} = useContext(TwitterContext)
    return (
        <div className={'sidebar'}>
            <Stats stats={stats}/>
        </div>
    );
};

export default Sidebar;