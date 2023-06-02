import memei from "./memeData";


function meme(){

    function urlselector() {
        var array = memei.data.memes
        var v = Math.floor((Math.random()*array.length));
        const {url}=array[v];
        return(
            console.log(url)
            
        )
    }

    return(
        <div className="form">
            <div className="form_input">
                <div>
                    <input type="text" placeholder="Top text" />
                </div>
                <div>
                    <input type="text" placeholder="Bottom text"/>
                </div>
            </div>
            <div>
                <button onClick={urlselector} className="button" type="submit">
                    <span>
                        Get a new meme image  🖼
                    </span>
                </button>
            </div>
           
        </div>
    )
}

export default meme;