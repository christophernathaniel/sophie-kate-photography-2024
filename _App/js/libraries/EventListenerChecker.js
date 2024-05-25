class EventListenerChecker {
    constructor(eventName, callback) {
        this.eventName = eventName;
        this.callback = callback;
        this.intervalId = null;
    }

    startChecking() {
        this.intervalId = setInterval(() => {
            if (this.checkEventExistence()) {
                clearInterval(this.intervalId);
                if (this.callback) {
                    this.callback();
                }
            }
        }, 1000); // Check every second, adjust as needed
    }

    stopChecking() {
        clearInterval(this.intervalId);
    }

    checkEventExistence() {
        return !!document.listeners && !!document.listeners[this.eventName];
    }
}

export default EventListenerChecker;

// Example usage:
// const checker = new ElementListenerChecker('.myElement', 'click', () => {
//     console.log('Element clicked!');
// });

// checker.startChecking();
