import Links from "./links";
function Header(props) {
    return (
        <div className="header">
            <div className="content">
                <div className="firstdiv">
                    <span>{props.appName}</span>
                </div>

                <Links />
            </div>
        </div>
    )
}

export default Header