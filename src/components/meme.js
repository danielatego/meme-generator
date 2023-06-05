import memei from "./memeData";
import React from "react";
function Meme(){
    const [things,setThings]= React.useState([''])
    
    function Urlselector() {
        var array = memei.data.memes
        var v = Math.floor((Math.random()*array.length));
        const {url}=array[v];
        setThings(image=>image = url)
        return(
            things
            
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
                <button onClick={Urlselector} className="button" type="submit">
                    <span>
                        Get a new meme image  🖼
                    </span>
                </button>
            </div>
           <div className="memeImage">
                <img src={things}alt="" />
           </div>
        </div>
    )
}

export default Meme;