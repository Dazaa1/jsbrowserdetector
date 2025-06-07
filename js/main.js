// importing necessary libraries


// defining dom elements
const browserName = document.createElement("h2");
const browserVersion = document.createElement("h2");
const body = document.querySelector("#body")


const getUserAgent = () => {
    // parse user agent
    let result = bowser.getParser(navigator.userAgent).getResult();
    
    browserName.textContent = "Browser name: " + result.browser.name;
    browserVersion.textContent = "Browser version: " + result.browser.version;
    body.append(browserName);
    body.append(browserVersion);
}

// adding an event listener listening to load event.
window.addEventListener("load", getUserAgent());