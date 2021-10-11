export default function appendTo(parent, element) {
    if (parent && element) {
        if (((typeof parent) === 'object') && Array.isArray(element)) {
            element.forEach((child) => {
                parent.appendChild(child);
            });
        } else if (((typeof parent) === 'string') && Array.isArray(element)) {
            element.forEach((child) => {
                document.querySelector(parent).appendChild(child);
            });
        } else if ((typeof parent) === 'object') {
            parent.appendChild(element);
        } else if ((typeof parent) === 'string') {
            document.querySelector(parent).appendChild(element);
        }
    }
}
