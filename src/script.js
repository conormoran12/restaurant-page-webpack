import Icon from './icon.jpg';


// var link = document.createElement('link');
// link.setAttribute('rel', 'stylesheet');
// link.setAttribute('type', 'text/css');
// link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

// document.head.appendChild(link);

function addElement(tagName, divName, divContent, divStyles, divLocation, link, image) {
    const newDiv = document.createElement(tagName);
    newDiv.innerHTML = divContent;
    newDiv.classList.add(divName);
    newDiv.setAttribute("style", divStyles);

    if (tagName === "a" && link !== undefined) {
        newDiv.href = link;
    }

    if (tagName === "img" && image !== undefined) {
        newDiv.src = image;
    }

    if (tagName === "button" && link !== undefined) {
        newDiv.onclick = () => window.location.href = link;
    }

    divLocation.appendChild(newDiv);
    return newDiv;
}





function Homepage() {

    const content = document.getElementById("content");

    content.replaceChildren();

    document.querySelector("html").style.height = "100%";
    document.querySelector("html").style.minHeight = "100vh";

    if (!document.getElementsByClassName("navLinkContainer")[0]) {
        const navigation = document.getElementsByTagName("nav")[0];
        navigation.setAttribute("style", "height: 10vh; display: flex; background: #FF8C22; padding: 0px 75px; align-items: center; justify-content: space-between; color: #FFFFFF");

        //addElement("div", "navigation", "", "height: 10vh; display: flex; background: #FF8C22; padding: 0px 75px; align-items: center; justify-content: space-between; color: #FFFFFF", document.body);
        addElement("div", "businessName", "TOP BURGERS", "font-size: 2rem; font-weight: 700;", navigation);

        const navLinkContainer = addElement("div", "navLinkContainer", "", "display: flex; gap: 50px;", navigation);
        // addElement("a", "link1Anchor", "", "color: #FFFFFF; text-decoration: none;", navLinkContainer);
        // addElement("a", "link2Anchor", "", "color: #FFFFFF; text-decoration: none;", navLinkContainer);
        // addElement("a", "link3Anchor", "", "color: #FFFFFF; text-decoration: none;", navLinkContainer);

        const button1 = addElement("button", "link1", "HOME", "display: flex; justify-content: center; align-items: center; font-size: 1.5rem; font-weight: 700; color: #FFFFFF; background: none; border: none; padding: 0; cursor: pointer;", navLinkContainer);
        const button2 = addElement("button", "link2", "MENU", "display: flex; justify-content: center; align-items: center; font-size: 1.5rem; font-weight: 700; color: #FFFFFF; background: none; border: none; padding: 0; cursor: pointer;", navLinkContainer);
        const button3 = addElement("button", "link3", "CONTACT", "display: flex; justify-content: center; align-items: center; font-size: 1.5rem; font-weight: 700; color: #FFFFFF; background: none; border: none; padding: 0; cursor: pointer;", navLinkContainer);
    }

    var allElements = document.getElementsByTagName("*");
    for (var i = 0; i < allElements.length; i++) {
        var element = allElements[i];
        //if (element == document.getElementsByClassName("navLinkContainer")[0]) { break; }
        if (element != document.getElementsByTagName("nav")[0]) {
            element.style.margin = "0";
            element.style.padding = "0";
            element.style.boxSizing = "border-box";
            element.style.fontFamily = "'Inter', sans-serif";
        }

    }

    //const content = document.getElementById("content");
    content.setAttribute("style", "display: flex; justify-content: center; padding: 0 100px; flex-direction: column; height: 90vh; background: #FFFFFF; align-items: center;");

    const dealContainer = addElement("div", "dealContainer", "", "display:flex; align-items: center; gap: 50px; height: 75%; width: 65%; background: #FFFFFF;", content);

    const dealImageContainer = addElement("div", "dealImageContainer", "", "display: flex; justify-content: center; align-items: center; padding: 100px 0; border: 10px solid #FF8C22; border-radius: 18px; width: 50%;", dealContainer);
    const dealImage = addElement("img", "dealImage", "", "display: flex; width: 100%", dealImageContainer, "", Icon);

    const dealContentContainer = addElement("div", "dealContentContainer", "", "display: flex; gap: 20px; flex-direction: column; align-items: start;", dealContainer);
    addElement("div", "dealLabel", "Latest Deal", "display: flex; padding: 10px 20px; background: #FF8C22; color: #FFFFFF; font-weight: 700;", dealContentContainer);
    addElement("div", "dealName", "Big Steak Burger Meal", "font-size: 3rem; color: #FF5C00; font-weight: 700;", dealContentContainer);
    addElement("div", "dealPromo", "Enjoy our latest deal on the Big Steak Burger Meal at the LOCAL RES PAGE", "font-weight: 800;", dealContentContainer);

    const dealListContainer = addElement("div", "dealList", "", "display: flex; flex-direction: column; color: #FF5C00; font-weight: 700;", dealContentContainer);
    addElement("div", "dealList1", "1x Large Portion of Chips", "display: flex; flex-direction: column; color: #FF5C00; font-weight: 700;", dealListContainer);
    addElement("div", "dealList2", "1x Drink of Choice", "display: flex; flex-direction: column; color: #FF5C00; font-weight: 700;", dealListContainer);
    addElement("div", "dealList3", "1x Big Steak Burger", "display: flex; flex-direction: column; color: #FF5C00; font-weight: 700;", dealListContainer);

    const dealPriceInfoContainer = addElement("div", "dealPriceInfoContainer", "", "display: flex; align-items: center; border: solid 5px #FF8C22; border-radius: 15px", dealContentContainer);
    addElement("div", "dealPrice", "£6.65", "display: flex; padding: 15px; font-weight: 700;", dealPriceInfoContainer);
    addElement("button", "dealInfo", "Learn more", "background: none; color: inherit; border: none; padding: 0; font: inherit; cursor: pointer; outline: inherit; display: flex; padding: 15px 15px; font-weight: 700; background: #FF8C22; color: #FFFFFF; border-bottom-left-radius: 12.5px; border-top-left-radius: 12.5px;", dealPriceInfoContainer);

    if (!document.querySelectorAll(".footer")[0]) {
        addElement("div", "footer", "@conormoran12 | GitHub", "display: flex; height: 5vh; justify-content: center; align-items: center; background: #FF5C00; font-weight: 500; color: #FFFFFF;", document.body);
    }
}



export { Homepage };
