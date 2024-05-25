class ViewportObserver {
    constructor(selector, options = {}, callbackIn, callbackOut) {
        this.elements = document.querySelectorAll(selector);
        this.options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
            ...options
        };
        this.callbackIn = callbackIn;
        this.callbackOut = callbackOut;

        this.observers = Array.from(this.elements).map(element =>
            new IntersectionObserver(this.handleIntersect.bind(this), this.options)
        );

        this.observe();
    }

    observe() {
        this.observers.forEach((observer, index) => {
            observer.observe(this.elements[index]);
        });
    }

    unobserve() {
        this.observers.forEach((observer, index) => {
            observer.unobserve(this.elements[index]);
        });
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && this.callbackIn) {
                this.callbackIn(entry.target);
            } else if (!entry.isIntersecting && this.callbackOut) {
                this.callbackOut(entry.target);
            }
        });
    }
}


export default ViewportObserver;

// Target element
// const targetElement = document.querySelector('.your-element');

// // Options for Intersection Observer
// const options = {
//     root: null, // Use viewport as root
//     rootMargin: '0px', // No margin
//     threshold: 0.5, // Trigger callback when 50% of the element is visible
//     once: true // Only trigger callback once
// };

// // Callback function
// const callback = (element) => {
//     console.log('Element is in viewport:', element);
//     // Add your logic here
// };

// // Initialize ViewportObserver

// callback() {

// }
// const observer = new ViewportObserver(document.querySelector('.your-element'), null, callback);