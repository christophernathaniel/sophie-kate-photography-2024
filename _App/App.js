import './App.scss';

import { DynamicPage } from 'swift-swap/src/PageFlow.js';
import EventListenerManager from './js/libraries/EventListenerManager';
import organism00 from './modules/_organisms/organism-00/organism-00';
import Header from './modules/_molecules/header';
import CookieGuardian from 'cookie-guardian/src/cookie-guardian.js';
import ViewportObserver from './js/libraries/ViewportObserver';
import wrapWordsInSpans from './js/libraries/wrapWordsInSpans';

const eventManagerListener = new EventListenerManager();
const state = {}


// document.querySelector('.theme-toggle').addEventListener('click', () => document.body.classList.toggle('dark-theme'));

// if(event.target.href.includes(window.location.origin) && !event.target.href.includes('#')) {
// Components to Render on each page load. Add RenderComponent functions to the Module Classes here.
// Each time the page is loaded these functions are called
let renderList = [() => {
    eventManagerListener.removeAll();

    document.querySelectorAll('a').forEach(link => {
        eventManagerListener.add(link, 'click', (event) => {
            if(!link.classList.contains('external_url')) {
            event.preventDefault();
                document.body.classList.add('page-transition');

                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'instant'});
                }, 700);
            
                setTimeout(() => {
                    window.history.pushState({}, '', link.href);
                    dynamicPage._makeRequest(link.href); // Make Request and Render
                }, 1000);
            }
        });
    }); 
}];


renderList = [...renderList, () => {
    setTimeout(() => document.body.classList.remove('in-transition'), 100);
}];


// renderList = [...renderList, HtmlModule({  val: state, parent: '.myParent2' }).RenderComponent]; // Works
renderList = [...renderList, organism00({ val: state, parent: '.organism-00 .function' }).RenderComponent];
renderList = [...renderList, Header({ val: state, parent: 'header'}).RenderComponent];
renderList = [...renderList, () => wrapWordsInSpans('.wrap-in-span') ];
renderList = [...renderList, () => {
    const insideCallback = (elem) => elem.classList.add('in-viewport');
    const outsideCallback = (elem) => elem.classList.remove('in-viewport');
    new ViewportObserver('.vp--observer', {}, insideCallback, outsideCallback);
}];


// Define DynamicPage // Source = The HTML element to grab (OuterHTML) // target = The Placement
// DynamicPage needs to load after any specified data - should technically be the last Function loaded
const dynamicPage = new DynamicPage({source: 'DynamicPage', target: 'App'}, renderList, true);
dynamicPage._makeRequest(window.location.href); // Make Request and Render index.html to the page


// Cookie Guardian
const cookieGuardian = new CookieGuardian({
    stopAllCookies: true,
    statistics: () => {
        // // Statistics Callback
        // let tagManager = document.createElement('script');
        // tagManager.id = 'google-tag-manager';
        // tagManager.type = 'text/javascript';
        // tagManager.src = 'https://www.googletagmanager.com/gtag/js?id=G-CMGVJF32BG';    
        // document.head.appendChild(tagManager);


        // // Set the script content
        // let analyticsLayer = document.createElement('script');
        // analyticsLayer.textContent = `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag(){dataLayer.push(arguments);}
        //     gtag('js', new Date());
        //     gtag('config', 'G-CMGVJF32BG');
        // `;

        // // Append the script element to the head of the document
        // document.head.appendChild(analyticsLayer);

        // // Statistics Granted
        // gtag('consent', 'update', {
        //     'ad_storage': 'granted',
        //     'ad_user_data': 'granted',
        //     'ad_personalization': 'granted',
        //     'analytics_storage': 'granted',
        //     'wait_for_update': 500
        // });
    },   
});
