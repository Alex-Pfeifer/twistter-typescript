
import {TwitterContext} from "../utils/context.ts";
import {useContext} from "react";

interface  Props {
    size?: 'small'
}

const Avatar = ({size}: Props) => {

    const {user, changeAvatar, changeAvatarName} = useContext(TwitterContext)
    return (
       <img
           onClick={() => {
               const url = prompt("Enter Avatar URL:");
               changeAvatar(url!)
           }}

           onContextMenu={(e) => {
               e.preventDefault();
               const name = prompt("Enter User Name:");
               changeAvatarName(name!);
           }}

           className={`user-avatar ${size || ''}`}
           src={user.avatar}
           alt={user.name} />
    );
};

export default Avatar;