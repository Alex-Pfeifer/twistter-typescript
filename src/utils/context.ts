import {createContext} from "react";
import {StatsType, TwitterCotexValue} from "./types";


export const TwitterContext = createContext<TwitterCotexValue>({
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 0,
        following: 0
    },
    changeAvatar: (url: string) => console.log(url),
    changeAvatarName: (name: string) => console.log(name),
    changeStats: (stats: StatsType, sum: number) => console.log(stats, sum)
})