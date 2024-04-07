var positionPointer, posDisplay;

window.addEventListener("DOMContentLoaded", w => {


    if(waxml.audioInited){
        initAudio();
    } else {
        waxml.addEventListener("init", e => {initAudio()});
    }

    

});

const initAudio = e => {

    // position pointer
    positionPointer = document.querySelector(".position-pointer");
    posDisplay = document.querySelector("#relPos");

    positionPointer.addEventListener("pointerdown", e => {
        e.target.grabbed = true;
    });

    positionPointer.addEventListener("change", e => {
        e.target.grabbed = false;
    });

    positionPointer.addEventListener("input", e => {
        updatePositionDisplay(e.target.value);
    });

    let targetAudio = window.waxml.querySelector("#stem1");
    setInterval(() => {
        if(targetAudio.playing && !positionPointer.grabbed){
            positionPointer.value = targetAudio.relOffset;
            updatePositionDisplay();
        }
    }, 50);



    // lägg på en listener som triggar när input-fältet file1URL tappar fokus
    // En listener är en javascript-funktion som triggas av en viss händelse

    
    // document.querySelector("#file1URL").addEventListener("blur", e => {

        
    //     // sätt src på stem1 till denna URL
    //     document.querySelector("#stem1").src = e.target.value;

    // });

//    stem1.crossOrigin = "anonymous";
    // skapa en jabvascript referens till stem1
    // let source1 = waxml._ctx.createMediaElementSource(document.querySelector("#stem1"));

    // koppla ljudet från stem1 till kanal 1 i mixern    
//    source1.connect(waxml.querySelector("ch1"));
};


const updatePositionDisplay = (relOffset) => {

    let targetAudio = window.waxml.querySelector("#stem1");
    relOffset = relOffset || targetAudio.relOffset;
    let pos = relOffset * targetAudio._node._buffer.duration;
    let min = (pos / 60).toFixed(0);
    let sec = pos.toFixed(2); // antal decimaler
    if(sec < 10){sec = `0${sec}`};
    posDisplay.innerHTML = `${min}:${sec}`;
}



//      const sliderEl4 = document.querySelector("#mySlider1")
//      const sliderValue4 = document.querySelector(".value4")

//   sliderEl4.addEventListener("input", e => {
//   const tempSliderValue = event.target.value; 
//   sliderValue4.textContent = tempSliderValue;
  
//   const progress = (tempSliderValue / sliderEl4.min) * 100;
// })

const sliderEl = document.querySelector("#mySlider1")
const sliderValue = document.querySelector(".value1")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
})


const sliderEl2 = document.querySelector("#mySlider2")
const sliderValue2 = document.querySelector(".value2")

sliderEl2.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  sliderValue2.textContent = tempSliderValue; 
  
  const progress = (tempSliderValue / sliderEl2.max) * 100;
 

})


const sliderEl3 = document.querySelector("#mySlider3")
const sliderValue3 = document.querySelector(".value3")

sliderEl3.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue3.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl3.max) * 100;
 
})

const sliderEl4 = document.querySelector("#mySlider4")
const sliderValue4 = document.querySelector(".value4")

sliderEl4.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue4.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl4.max) * 100;
 
})




 
//   sliderEl4.style.background = `linear-gradient(to right, #4682B4 ${progress}%, #ccc ${progress}%)`;
// })

