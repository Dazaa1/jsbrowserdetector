// defining dom elements
const browserName = document.createElement("h2");
const browserVersion = document.createElement("h2");
const body = document.querySelector("#body")


const getUserAgent = () => {
    // parse user agent
    let result = bowser.getParser(navigator.userAgent).getResult();
    
    browserName.textContent = "Browser Name: " + result.browser.name;
    browserVersion.textContent = "Browser Version: " + result.browser.version;
    body.append(browserName);
    body.append(browserVersion);
}

// adding an event listener listening to load event.
window.addEventListener("load", getUserAgent);

body.style.display = "flex";
body.style.flexDirection = "column";
browserName.style.marginLeft = "auto";
browserName.style.marginRight = "auto";
browserVersion.style.marginLeft = "auto";
browserVersion.style.marginRight = "auto";
browserName.style.marginTop = "200px";