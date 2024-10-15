import "../componentStyles/createArea.css"
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
                </div>
            </div>
        </section>
    </>
}

export default CreateArea;