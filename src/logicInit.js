import NewsList from './NewsList';
import { defaultSource } from './config';

import './styles/dynamic-styles.less';

export default () => {
    const newsContainer = document.querySelector('.news-container');
    const newsSourceControls = document.querySelector('.source-list');
    const newsSourceTitle = document.querySelector('.news-source');

    if ( newsContainer ) { new NewsList(newsContainer, newsSourceControls, newsSourceTitle, defaultSource).init(); }
}
