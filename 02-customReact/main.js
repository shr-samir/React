// hamle react yo main kura lai chai custom tarika le banauna ra bhujha khojeko ho. react ko inner working.

// ReactDOM.createRoot(document.getElementById('root')).render(
//    <React.StrictMode>
//      <App />
//      <NewComponent />
//    </React.StrictMode>,
//  )
// yo kura lai cha hamle plain js format ma kasari transpile/convert(for lack of better words) vairaxa ta tyo bujha khojiraxau

// react chai hamro kasari kaam garxa vane react SPA ho sab kura index.html tei euta page mai hunxa ajha vannu parda tesko eutai div vitra hunxa.
// aba hamle tesko id lai grab garxau ani container variable ma rakhxau
// react ma virtual dom hunxa tesma element like a, p, button tags haru lai dom tree structure ma rakhinxa
// aba hamle grab gareko root id ko div container ma lagera render gardine

function customReactRender(element, container) {
  // version1 where the passing of props is not dynamic

  //   const domElement = document.createElement(element.tag);
  //   domElement.innerHTML = element.children;
  //   domElement.setAttribute("href", element.props.href);
  //   domElement.setAttribute("target", element.props.target);
  //   container.appendChild(domElement);

  // version2 where the code is dynamic

  const domElement = document.createElement(element.tag);
  domElement.innerHTML = element.children;
  for (const prop in element.props) {
    // if (prop === 'children') continue chaidaina yo kinaki children ta bahirai define garya xa
    domElement.setAttribute(prop, element.props[prop]);
  }
  container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
  tag: "a",
  props: {
    href: "https://facebook.com",
    target: "_blank",
  },
  children: "Vist us on Facebook",
};

customReactRender(reactElement, mainContainer);
