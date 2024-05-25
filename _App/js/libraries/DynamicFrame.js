class DynamicFrame {
    constructor() {
        this.iframe = document.createElement('iframe');
    }

    setContent(containerId, htmlContent) {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with ID '${containerId}' not found.`);
        }
    
        // Split the HTML content into main content and script content
        const scriptRegExp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        const scripts = htmlContent.match(scriptRegExp) || [];
        const mainContent = htmlContent.replace(scriptRegExp, '');
    
        // Clear the parent container before rendering the iframe
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    
        // Append the iframe to the container
        container.appendChild(this.iframe);
    
        // Set the sandbox attribute to restrict iframe behavior
        this.iframe.setAttribute('sandbox', 'allow-scripts');
    
        // Append the main content to the iframe document
        const iframeDocument = this.iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(mainContent);
        
        // Append the script content to the iframe document
        scripts.forEach(script => {
            iframeDocument.write(script);
        });
    
        iframeDocument.close();
    }

    clearContent() {
        const iframeDocument = this.iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write('');
        iframeDocument.close();
    }
}

export { DynamicFrame as default }



// Usage:
// const iframeContainerId = 'iframeContainer';
// const initialContent = '<html><head><title>Initial Content</title></head><body><h1>Initial Content</h1><p>This is the initial content of the iframe.</p></body></html>';

// const customIframe = new CustomIframe(iframeContainerId, initialContent);

// // To update the content later
// const updatedContent = '<html><head><title>Updated Content</title></head><body><h1>Updated Content</h1><p>This is the updated content of the iframe.</p></body></html>';
// customIframe.setContent(updatedContent);

// To clear the content
// customIframe.clearContent();