import NewsList from './components/NewsList';
import SourcesList from './components/SourcesList';
import SourcesTitle from './components/SourcesTitle';

window.NewsList = NewsList;

import './styles/dynamic-styles.less';

export default () => {
    const newsSourceList = document.querySelector('.source-list');
    const newsSourceTitle = document.querySelector('.news-source');
    const newsContainer = document.querySelector('.news-container');

    // Object creation in beneath strings shows us an implementation of the Prototype Design Pattern
    // In this special occasion it is an unnecessary overhead
    // Pattern realisation was borrowed from
    // https://github.com/fbeline/Design-Patterns-JS/blob/master/src/creational/prototype/prototype_es6.js
    if ( newsSourceList ) {
        let sourcesListInstance = new SourcesList(newsSourceList);
        sourcesListInstance.clone().init();
    }
    if ( newsSourceTitle ) {
        let SourcesTitleInstance = new SourcesTitle(newsSourceTitle);
        SourcesTitleInstance.clone().init();
    }
    if ( newsContainer ) {
        let NewsListInstance = new NewsList(newsContainer);
        NewsListInstance.clone().init();
    }



    // The 'old' code (before the Prototype pattern implementation)
    // if ( newsSourceList ) { new SourcesList(newsSourceList).init(); }
    // if ( newsSourceTitle ) { new SourcesTitle(newsSourceTitle).init(); }
    // if ( newsContainer ) { new NewsList(newsContainer).init(); }
}
