onload = () =>{
        document.body.classList.remove("container");
};

function playSound(audioName,loop) {
        let audio = new Audio(audioName);
        audio.loop = loop;
        audio.play()
}

playSound ("para.mp3", true);