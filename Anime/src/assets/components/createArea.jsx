import "../componentStyles/createArea.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FunctionIcons from "./functionIcons";
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
                <div className="function-icons-d">
                    <FunctionIcons/>
                </div>
            </div>
            <div className="ep-ch-stat-c">
                <div className="ep-stat-c">
                    <h5 className="completed-head">COMPLETED</h5>
                    <div className="ep-ch-c">
                        <div className="ep-stat">
                            <span className="num-ep">120</span>
                            <p className="completed-p">Episodes</p>
                        </div>
                        <div className="continue-btn">
                            <ArrowOutwardIcon/>
                        </div>
                        {/* <div className="continue-b-btn-c">
                            <button className="continue-btn">
                                CONTINUE WATCHING
                                <div className="cw-icon-c">
                                    <ArrowOutwardIcon/>
                                </div>
                            </button>
                        </div> */}
                    </div>
                <hr className="ep-ch-div" />
                </div>
                <div className="ch-stat-c">
                    <div className="ch-stat">
                        <span className="num-ch">304</span>
                        <p className="completed-ch">Chapters</p>
                    </div>
                </div>
            </div>
            {/* <div className="continue-watching-d">
                <h5 className="cw-head">
                    CONTINUE WATCHING
                </h5>
                <div className="cw-icon">
                    <ArrowOutwardIcon/>
                </div>
            </div> */}
        </section>
    </>
}

export default CreateArea;