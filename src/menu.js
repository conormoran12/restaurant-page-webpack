import doubleCheeseBurger from './doubleCheeseburger.jpg';

var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', '"https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"');

document.head.appendChild(link);

function addElement(tagName, divName, divContent, divStyles, divLocation, link, image) {
    // create a new div element
    const newDiv = document.createElement(tagName);

    // and give it some content
    newDiv.innerHTML = divContent;

    newDiv.classList.add(divName);

    newDiv.setAttribute(
        "style",
        divStyles
    );

    if (tagName == "a" && link != undefined) {
        newDiv.href = link;
    }

    if (tagName == "img" && image != undefined) {
        if (link == "") {
            newDiv.src = image;
        }
    }

    if (tagName == "button" && link != undefined) {
        function visitPage() {
            window.location.href = link;
        }
        function now() { visitPage(); };
        newDiv.onclick = now;
    }


    // add the text node to the newly created div
    divLocation.appendChild(newDiv);
}

var allElements = document.getElementsByTagName("*");
for (var i = 0, len = allElements.length; i < len; i++) {
    var element = allElements[i];
    element.style.margin = "0";
    element.style.padding = "0";
    element.style.boxSizing = "border-box";
    element.style.fontFamily = "'Inter', sans-serif";
}

function navigationBar() {
    const navigation = addElement("div", "navigation", "", "height: 10vh; display: flex; background: #FF8C22; padding: 0px 75px; align-items: center; justify-content: space-between; color: #FFFFFF", document.body);
    const businessName = addElement("div", "businessName", "TOP BURGERS", "font-size: 2rem; font-weight: 700;", document.getElementsByClassName("navigation")[0]);

    const navLinkContainer = addElement("div", "navLinkContainer", "", "display: flex; gap: 50px;", document.getElementsByClassName("navigation")[0]);

    const link1Anchor = addElement("a", "link1Anchor", "", "color: #FFFFFF; text-decoration: none;", document.getElementsByClassName("navLinkContainer")[0], "index.html");
    const link2Anchor = addElement("a", "link2Anchor", "", "color: #FFFFFF; text-decoration: none;", document.getElementsByClassName("navLinkContainer")[0], "menu.html");
    const link3Anchor = addElement("a", "link3Anchor", "", "color: #FFFFFF; text-decoration: none;", document.getElementsByClassName("navLinkContainer")[0], "contact.html");

    const link1Div = addElement("div", "link1", "HOME", "font-size: 1.5rem; font-weight: 700;", document.getElementsByClassName("link1Anchor")[0]);
    const link2Div = addElement("div", "link2", "MENU", "font-size: 1.5rem; font-weight: 700;", document.getElementsByClassName("link2Anchor")[0]);
    const link3Div = addElement("div", "link3", "CONTACT", "font-size: 1.5rem; font-weight: 700;", document.getElementsByClassName("link3Anchor")[0]);
}

function Menupage() {


    const content = document.getElementById("content");
    content.replaceChildren();

    const burgerLabel = addElement("div", "burgerLabel", "Burgers", "display: flex; margin-left: 270px; padding: 10px 20px; background: #FF8C22; color: #FFFFFF; font-weight: 700; width: 3.75%;", content);

    const menuContainer = addElement("div", "menuContainer", "", "display:flex; flex-direction: column; justify-content: center; align-self: center; align-items: center; flex-wrap: wrap; gap: 50px; height: 75%; width: 80%; background: #FFFFFF;", content);

    const menuItemContainer1 = addElement("div", "menuItemContainer1", "", "display:flex; width: 50%; background: #F8F8F8; padding: 10px; gap: 20px; border-radius: 13px; border: 3px solid #FFDCBB", document.getElementsByClassName("menuContainer")[0]);

    const menuItemImageContainer1 = addElement("div", "menuItemImageContainer1", "", "width: 35%; border-radius: 19px;", document.getElementsByClassName("menuItemContainer1")[0]);
    const menuItemImage1 = addElement("img", "menuItemImage1", "", "display: flex; width: 100%; border-radius: 19px;", document.getElementsByClassName("menuItemImageContainer1")[0], "", doubleCheeseBurger);
    const menuItemNamePriceContainer1 = addElement("div", "menuItemNamePriceContainer1", "", "display: flex; flex-direction: column; gap: 10px; justify-content: center;", document.getElementsByClassName("menuItemContainer1")[0]);
    const menuItemName1 = addElement("div", "menuItemName1", "King Burger", "font-size: 2rem; font-weight: 700;", document.getElementsByClassName("menuItemNamePriceContainer1")[0]);
    const menuItemPrice1 = addElement("div", "menuItemPrice1", "£2.49", "font-size: 1.7rem; font-weight: 700; color: #FF7A00;", document.getElementsByClassName("menuItemNamePriceContainer1")[0]);

    const menuItemContainer2 = addElement("div", "menuItemContainer2", "", "display:flex; width: 50%; background: #F8F8F8; padding: 10px; gap: 20px; border-radius: 13px; border: 3px solid #FFDCBB", document.getElementsByClassName("menuContainer")[0]);

    const menuItemImageContainer2 = addElement("div", "menuItemImageContainer2", "", "width: 35%; border-radius: 19px;", document.getElementsByClassName("menuItemContainer2")[0]);
    const menuItemImage2 = addElement("img", "menuItemImage2", "", "display: flex; width: 100%; border-radius: 19px;", document.getElementsByClassName("menuItemImageContainer2")[0], "", doubleCheeseBurger);
    const menuItemNamePriceContainer2 = addElement("div", "menuItemNamePriceContainer2", "", "display: flex; flex-direction: column; gap: 10px; justify-content: center;", document.getElementsByClassName("menuItemContainer2")[0]);
    const menuItemName2 = addElement("div", "menuItemName2", "King Burger", "font-size: 2rem; font-weight: 700;", document.getElementsByClassName("menuItemNamePriceContainer2")[0]);
    const menuItemPrice2 = addElement("div", "menuItemPrice2", "£2.49", "font-size: 1.7rem; font-weight: 700; color: #FF7A00;", document.getElementsByClassName("menuItemNamePriceContainer2")[0]);

    const menuItemContainer3 = addElement("div", "menuItemContainer3", "", "display:flex; width: 50%; background: #F8F8F8; padding: 10px; gap: 20px; border-radius: 13px; border: 3px solid #FFDCBB", document.getElementsByClassName("menuContainer")[0]);

    const menuItemImageContainer3 = addElement("div", "menuItemImageContainer3", "", "width: 35%; border-radius: 19px;", document.getElementsByClassName("menuItemContainer3")[0]);
    const menuItemImage3 = addElement("img", "menuItemImage3", "", "display: flex; width: 100%; border-radius: 19px;", document.getElementsByClassName("menuItemImageContainer3")[0], "", doubleCheeseBurger);
    const menuItemNamePriceContainer3 = addElement("div", "menuItemNamePriceContainer3", "", "display: flex; flex-direction: column; gap: 10px; justify-content: center;", document.getElementsByClassName("menuItemContainer3")[0]);
    const menuItemName3 = addElement("div", "menuItemName3", "King Burger", "font-size: 2rem; font-weight: 700;", document.getElementsByClassName("menuItemNamePriceContainer3")[0]);
    const menuItemPrice3 = addElement("div", "menuItemPrice3", "£2.49", "font-size: 1.7rem; font-weight: 700; color: #FF7A00;", document.getElementsByClassName("menuItemNamePriceContainer3")[0]);

    const menuItemContainer4 = addElement("div", "menuItemContainer4", "", "display:flex; width: 50%; background: #F8F8F8; padding: 10px; gap: 20px; border-radius: 13px; border: 3px solid #FFDCBB", document.getElementsByClassName("menuContainer")[0]);

    const menuItemImageContainer4 = addElement("div", "menuItemImageContainer4", "", "width: 35%; border-radius: 19px;", document.getElementsByClassName("menuItemContainer4")[0]);
    const menuItemImage4 = addElement("img", "menuItemImage4", "", "display: flex; width: 100%; border-radius: 19px;", document.getElementsByClassName("menuItemImageContainer4")[0], "", doubleCheeseBurger);
    const menuItemNamePriceContainer4 = addElement("div", "menuItemNamePriceContainer4", "", "display: flex; flex-direction: column; gap: 10px; justify-content: center;", document.getElementsByClassName("menuItemContainer4")[0]);
    const menuItemName4 = addElement("div", "menuItemName4", "King Burger", "font-size: 2rem; font-weight: 700;", document.getElementsByClassName("menuItemNamePriceContainer4")[0]);
    const menuItemPrice4 = addElement("div", "menuItemPrice4", "£2.49", "font-size: 1.7rem; font-weight: 700; color: #FF7A00;", document.getElementsByClassName("menuItemNamePriceContainer4")[0]);
}

function footer() {
    const footer = addElement("div", "footer", "@conormoran12 | GitHub", "display: flex; height: 5vh; justify-content: center; align-items: center; background: #FF5C00; font-weight: 500; color: #FFFFFF;", document.body);
}

// navigationBar();
// mainContainer();
// footer();

export { Menupage };