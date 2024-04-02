import { Avatar } from "./Avatar";
import { Menu } from "./Menu";

export function Header() {
    return (

        <div className="header-container flex justify-around py-4">
            <Avatar />
            <Menu />
        </div>

    )
}
