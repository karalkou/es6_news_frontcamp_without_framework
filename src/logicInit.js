import NewsList from './components/NewsList';
import SourcesList from './components/SourcesList';
import SourcesTitle from './components/SourcesTitle';

import './styles/dynamic-styles.less';

// I suppose it can be treated as Facade pattern, cause we simplify initializing for users
class Facade{
    constructor(node, classToCreate){
        // Prototype Design Pattern
        // Object creation below shows us an implementation of the Prototype Design Pattern
        // In this special occasion it is an unnecessary overhead
        // Pattern realisation was borrowed from
        // https://github.com/fbeline/Design-Patterns-JS/blob/master/src/creational/prototype/prototype_es6.js
        if( node ){
            let instance = new classToCreate(node);
            instance.clone().init();
        }
    }
}

export default () => {
    const newsSourceList = document.querySelector('.source-list');
    const newsSourceTitle = document.querySelector('.news-source');
    const newsContainer = document.querySelector('.news-container');

    new Facade(newsSourceList, SourcesList);
    new Facade(newsSourceTitle, SourcesTitle);
    new Facade(newsContainer, NewsList);


    // The 'old' code (before prototype and facade patterns implementation)
    // if ( newsSourceList ) { new SourcesList(newsSourceList).init(); }
    // if ( newsSourceTitle ) { new SourcesTitle(newsSourceTitle).init(); }
    // if ( newsContainer ) { new NewsList(newsContainer).init(); }
}
