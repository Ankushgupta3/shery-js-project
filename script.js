// how to use shery js 
// first 

// shery.imageEffect(elements,configurations)
// configurations humari setting hai or elements humeri wo elemnt  hai jishke undr humari imagesh hain.
//  isko likhe ka tarika ye hai Shery.imageEffect("#back",{style:5,debug:true,gooey:true})
// ishe hum kisi bhi image mai animation kr skte hain 

Shery.imageEffect(".back", { style: 5, config: { "a": { "value": 0.69, "range": [0, 30] }, "b": { "value": -0.94, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.1045241809672386 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 6.02, "range": [1, 15] }, "durationOut": { "value": 0.96, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.91, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.49, "range": [0, 2] }, "noise_scale": { "value": 29.01, "range": [0, 100] } }, gooey: true });

// select to all elem 
let elems = document.querySelectorAll(".elem")
elems.forEach(function (elems) {
    // elems ke sare h1 ko select kre 
    let h1s = elems.querySelectorAll("h1");
    let index = 0;
    let anim = false;

    document.querySelector("#main").addEventListener("click", function () {
        if (!anim) {
            anim = true;
            gsap.to(h1s[index], {
                top: '-=110%',
                ease: Expo.easeInout,
                duration: 0.9,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" })
                    anim = false
                },
            });
            // agr index ki value kabhi barabr ho jati hai length-1 se tb ushi waqt index ki value ko 0 kr de nhi to index ki value ko badhate rhna 
            index === h1s.length - 1 ? (index = 0) : index++

            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInout,
                duration: 0.9,
            });
        }
    });

})

