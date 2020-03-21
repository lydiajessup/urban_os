
////////////////////////////////////////////////////
/////// Generic block getting from a channel ///////
///////////////////////////////////////////////////

function createInfo(infoData) {

  for (let i=0; i<infoData.length; i++) {
    //create block
    console.log("running");
    let block = document.createElement("div");
    block.className = "block";

    if (infoData[i].source) {
      block = document.createElement("a");
      block.className = "block";
      block.href = infoData[i].source.url;
      block.target = "_blank";
    }

    if (infoData[i].class === "Channel") {
      block = document.createElement("a");
      block.className = "channel";
      block.href = `https://are.na/${infoData[i].user.slug}/${infoData[i].slug}`;
      block.target = "_blank";

      console.log("channel appears");
    }

    //create image
    if (infoData[i].image && infoData[i].image) {
      const image = document.createElement("img");
      image.className = "image";
      image.src = infoData[i].image.square.url;
      block.appendChild(image);
    }
    //create title
    if (infoData[i].title) {
      const title = document.createElement("div");
      title.className = "title";
      title.innerHTML = infoData[i].title;
      block.appendChild(title);
    }

    //create text
    if (infoData[i].class === "Text") {
      const text = document.createElement("div");
      text.className = "text";
      text.innerHTML = infoData[i].content;
      block.appendChild(text);
    }

    //add content
    if (infoData[i].class === "content") {
      const text = document.createElement("div");
      content.className = "content";
      content.innerHTML = infoData[i].content;
      block.appendChild(content);
    }

    //add description
    if (infoData[i].class === "description") {
      const text = document.createElement("div");
      description.className = "content";
      description.innerHTML = infoData[i].description;
      block.appendChild(description);
    }

    infoWrapper.appendChild(block);

  }
}
