export interface User {
    name: string,
    avatar: string
}

export interface Stats {
    followers: number,
    following: number
}

export type StatsType = keyof Stats;

export interface TwitterCotexValue {
    user: User,
    stats: Stats,
    changeAvatar: (url: string) => void,
    changeAvatarName: (name: string) => void,
    changeStats: (statsTyte: StatsType, sum: number) => void
}