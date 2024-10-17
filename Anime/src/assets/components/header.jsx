import "../componentStyles/header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header() {
    return <>
        <section className="main-header-sec">
            <div className="logo">
                <h1 className="logo" lang="ja">アニメ</h1>
            </div>
            <div className="searchbar">
                <input type="text" className="search-input" />
                <SearchIcon style={{
                    position: "relative",
                    left: "-9.5rem"
                }}/>
            </div>
            <div className="notification">
                <NotificationsOutlinedIcon style={{
                    position: "relative",
                    left: "32rem",
                    cursor: "pointer",
                }}/>
            </div>
            <div className="acc">
                <div className="acc-img">
                     <img src="\images\anime_main_img.png" alt="acc-imh" className="a-img" />
                     <KeyboardArrowDownIcon style={{
                        marginLeft: "1.2vw",
                        color: "grey"
                     }}/>
                </div>
            </div>
        </section>
    </>
}

export default Header;