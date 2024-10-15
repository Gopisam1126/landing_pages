import "../componentStyles/createArea.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function CreateArea() {
    return <>
        <section className="main-ca-sec">
            <div className="img-desc-c">
                <div className="main-img-anime-c">
                    <img src="\images\anime-g-img.png" alt="main-img" className="main-anime-img" />
                </div>
                <div className="explore-c">
                    <p className="explore-p">
                        Dive into the <span lang="ja" className="ja-world-span"> 世界 </span> of <span className="anime-word-span">Anime</span> and <span className="manga-word-span"> 漫画</span>
                    </p>
                    <div className="explore-btn-c">
                        <button className="explore-btn">
                            EXPLORE
                            <div className="exp-icon-c">
                                <ArrowOutwardIcon style={{
                                    position: "relative",
                                    top: "-0.4rem"
                                }}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="current-status-container">
                <div className="ep-ch-stat-c">
                    <h3 className="completed-head">COMPLETED</h3>
                    <div className="ep-ch-c">
                        <div className="ep-stat">
                            <span className="num-ep">120</span>
                            <p className="completed-p">Episodes Completed</p>
                        </div>
                        <div className="continue-b-btn-c">
                            <button className="continue-btn">
                                CONTINUE WATCHING
                                <div className="cw-icon-c">
                                    <ArrowOutwardIcon/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default CreateArea;