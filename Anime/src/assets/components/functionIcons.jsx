import StreamIcon from '@mui/icons-material/Stream';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../componentStyles/functionIcons.css"
function FunctionIcons() {
    return <>
        <section className="FC-main-sec">
            <div className="stream-icon f-ic">
                <StreamIcon/>
            </div>
            <div className="view-stream f-ic">
                <ViewStreamIcon/>
            </div>
            <div className="smart-dis f-ic">
                <SmartDisplayIcon/>
            </div>
            <div className="bookmark-i f-ic">
                <BookmarksIcon/>
            </div>
            <div className="fav-i f-ic">
                <FavoriteIcon/>
            </div>
        </section>
    </>
}

export default FunctionIcons;