export function addComponentCss(componentName) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `./components/${componentName}/${componentName}.css`;
    document.head.appendChild(link);
}