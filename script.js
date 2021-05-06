const urlInput = document.getElementById("input-url");
const button = document.getElementById("btn");
const iframe = document.getElementById("youtube-iframe");

function getVideoFromUrl(url){
  const splitted = url.split("v=")[1];
  if(splitted.includes("&")){
    return splitted.split("&")[0]
  }
  return splitted;
}

function videoToEmbed(video){
  return "https://www.youtube.com/embed/" + video;
}

function urlToEmbed(url){
  const video = getVideoFromUrl(url);
  return videoToEmbed(video)
}

button.addEventListener("click", () => {
  const input = urlInput.value;
  if(input.includes("youtube.com")){
    const embed = urlToEmbed(input);
    iframe.src = embed;
  }
})

