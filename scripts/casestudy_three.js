let info = [];
const infoWrapper = document.getElementById("info-blocks");

const axiosArena = axios.create({
  baseURL: "https://api.are.na/v2/",
});

let loading = document.createElement("div");
loading.className = "loading";
loading.innerHTML = 'loading...';
infoWrapper.appendChild(loading);

axiosArena.defaults.headers.Authorization = 'Bearer ---' ;
axiosArena.get(`channels/urbanos-case-study-three?timestamp=${new Date().getTime()}`).then(response => {
  console.log(response);
  if (response.data && response.data.contents.length >= 1) {
    infoWrapper.removeChild(loading);
    createInfo(response.data.contents);
  } else {

  }
});
