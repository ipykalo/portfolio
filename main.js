"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[179],{

/***/ 85:
/***/ (() => {


;// CONCATENATED MODULE: ./src/scripts/constnts.ts
var descriptions = [
    "\uD83D\uDC4B Hello there! I'm a seasoned Software Engineer with over 5 years of\n      hands-on experience in crafting web applications.",
    ,
    "\uD83D\uDCBB My expertise lies in web development, where I thrive in the HTML,\n      CSS, and JavaScript trio. I'm passionate about creating seamless and\n      visually appealing user experiences that leave a lasting impression.",
    ,
    "\uD83C\uDD70\uFE0F On the front-end, I'm well-versed in the Angular framework,\n      employing it to build robust and dynamic user interfaces. I have an\n      eye for design and a commitment to delivering responsive and intuitive\n      applications.",
    ,
    "\uD83D\uDE80 Beyond the client-side, I've extended my skills to the server\n    realm. I have a solid foundation in server-side development using\n    technologies like Node.js and NestJS. Databases like MongoDB are my\n    playground, where I ensure data integrity and efficiency.",
    ,
    "\uD83C\uDF10 Whether it's shaping the client's journey with a sleek UI or\n    orchestrating server-side functionalities, I bring a holistic approach\n    to web development. My goal is to create software that not only meets\n    technical requirements but also exceeds user expectations.",
    ,
    "\uD83D\uDCF1 In addition to web applications, I bring valuable experience in\n    building mobile applications. I've successfully developed Apps for\n    mobile and tablet (Android, IOS, Windows) devices.",
    ,
    "\uD83C\uDF31 Always eager to explore new technologies and methodologies, I stay\n    up-to-date with the latest trends in the ever-evolving tech landscape.\n    Let's build something extraordinary together! \uD83D\uDE80",
    ,
];
var constnts_name = "My name is Ivan Pykalo";
var displaySpeedDescription = 20; //MS
var displaySpeedName = 100; //MS
var MATRIX_RAIN_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
var MATRIX_RAIN_DROPS_SPEED = 35; //MS
var MATRIX_RAIN_TIME = 30000; //MS

;// CONCATENATED MODULE: ./src/scripts/matrix-rain.ts

var canvas = document.querySelector("canvas");
// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var letters = MATRIX_RAIN_LETTERS.split("");
// Setting up the columns
var fontSize = 10;
var columns = canvas.width / fontSize;
function runMatrixRain() {
    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    var startTime = new Date().getTime();
    // Loop the animation
    var interval = setInterval(function () {
        if (new Date().getTime() - startTime > MATRIX_RAIN_TIME) {
            clearInterval(interval);
            var stopTimeAnimation_1 = new Date().getTime();
            var stopAnimationInterval_1 = setInterval(function () {
                if (new Date().getTime() - stopTimeAnimation_1 > MATRIX_RAIN_TIME) {
                    clearInterval(stopAnimationInterval_1);
                    return;
                }
                draw(ctx, canvas, drops, fontSize, letters, "#000");
            }, MATRIX_RAIN_DROPS_SPEED);
            return;
        }
        draw(ctx, canvas, drops, fontSize, letters, "#0f0");
    }, MATRIX_RAIN_DROPS_SPEED);
}
function draw(ctx, canvas, drops, fontSize, letters, textColor) {
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var MAGIC_NUMBER = 0.95;
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = textColor;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > MAGIC_NUMBER) {
            drops[i] = 0;
        }
    }
}

;// CONCATENATED MODULE: ./src/index.ts



addEventListener("load", function () {
    showDescription();
    setTimeout(function () { return switchProfileImage(); }, getDelay(descriptions));
    setTimeout(function () { return showName(); }, getDelay(descriptions));
    setTimeout(function () { return showMainContent(); }, getDelay(descriptions));
    setTimeout(function () { return showFooterContent(); }, getDelay(descriptions));
    setTimeout(function () { return runMatrixRain(); }, getDelay(descriptions));
});
function showDescription() {
    var element = document.getElementById("description");
    for (var i = 0; i < descriptions.length; i++) {
        var text = descriptions[i];
        var index = 0;
        var p = document.createElement("p");
        element.appendChild(p);
        print(index, displaySpeedDescription, text, p);
        i++;
    }
}
function showName() {
    var element = document.getElementById("name");
    var index = 0;
    print(index, displaySpeedName, constnts_name, element);
}
function print(index, speed, text, element) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () { return print(index, speed, text, element); }, speed);
    }
}
function showMainContent() {
    var mainBlock = document.getElementById("main");
    mainBlock.classList.add("visible");
    mainBlock.classList.remove("invisible");
}
function showFooterContent() {
    var footer = document.getElementById("footer");
    footer.classList.add("visible");
    footer.classList.remove("invisible");
}
function switchProfileImage() {
    var images = document.querySelectorAll(".profile_img");
    images.forEach(function (img) {
        var isVisible = img.classList.contains("visible");
        if (isVisible) {
            img.classList.remove("visible");
            img.classList.add("invisible");
        }
        else {
            img.classList.remove("invisible");
            img.classList.add("visible");
        }
    });
}
function getDelay(descriptions) {
    var maxDescription = descriptions.reduce(function (a, b) {
        return a.length > b.length ? a : b;
    });
    return maxDescription.length * (displaySpeedDescription + 2);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(85));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0QsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNkLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7YUFBTSxDQUFDO1lBQ04sR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLFlBQTJCO0lBQzNDLElBQU0sY0FBYyxHQUFXLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RCxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvY29uc3RudHMudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL3NjcmlwdHMvbWF0cml4LXJhaW4udHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbnMgPSBbXHJcbiAgYPCfkYsgSGVsbG8gdGhlcmUhIEknbSBhIHNlYXNvbmVkIFNvZnR3YXJlIEVuZ2luZWVyIHdpdGggb3ZlciA1IHllYXJzIG9mXHJcbiAgICAgIGhhbmRzLW9uIGV4cGVyaWVuY2UgaW4gY3JhZnRpbmcgd2ViIGFwcGxpY2F0aW9ucy5gLFxyXG4gICxcclxuICBg8J+SuyBNeSBleHBlcnRpc2UgbGllcyBpbiB3ZWIgZGV2ZWxvcG1lbnQsIHdoZXJlIEkgdGhyaXZlIGluIHRoZSBIVE1MLFxyXG4gICAgICBDU1MsIGFuZCBKYXZhU2NyaXB0IHRyaW8uIEknbSBwYXNzaW9uYXRlIGFib3V0IGNyZWF0aW5nIHNlYW1sZXNzIGFuZFxyXG4gICAgICB2aXN1YWxseSBhcHBlYWxpbmcgdXNlciBleHBlcmllbmNlcyB0aGF0IGxlYXZlIGEgbGFzdGluZyBpbXByZXNzaW9uLmAsXHJcbiAgLFxyXG4gIGDwn4Ww77iPIE9uIHRoZSBmcm9udC1lbmQsIEknbSB3ZWxsLXZlcnNlZCBpbiB0aGUgQW5ndWxhciBmcmFtZXdvcmssXHJcbiAgICAgIGVtcGxveWluZyBpdCB0byBidWlsZCByb2J1c3QgYW5kIGR5bmFtaWMgdXNlciBpbnRlcmZhY2VzLiBJIGhhdmUgYW5cclxuICAgICAgZXllIGZvciBkZXNpZ24gYW5kIGEgY29tbWl0bWVudCB0byBkZWxpdmVyaW5nIHJlc3BvbnNpdmUgYW5kIGludHVpdGl2ZVxyXG4gICAgICBhcHBsaWNhdGlvbnMuYCxcclxuICAsXHJcbiAgYPCfmoAgQmV5b25kIHRoZSBjbGllbnQtc2lkZSwgSSd2ZSBleHRlbmRlZCBteSBza2lsbHMgdG8gdGhlIHNlcnZlclxyXG4gICAgcmVhbG0uIEkgaGF2ZSBhIHNvbGlkIGZvdW5kYXRpb24gaW4gc2VydmVyLXNpZGUgZGV2ZWxvcG1lbnQgdXNpbmdcclxuICAgIHRlY2hub2xvZ2llcyBsaWtlIE5vZGUuanMgYW5kIE5lc3RKUy4gRGF0YWJhc2VzIGxpa2UgTW9uZ29EQiBhcmUgbXlcclxuICAgIHBsYXlncm91bmQsIHdoZXJlIEkgZW5zdXJlIGRhdGEgaW50ZWdyaXR5IGFuZCBlZmZpY2llbmN5LmAsXHJcbiAgLFxyXG4gIGDwn4yQIFdoZXRoZXIgaXQncyBzaGFwaW5nIHRoZSBjbGllbnQncyBqb3VybmV5IHdpdGggYSBzbGVlayBVSSBvclxyXG4gICAgb3JjaGVzdHJhdGluZyBzZXJ2ZXItc2lkZSBmdW5jdGlvbmFsaXRpZXMsIEkgYnJpbmcgYSBob2xpc3RpYyBhcHByb2FjaFxyXG4gICAgdG8gd2ViIGRldmVsb3BtZW50LiBNeSBnb2FsIGlzIHRvIGNyZWF0ZSBzb2Z0d2FyZSB0aGF0IG5vdCBvbmx5IG1lZXRzXHJcbiAgICB0ZWNobmljYWwgcmVxdWlyZW1lbnRzIGJ1dCBhbHNvIGV4Y2VlZHMgdXNlciBleHBlY3RhdGlvbnMuYCxcclxuICAsXHJcbiAgYPCfk7EgSW4gYWRkaXRpb24gdG8gd2ViIGFwcGxpY2F0aW9ucywgSSBicmluZyB2YWx1YWJsZSBleHBlcmllbmNlIGluXHJcbiAgICBidWlsZGluZyBtb2JpbGUgYXBwbGljYXRpb25zLiBJJ3ZlIHN1Y2Nlc3NmdWxseSBkZXZlbG9wZWQgQXBwcyBmb3JcclxuICAgIG1vYmlsZSBhbmQgdGFibGV0IChBbmRyb2lkLCBJT1MsIFdpbmRvd3MpIGRldmljZXMuYCxcclxuICAsXHJcbiAgYPCfjLEgQWx3YXlzIGVhZ2VyIHRvIGV4cGxvcmUgbmV3IHRlY2hub2xvZ2llcyBhbmQgbWV0aG9kb2xvZ2llcywgSSBzdGF5XHJcbiAgICB1cC10by1kYXRlIHdpdGggdGhlIGxhdGVzdCB0cmVuZHMgaW4gdGhlIGV2ZXItZXZvbHZpbmcgdGVjaCBsYW5kc2NhcGUuXHJcbiAgICBMZXQncyBidWlsZCBzb21ldGhpbmcgZXh0cmFvcmRpbmFyeSB0b2dldGhlciEg8J+agGAsXHJcbiAgLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hbWUgPSBcIk15IG5hbWUgaXMgSXZhbiBQeWthbG9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5U3BlZWREZXNjcmlwdGlvbiA9IDIwOyAvL01TXHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5U3BlZWROYW1lID0gMTAwOyAvL01TXHJcblxyXG5leHBvcnQgY29uc3QgTUFUUklYX1JBSU5fTEVUVEVSUyA9XHJcbiAgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWWFlaQUJDREVGR0hJSktMTU5PUFFSU1RVVlhZWkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZYWVpBQkNERUZHSElKS0xNTk9QUVJTVFVWWFlaQUJDREVGR0hJSktMTU5PUFFSU1RVVlhZWkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZYWVpcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNQVRSSVhfUkFJTl9EUk9QU19TUEVFRCA9IDM1OyAvL01TXHJcbmV4cG9ydCBjb25zdCBNQVRSSVhfUkFJTl9USU1FID0gMzAwMDA7IC8vTVNcclxuIiwiaW1wb3J0IHtcclxuICBNQVRSSVhfUkFJTl9EUk9QU19TUEVFRCxcclxuICBNQVRSSVhfUkFJTl9MRVRURVJTLFxyXG4gIE1BVFJJWF9SQUlOX1RJTUUsXHJcbn0gZnJvbSBcIi4vY29uc3RudHNcIjtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XHJcbi8vIFNldHRpbmcgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGNhbnZhc1xyXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmNvbnN0IGxldHRlcnM6IHN0cmluZ1tdID0gTUFUUklYX1JBSU5fTEVUVEVSUy5zcGxpdChcIlwiKTtcclxuXHJcbi8vIFNldHRpbmcgdXAgdGhlIGNvbHVtbnNcclxuY29uc3QgZm9udFNpemUgPSAxMDtcclxuY29uc3QgY29sdW1ucyA9IGNhbnZhcy53aWR0aCAvIGZvbnRTaXplO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bk1hdHJpeFJhaW4oKTogdm9pZCB7XHJcbiAgLy8gU2V0dGluZyB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgY2FudmFzXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gU2V0dGluZyB1cCB0aGUgZHJvcHNcclxuICBjb25zdCBkcm9wczogYW55W10gPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcclxuICAgIGRyb3BzW2ldID0gMTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIC8vIExvb3AgdGhlIGFuaW1hdGlvblxyXG4gIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk6IHZvaWQgPT4ge1xyXG4gICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lID4gTUFUUklYX1JBSU5fVElNRSkge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHJcbiAgICAgIGNvbnN0IHN0b3BUaW1lQW5pbWF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHN0b3BBbmltYXRpb25JbnRlcnZhbCA9IHNldEludGVydmFsKCgpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdG9wVGltZUFuaW1hdGlvbiA+IE1BVFJJWF9SQUlOX1RJTUUpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RvcEFuaW1hdGlvbkludGVydmFsKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJhdyhjdHgsIGNhbnZhcywgZHJvcHMsIGZvbnRTaXplLCBsZXR0ZXJzLCBcIiMwMDBcIik7XHJcbiAgICAgIH0sIE1BVFJJWF9SQUlOX0RST1BTX1NQRUVEKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZHJhdyhjdHgsIGNhbnZhcywgZHJvcHMsIGZvbnRTaXplLCBsZXR0ZXJzLCBcIiMwZjBcIik7XHJcbiAgfSwgTUFUUklYX1JBSU5fRFJPUFNfU1BFRUQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3KFxyXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXHJcbiAgZHJvcHM6IG51bWJlcltdLFxyXG4gIGZvbnRTaXplOiBudW1iZXIsXHJcbiAgbGV0dGVyczogc3RyaW5nW10sXHJcbiAgdGV4dENvbG9yOiBzdHJpbmdcclxuKTogdm9pZCB7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAuMSlcIjtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcm9wcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgTUFHSUNfTlVNQkVSID0gMC45NTtcclxuICAgIGxldCB0ZXh0ID0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXR0ZXJzLmxlbmd0aCldO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRleHRDb2xvcjtcclxuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBpICogZm9udFNpemUsIGRyb3BzW2ldICogZm9udFNpemUpO1xyXG4gICAgZHJvcHNbaV0rKztcclxuXHJcbiAgICBpZiAoZHJvcHNbaV0gKiBmb250U2l6ZSA+IGNhbnZhcy5oZWlnaHQgJiYgTWF0aC5yYW5kb20oKSA+IE1BR0lDX05VTUJFUikge1xyXG4gICAgICBkcm9wc1tpXSA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgZGVzY3JpcHRpb25zLFxyXG4gIGRpc3BsYXlTcGVlZERlc2NyaXB0aW9uLFxyXG4gIGRpc3BsYXlTcGVlZE5hbWUsXHJcbiAgbmFtZSxcclxufSBmcm9tIFwiLi9zY3JpcHRzL2NvbnN0bnRzXCI7XHJcbmltcG9ydCB7IHJ1bk1hdHJpeFJhaW4gfSBmcm9tIFwiLi9zY3JpcHRzL21hdHJpeC1yYWluXCI7XHJcblxyXG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBzaG93RGVzY3JpcHRpb24oKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHN3aXRjaFByb2ZpbGVJbWFnZSgpLCBnZXREZWxheShkZXNjcmlwdGlvbnMpKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHNob3dOYW1lKCksIGdldERlbGF5KGRlc2NyaXB0aW9ucykpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4gc2hvd01haW5Db250ZW50KCksIGdldERlbGF5KGRlc2NyaXB0aW9ucykpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4gc2hvd0Zvb3RlckNvbnRlbnQoKSwgZ2V0RGVsYXkoZGVzY3JpcHRpb25zKSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiBydW5NYXRyaXhSYWluKCksIGdldERlbGF5KGRlc2NyaXB0aW9ucykpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNob3dEZXNjcmlwdGlvbigpOiB2b2lkIHtcclxuICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzY3JpcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgdGV4dCA9IGRlc2NyaXB0aW9uc1tpXTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcblxyXG4gICAgY29uc3QgcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gICAgcHJpbnQoaW5kZXgsIGRpc3BsYXlTcGVlZERlc2NyaXB0aW9uLCB0ZXh0LCBwKTtcclxuICAgIGkrKztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dOYW1lKCk6IHZvaWQge1xyXG4gIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGluZGV4ID0gMDtcclxuICBwcmludChpbmRleCwgZGlzcGxheVNwZWVkTmFtZSwgbmFtZSwgZWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByaW50KFxyXG4gIGluZGV4OiBudW1iZXIsXHJcbiAgc3BlZWQ6IG51bWJlcixcclxuICB0ZXh0OiBzdHJpbmcsXHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnRcclxuKSB7XHJcbiAgaWYgKGluZGV4IDwgdGV4dC5sZW5ndGgpIHtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IHRleHQuY2hhckF0KGluZGV4KTtcclxuICAgIGluZGV4Kys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHByaW50KGluZGV4LCBzcGVlZCwgdGV4dCwgZWxlbWVudCksIHNwZWVkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNYWluQ29udGVudCgpOiB2b2lkIHtcclxuICBjb25zdCBtYWluQmxvY2s6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIG1haW5CbG9jay5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICBtYWluQmxvY2suY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvb3RlckNvbnRlbnQoKTogdm9pZCB7XHJcbiAgY29uc3QgZm9vdGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoUHJvZmlsZUltYWdlKCk6IHZvaWQge1xyXG4gIGNvbnN0IGltYWdlczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9maWxlX2ltZ1wiKTtcclxuXHJcbiAgaW1hZ2VzLmZvckVhY2goKGltZzogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGlzVmlzaWJsZTogYm9vbGVhbiA9IGltZy5jbGFzc0xpc3QuY29udGFpbnMoXCJ2aXNpYmxlXCIpO1xyXG5cclxuICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGltZy5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xyXG4gICAgICBpbWcuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlbGF5KGRlc2NyaXB0aW9uczogQXJyYXk8c3RyaW5nPik6IG51bWJlciB7XHJcbiAgY29uc3QgbWF4RGVzY3JpcHRpb246IHN0cmluZyA9IGRlc2NyaXB0aW9ucy5yZWR1Y2UoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiBhLmxlbmd0aCA+IGIubGVuZ3RoID8gYSA6IGI7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG1heERlc2NyaXB0aW9uLmxlbmd0aCAqIChkaXNwbGF5U3BlZWREZXNjcmlwdGlvbiArIDIpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==