import NewsList from './components/NewsList';
import SourcesList from './components/SourcesList';
import SourcesTitle from './components/SourcesTitle';

import './styles/dynamic-styles.less';

export default () => {
    const newsSourceControls = document.querySelector('.source-list');
    const newsSourceTitle = document.querySelector('.news-source');
    const newsContainer = document.querySelector('.news-container');

    if ( newsSourceControls ) { new SourcesList(newsSourceControls).init(); }
    if ( newsSourceTitle ) { new SourcesTitle(newsSourceTitle).init(); }
    if ( newsContainer ) { new NewsList(newsContainer).init(); }
}
