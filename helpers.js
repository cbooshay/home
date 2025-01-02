const allposts = [
                  ["More Applications of Kummer", "December 27, 2024"],
                  ["Formulas from Legendre and Kummer", "December 18, 2024"],
                  ["P-adic Valuations and Digit Sums", "October 31, 2024"],
                  ["The Central Binomial Coefficients Are All Even", "October 7, 2024"],
                  ["Prime Factors of The Central Binomial Coefficients Down to 2n Over 3", "September 12, 2024"],
                  ["The Central Binomial Coefficients Have No Large Prime Factors", "September 5, 2024"],
                  ["Wordle and the Wolfram Language", "August 27, 2024"],
                  ["Packing Two Cylinders", "August 22, 2024"],
                  ["A Dollar a Day", "August 14, 2024"],
                  ["Gazing East", "July 16, 2024"],
                  ["Exponential Growth and Rounding", "July 15, 2024"]
                  ];

var index = 0;

function buttons() {
    if (index+9<allposts.length) {
        const older = document.createElement("button");
        older.setAttribute("align", "left");
        older.setAttribute("class", "button");
        older.setAttribute("onclick", "older()");
        older.innerHTML = ">>> Older";
        return older
    }
    else if (index>length-9) {
        const newer = document.createElement("button");
        newer.setAttribute("align", "left");
        newer.setAttribute("class", "button");
        newer.setAttribute("onclick", "newer()");
        newer.innerHTML = "<<< Newer";
        return newer
    }
}

function older() {
    index = index+9;
    makePage(index);
}

function newer() {
    index = index-9;
    makePage(index);
}

function makePage(start) {
    const container = document.getElementById("maincontent");
    container.innerHTML = "";
    for (let i=start; i<Math.min(start+9, allposts.length); i++) {
        console.log(i);
        makePostBox(allposts[i][0], allposts[i][1]);
    };
    container.appendChild(buttons());
}

function makePostBox(title, date) {
    const container = document.getElementById("maincontent");
    const post = document.createElement("div");
    post.setAttribute("id", title);
    post.setAttribute("class", "maincard");
    post.setAttribute("onclick", "simple('thepdfs/"+title+".pdf')")
    const linkTitle = document.createElement("font");
    linkTitle.setAttribute("size", "+2");
    linkTitle.setAttribute("color", "#CC3300");
    linkTitle.innerHTML = " "+title+" ";
    const linkDate = document.createElement("font");
    linkDate.setAttribute("color", "gray");
    linkDate.innerHTML = "("+date+")";
    post.appendChild(linkTitle);
    post.appendChild(linkDate);
    const space = document.createElement("p");
    post.appendChild(space);
    container.appendChild(post);
    return container;
}

function simple(post) {
    const container = document.getElementById("maincontent");
    container.innerHTML = ""; // Clear existing content
    container.setAttribute("class", "leftcolumn");
    container.setAttribute("style", "text-align: center");
    container.setAttribute("style", "background-color: white");
    const backLink = document.createElement("a");
    backLink.setAttribute("href", "https://cbooshay.github.io/home/");
    const homeText = document.createElement("font");
    homeText.setAttribute("border-style", "Gray")
    homeText.setAttribute("size", "+2");
    homeText.setAttribute("color", "#CC3300");
    homeText.innerHTML="Home";
    const divider = document.createElement("hr");
    homeText.appendChild(divider);
    backLink.appendChild(homeText);
    const newObj = document.createElement("object");
    console.log(backLink);
    newObj.setAttribute("data", post);
    newObj.setAttribute("type", "application/pdf");
    newObj.setAttribute("width", "100%");
    newObj.setAttribute("height", "600");
    container.appendChild(backLink);
    container.appendChild(newObj);
    return container;
}
