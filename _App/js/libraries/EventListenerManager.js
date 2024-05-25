class EventListenerManager {
    constructor() {
        this.eventListeners = [];
    }
 
    add(element, eventType, listener) {
        element.addEventListener(eventType, listener);
        this.eventListeners.push({ element, eventType, listener });
    }
 
    removeAll() {
        this.eventListeners.forEach(({ element, eventType, listener }) => {
            element.removeEventListener(eventType, listener);
        });
        this.eventListeners = [];
    }
 }
 
 export { EventListenerManager as default}