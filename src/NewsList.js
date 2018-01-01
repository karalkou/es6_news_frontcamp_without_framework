import {apiKey, defaultSource, customImageUrl, dateOptions} from './config';
import store  from './redux-simple';
import { FETCH_ALL } from "./ducks/news";

export default class NewsList{
    /**
     * @param node {object} - DOM node to apply class
     * @param newsSourceControls {object} - DOM node where source controls are
     * @param newsSourceTitle {object} - DOM node where source title is
     * @param initialSource {String} - initial news source
     */
    constructor(node, newsSourceControls, newsSourceTitle, initialSource){
        this.newsContainer = node;
        this.newsSourceTitle = newsSourceTitle;
        this.newsSourceControls = newsSourceControls;
        this.source = initialSource;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        store.subscribe(this.render.bind(this));

        //TODO: create 'connect' to make dispatching more comfortable
        store.dispatch( {
            type: FETCH_ALL,
            callAPI: this.buildUrl()
        });

        this.newsSourceControls.addEventListener('click', this.clickHandler);
    }

    /**
     * Renders result to DOM
     */
    render() {
        const data = store.getState().news;
        if (data && data.articles.length > 0) {
            let builtString = this.parseData(data);

            this.newsSourceTitle.innerHTML = this.source;
            this.newsContainer.innerHTML = builtString;
        }

    };

    /**
     * Parses data from response
     * @param data {Object} - data from API
     * @returns {Array|*|{}}
     */
    parseData(data) {
        return data.articles.reduce( (prevString, item) => {
            const { urlToImage, publishedAt, author, title, description, url } = item;
            const formattedPublishedAt = new Date(publishedAt).toLocaleString("en", dateOptions);

            return `${prevString}
                <div class="news-list-item">
                    <div class="news-list-item__img" style="background-image: url(${urlToImage || customImageUrl})"></div>
                    <div class="news-list-item__wrapper">
                        <div class="news-list-item__header">
                            <div class="news-list-item__date">
                                ${formattedPublishedAt}
                            </div>
                        </div>
                        <div class="news-list-item__data">
                            <div class="news-list-item__content">
                                <span class="news-list-item__author">${author}</span>
                                <h1 class="news-list-item__title"><a href="#">${title}</a></h1>
                                <p class="news-list-item__description">${description}</p>
                                <a href="${url}" class="news-list-item__button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
              `;
        }, '');
    }

    /**
     * Builds url to make fetch request
     * @returns {string} - url
     */
    buildUrl(){
        if ( this.source && this.source.length > 0 ) {
            return `https://newsapi.org/v2/top-headlines?sources=${this.source}&apiKey=${apiKey}`
        }
    };

    /**
     * Handles click on document
     * @param e - event
     */
    clickHandler = (e) => {
        let target = e.target;
        if (target.classList.contains('source-list__item')) {
            this.source = target.getAttribute('data-source');

            store.dispatch( {
                type: FETCH_ALL,
                callAPI: this.buildUrl()
            });
        }
    };
};
