import store  from './../redux-simple';
import { CHANGE_TITLE } from "./../ducks/sources";

export default class SourcesComponent{
    /**
     * @param node {object} - DOM node to apply class
     */
    constructor(node){
        this.sourcesComponent = node;
        console.log(this.sourcesComponent);
        this.newsSourceControls = this.sourcesComponent.querySelector('.source-list');
        this.newsSourceTitle = this.sourcesComponent.querySelector('.news-source');
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        this.newsSourceControls.addEventListener('click', this.clickHandler);
        store.subscribe(this.render.bind(this));
        store.dispatch( {
            type: CHANGE_TITLE
        });
    }

    render(){
        this.newsSourceTitle.innerHTML = store.getState().sources.currentTitle;
    }

    clickHandler = (e) => {
        let target = e.target;
        if (target.classList.contains('source-list__item')) {
            let source = target.getAttribute('data-source');

            store.dispatch( {
                type: CHANGE_TITLE,
                payload: {
                    currentTitle: source
                }
            });
        }
    };
};
