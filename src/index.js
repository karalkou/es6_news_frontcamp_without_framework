import NewsList from './NewsList';
import { defaultSource } from './config';

import './css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.querySelector('.news-container');
    const newsSourceControls = document.querySelector('.source-list');
    const newsSourceTitle = document.querySelector('.news-source');

    if ( newsContainer ) { new NewsList(newsContainer, newsSourceControls, newsSourceTitle, defaultSource).init(); }
});
