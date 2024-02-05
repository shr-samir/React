function customRender(reactEle, container) {
    // const domEle = document.createElement(reactEle.tag)
    // domEle.innerHTML = reactEle.children
    // domEle.setAttribute('href', reactEle.props.href)
    // domEle.setAttribute('target', reactEle.props.target)

    // container.appendChild(domEle)

    const domEle = document.createElement(reactEle.tag)
    domEle.innerHTML = reactEle.children
    for (const prop in reactEle.props) {
        if (prop === 'children') continue
        domEle.setAttribute(prop, reactEle.props[prop])
    }
    container.appendChild(domEle)
}

const reactElement = {
    tag: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)