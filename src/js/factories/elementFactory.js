export default function elementFactory(type, clssName, object) {
    const element = document.createElement(type);

    if (clssName) {
        element.className = clssName;
    }

    if (object) {
        if ((typeof object) === 'object') {
            if (Array.isArray(object)) {
                object.forEach((value) => {
                    if (Object.keys(value)[0] === 'innerHTML') {
                        element.innerHTML = `${Object.values(value)[0]}`;
                    } else {
                        element.setAttribute(Object.keys(value)[0], Object.values(value)[0]);
                    }
                });
            } else {
                if (Object.keys(object)[0] === 'innerHTML') {
                    element.innerHTML = `${Object.values(object)}`;
                    return element;
                }
                element.setAttribute(Object.keys(object), Object.values(object));
            }
        }
    }
    return element;
}
