import NewsList from './NewsList';
import { defaultSource } from './config';

import './css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.querySelector('.news-container');
    const newsSourceControls = document.querySelector('.source-list');
    if ( newsContainer ) { new NewsList(newsContainer, newsSourceControls, defaultSource); }
});