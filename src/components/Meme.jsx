import React from "react";

export default function Meme() {
    const [memeImages, setMemeImages] = React.useState(null)
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1bij.jpg"
        }
    )

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setMemeImages(data.data.memes))
    }, [])

    function getImage() {
        const randomNumber = Math.floor(Math.random() * memeImages.length)
        const url = memeImages[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

function handleChange() {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}

                />
                <input 
                    type="text" 
                    placeholder="Bottome Text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className="form--button"
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}