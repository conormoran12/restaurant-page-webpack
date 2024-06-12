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

    if (tagName == "iframe" && link != undefined) {
        newDiv.src = link
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

function Contactpage() {

    const content = document.getElementById("content");
    content.replaceChildren();

    const contactContainer = addElement("div", "contactContainer", "", "display: flex; gap: 20px; flex-direction: column; width: 85%", content);
    const contactUsLabel = addElement("div", "contactUsLabel", "Contact Us", "display: flex; color: #FF8C22; font-size: 2rem; font-weight: 700;", document.getElementsByClassName("contactContainer")[0]);
    const contactInfoContainer = addElement("div", "contactInfoContainer", "", "display: flex; gap: 20px; height: 70vh", document.getElementsByClassName("contactContainer")[0]);
    const contactLeftSideContainer = addElement("div", "contactLeftSideContainer", "", "display: flex; gap: 20px;flex-direction: column; height: 100%; width: 50%;", document.getElementsByClassName("contactInfoContainer")[0])

    const contactDetailsContainer = addElement("div", "contactDetailsContainer", "", "display: flex; gap: 30px; border-radius: 25px; padding: 10px; height: 50%; background: white; border: 4px solid #DDDDDD; flex-direction: column;", document.getElementsByClassName("contactLeftSideContainer")[0]);

    const contactSectionContainer1 = addElement("div", "contactSectionContainer1", "", "display: flex; flex-direction: column;", document.getElementsByClassName("contactDetailsContainer")[0]);
    const contactAddressHeading = addElement("div", "contactAddressHeading", "Address", "display: flex; color: #FF8C22; font-weight: 700; font-size: 1.5rem;", document.getElementsByClassName("contactSectionContainer1")[0]);
    const contactAddress = addElement("div", "contactAddress", "244 York Wy, London N7 9AG", "display: flex; font-size: 1.25rem; font-weight: 500;", document.getElementsByClassName("contactSectionContainer1")[0]);

    const contactSectionContainer2 = addElement("div", "contactSectionContainer2", "", "display: flex; flex-direction: column;", document.getElementsByClassName("contactDetailsContainer")[0]);
    const contactPhoneNumberHeading = addElement("div", "contactPhoneNumberHeading", "Phone Number", "display: flex; color: #FF8C22; font-size: 1.5rem; font-weight: 700;", document.getElementsByClassName("contactSectionContainer2")[0]);
    const contactPhoneNumber = addElement("div", "contactPhoneNumber", "0743 542652", "display: flex; font-size: 1.25rem; font-weight: 500;", document.getElementsByClassName("contactSectionContainer2")[0]);

    const contactSectionContainer3 = addElement("div", "contactSectionContainer3", "", "display: flex; flex-direction: column;", document.getElementsByClassName("contactDetailsContainer")[0]);
    const contactEmailHeading = addElement("div", "contactEmailHeading", "Email", "display: flex; color: #FF8C22; font-size: 1.5rem; font-weight: 700;", document.getElementsByClassName("contactSectionContainer3")[0]);
    const contactEmail = addElement("div", "contactEmail", "0743 542652", "display: flex; font-size: 1.25rem; font-weight: 500;", document.getElementsByClassName("contactSectionContainer3")[0]);

    const openingTimesContainer = addElement("div", "openingTimesContainer", "", "display: flex; gap: 20px; border-radius: 25px; padding: 10px; height: 50%; background: white; border: 4px solid #DDDDDD; flex-direction: column;", document.getElementsByClassName("contactLeftSideContainer")[0]);
    const openingTimesHeading = addElement("div", "openingTimesHeading", "Opening Times", "display: flex; color: #FF8C22; font-weight: 700; font-size: 1.5rem;", document.getElementsByClassName("openingTimesContainer")[0]);

    const openingTimes1 = addElement("div", "openingTimes1", "Monday - Friday:  5pm - 11pm", "display: flex; font-weight: 500; font-size: 1.25rem;", document.getElementsByClassName("openingTimesContainer")[0]);
    const openingTimes2 = addElement("div", "openingTimes2", "Saturday:  3pm - 12pm", "display: flex; font-weight: 500; font-size: 1.25rem;", document.getElementsByClassName("openingTimesContainer")[0]);
    const openingTimes3 = addElement("div", "openingTimes3", "Sunday:  5pm - 9pm", "display: flex; font-weight: 500; font-size: 1.25rem;", document.getElementsByClassName("openingTimesContainer")[0]);

    const contactRightSideContainer = addElement("div", "contactRightSideContainer", "", "display: flex; height: 100%; width: 100%;", document.getElementsByClassName("contactInfoContainer")[0]);
    const contactMap = addElement("iframe", "contactMap", "", "display: flex; width: 100%; border-radius: 20px; border: 4px solid #DDDDDD;", document.getElementsByClassName("contactRightSideContainer")[0], "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.373552539124!2d-0.1283702230145246!3d51.543048908097994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4e348804a1%3A0x9263b7a616c78519!2sBRGR%20LDN!5e0!3m2!1sen!2suk!4v1717606441572!5m2!1sen!2suk");
}

function footer() {
    const footer = addElement("div", "footer", "@conormoran12 | GitHub", "display: flex; height: 5vh; justify-content: center; align-items: center; background: #FF5C00; font-weight: 500; color: #FFFFFF;", document.body);
}

// navigationBar();
// mainContainer();
// footer();

export { Contactpage };