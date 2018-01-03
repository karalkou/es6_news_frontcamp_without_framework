import NewsList from './components/NewsList';
import SourcesComponent from './components/SourcesComponent';
import { FETCH_ALL } from "./ducks/news";
import store  from './redux-simple';

import './styles/dynamic-styles.less';

export default () => {
    const newsContainer = document.querySelector('.news-container');
    const sourcesComponent = document.querySelector('.sources-component');
    const newsSourceControls = document.querySelector('.source-list');

    const clickHandler = (e) => {
        let target = e.target;
        if (target.classList.contains('source-list__item')) {
            let source = target.getAttribute('data-source');

            store.dispatch( {
                type: FETCH_ALL,
                callAPI: true,
                payload: source
            });
        }
    };


    newsSourceControls.addEventListener('click', clickHandler);
    if ( sourcesComponent ) { new SourcesComponent(sourcesComponent).init(); }
    if ( newsContainer ) { new NewsList(newsContainer).init(); }

}
