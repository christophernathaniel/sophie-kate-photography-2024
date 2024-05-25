const wrapWordsInSpans = (querySelector) => {
    const elements = document.querySelectorAll(querySelector);

    if (elements.length > 0) {
        elements.forEach(element => {
            const words = element.textContent.trim().split(/\s+/);
            const newContent = words.map(word => `<span>${word}</span>`).join(' ');
            element.innerHTML = newContent;
        });
    } else {
        console.error(`No elements matching the query selector '${querySelector}' found.`);
    }

    return elements.length > 0 ? elements : null;
};

export { wrapWordsInSpans as default };


// Usage: wrapWordsInSpans('your-element-id');