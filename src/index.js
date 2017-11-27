import {apiKey, defaultSource, customImageUrl, dateOptions} from './config';

import './css/styles.css';

export default class NewsList{
    constructor(){
        this.NEWS_CONTAINER = null;
        this.NEWS_SOURCE_TITLE = null;
        this.SOURCE = null;
    }

    /**
     * Inits instance
     * @param node {DOM node} - node to apply class
     * @param initialSource {String} - initial news source
     */
    init(node, initialSource){
        this.NEWS_CONTAINER = node;
        this.NEWS_SOURCE_TITLE = document.querySelector('.news-source');
        this.SOURCE = initialSource;


        this.triggerFetch(this.SOURCE);
        document.addEventListener('click', this.clickHandler);
    }

    /**
     * Renders result to DOM
     * @param stringNodes {String} - assembled news items
     * @param source {String} - news source
     */
    render({nodes: stringNodes, source}) {
        this.NEWS_SOURCE_TITLE.innerHTML = source;
        this.NEWS_CONTAINER.innerHTML = '';
        stringNodes.map((el) => this.NEWS_CONTAINER.insertAdjacentHTML('afterbegin', el));
    };

    /**
     * Parses data from response
     * @param data {Object} - data from API
     * @returns {Array|*|{}}
     */
    parseData(data) {
        return data.articles.map( (item) => {
            const { urlToImage, publishedAt, author, title, description, url } = item;
            const formattedPublishedAt = new Date(publishedAt).toLocaleString("en", dateOptions);

            const newsCard = `
                <div class="news-list-item">
                    <img class="news-list-item__img" src="${urlToImage || customImageUrl}" alt="News Article Image">
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
            return newsCard;
        });
    }

    /**
     * Parses JSON
     * @param data {Promise} - data from response
     * @returns {*} JSON object
     */
    parseJSON(data){
        return data.json();
    };

    /**
     * Sends fetch request
     * @param source {String} - news source
     */
    triggerFetch(source = defaultSource) {
        let that = this;
        fetch(this.buildUrl(source))
            .then((response) => this.parseJSON(response))
            .then((data) => this.parseData(data))
            .then((nodes) => this.render({nodes, source}))
            .catch((err) => console.log(err));
    };

    /**
     * Builds url to make fetch request
     * @param source {String} - news source
     * @returns {string} - url
     */
    buildUrl(source){
        if ( source && source.length > 0 ) {
            return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
        }
    };

    /**
     * Handles click on document
     * @param e - event
     */
    clickHandler = (e) => {
        let target = e.target;
        if (target.classList.contains('source-list__item')) {
            this.SOURCE = target.dataset.source;
            this.triggerFetch(this.SOURCE);
        }
    };
};

/*--------------------------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.querySelector('.news-container');
    if ( newsContainer ) new NewsList().init(newsContainer, defaultSource);
});