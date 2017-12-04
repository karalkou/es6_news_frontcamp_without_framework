import NewsList from './NewsList';
import { defaultSource } from './config';

import './css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.querySelector('.news-container');
    const newsSourceControls = document.querySelector('.source-list');
    const newsSourceTitle = document.querySelector('.news-source');

    if ( newsContainer ) { new NewsList(newsContainer, newsSourceControls, newsSourceTitle, defaultSource).init(); }

    /* area of 'babel-remove-console-log-expression' action */
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
    /* \area of 'babel-remove-console-log-expression' action */

});
