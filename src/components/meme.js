import memei from "./memeData";
import React from "react";
function Meme(){
    function swap(event) {
        const{name,value}=event.target;
        setMeme(change=>({
            ...change,[name]:value
        }))
        
    }
    const [meme,setMeme]=React.useState(
        {
            topText:"",
            bottomText:"",
            randomImage: ""
        }
    ) 
    console.log(meme)

    function Urlselector() {
        var array = memei.data.memes
        var v = Math.floor((Math.random()*array.length));
        const {url}=array[v];
        console.log(url)
        setMeme(image=>({...image,randomImage:url}))
       
        
    }

    return(
        <div className="form">
            <div className="form_input">
                <div>
                    <input 
                        type="text" 
                        placeholder="Top text"
                        value={meme.topText}
                        onChange={swap}
                        name="topText" 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Bottom text"
                        value={meme.bottomText}
                        onChange={swap} 
                        name="bottomText"
                        />
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
                <img className="fit" height={380} width={500} src={meme.randomImage}alt="" />
                <span className="memeImage_topText">{meme.topText}</span>
                <span className="memeImage_bottomText">{meme.bottomText}</span>

           </div>
        </div>
    )
}

export default Meme;