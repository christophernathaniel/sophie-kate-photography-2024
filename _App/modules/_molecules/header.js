import { PageFlow } from 'swift-swap/src/PageFlow.js';
import EventListenerManager from '../../js/libraries/EventListenerManager';
import debounce from '../../js/libraries/debounce';
const headerEventListener = new EventListenerManager();



// HTML Rendered Moduke
const Header = ({ val, parent }) => {
    // Add More items to State
    const localState = { 
       ...val,
       navState : false,
       mobileNavState : false
   };

   const functions = {
    navState: () => {
        variables.navState ? localSelectors.parentElement.classList.add('active') : localSelectors.parentElement.classList.remove('active');
        variables.navState ? document.body.classList.add('has-scrolled') : document.body.classList.remove('has-scrolled');
    }
   }



   const localSelectors = {
    'parentElement': document.querySelector('header')
   }

   // Include PageFlow Dependancies
   const [_, variables] = new PageFlow(parent, { ...localState}); // Initialise Component

   // Render Component (Loops the HTML values)
   const RenderComponent = () => {

    let prevState = false;
    let parentElement = document.querySelector(parent)
   
    headerEventListener.removeAll();

    const documentClickListener = (event) => {
        const menu = document.querySelector('.menu-toggle');
        const navMain = document.querySelector('.nav-main');
        const clickedElement = event.target;
    
        // Check if the clicked element is not part of the menu or nav-main
        if (clickedElement !== menu && !menu.contains(clickedElement) &&
            clickedElement !== navMain && !navMain.contains(clickedElement)) {
            // Hide the menu
            variables.mobileNavState = false;
            localSelectors.parentElement.classList.remove('menu-active');
        }
    };
    
    // Add click event listener to the document
    document.addEventListener('click', documentClickListener);

    
    headerEventListener.add(document.querySelector('.menu-toggle'), 'click', () => {
        variables.mobileNavState = !variables.mobileNavState;
        variables.mobileNavState ? localSelectors.parentElement.classList.add('menu-active') : localSelectors.parentElement.classList.remove('menu-active');
    });


    headerEventListener.add(document.querySelector('.nav-main'), 'click', () => {
        variables.mobileNavState = !variables.mobileNavState;
        variables.mobileNavState ? localSelectors.parentElement.classList.add('menu-active') : localSelectors.parentElement.classList.remove('menu-active');
    });




    headerEventListener.add(window, 'scroll', () => {
        variables.navState = (window.scrollY > 1) ? true : false;

       // if(prevState !== variables.navState) {
           functions.navState();
       // }

       // prevState = variables.navState;
    }, 100);

    _.render(); // Final Render Component (Forces render to produce up to date Application State )
   };

   return {
       RenderComponent: RenderComponent // Return the Render Component
   };
};

export { Header as default }