const root = document.querySelector("#root");

const btnP = document.createElement("button");
btnP.textContent = "Plus";
btnP.style.margin = "0.25rem";

const btnM = document.createElement("button");
btnM.textContent = "Moins";
btnM.style.margin = "0.25rem";

const btnS = document.createElement("button");
btnS.textContent = "Save";
btnS.style.margin = "0.25rem";

const textTC = document.createElement("p");
textTC.textContent = "Temperature Choisie  : ";
const valueTC = document.createElement("span");
valueTC.textContent = "20";

const textTA = document.createElement("p");
textTA.textContent = "Temperature Actuelle : ";
const valueTA = document.createElement("span");
valueTA.textContent = "20";

const btnTF = document.createElement("button");
btnTF.textContent = "Temperature Favorite";
btnTF.value = "20";

const imgBloc = document.createElement("p");
const img = document.createElement("img");
img.id = "imgTemp";

btnP.addEventListener("click", async () => {
  valueTC.textContent = parseInt(valueTC.textContent) + 1;

  if(parseInt(valueTC.textContent) > 100) {
    try {
      const request  = await fetch("https://g.tenor.com/v1/gifs?ids=14236266&key=ZQ8H884FY4SM");
      const response = await request.json();
      img.src !== response.results[0].media[0].tinygif.url
        ?  img.src = response.results[0].media[0].tinygif.url
        : "";
      imgBloc.prepend(img);
    }
    catch(e) {
      imgBloc.textContent = "";
    }
  }
  if(parseInt(valueTC.textContent) <= 100 && parseInt(valueTC.textContent) >= 0) {
    imgBloc.textContent = "";
  }

});

btnM.addEventListener("click", async () => {
  valueTC.textContent = parseInt(valueTC.textContent) - 1;

  if(parseInt(valueTC.textContent) < 0) {
    try {
      const request  = await fetch("https://g.tenor.com/v1/gifs?ids=15709893&key=ZQ8H884FY4SM");
      const response = await request.json();
      img.src !== response.results[0].media[0].tinygif.url
        ?  img.src = response.results[0].media[0].tinygif.url
        : "";
      imgBloc.prepend(img);
    }
    catch(e) {
      imgBloc.textContent = "";
    }
  }
  if(parseInt(valueTC.textContent) <= 100 && parseInt(valueTC.textContent) >= 0) {
    imgBloc.textContent = "";
  }

});

btnS.addEventListener("click", () => {
  let timer = setInterval(() => {
    parseInt(valueTC.textContent) > parseInt(valueTA.textContent)
      ? valueTA.textContent = parseInt(valueTA.textContent) + 1
      : parseInt(valueTC.textContent) < parseInt(valueTA.textContent) - 1
        ? setTimeout(() => { valueTA.textContent = parseInt(valueTA.textContent) - 1; }, 500)
        : clearInterval(timer);
  }, 500);

});

btnTF.addEventListener("click", () => {
  valueTC.textContent = btnTF.value;
  imgBloc.textContent = "";
});

root.appendChild(btnP);
root.appendChild(btnM);
root.appendChild(btnS);
root.appendChild(imgBloc);
root.appendChild(textTC);
textTC.append(valueTC);
root.appendChild(textTA);
textTA.append(valueTA);
root.appendChild(btnTF);