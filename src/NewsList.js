import {apiKey, defaultSource, customImageUrl, dateOptions} from './config';

export default class NewsList{
    /**
     * @param node {DOM node} - node to apply class
     * @param newsSourceControls {DOM node} - node where source controls are
     * @param initialSource {String} - initial news source
     */
    constructor(node, newsSourceControls, initialSource){
        this.newsContainer = node;
        this.newsSourceTitle = document.querySelector('.news-source');
        this.source = initialSource;


        this.handleFetch(this.source);
        newsSourceControls.addEventListener('click', this.clickHandler);
    }

    /**
     * Renders result to DOM
     * @param builtString {String} - assembled news items
     */
    render(builtString) {
        this.newsSourceTitle.innerHTML = this.source;
        this.newsContainer.innerHTML = builtString;
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
        }, '');
    }

    /**
     * Sends fetch request and handles its response
     */
    handleFetch() {
        fetch(this.buildUrl())
            .then((response) => response.json())
            .then((data) => this.parseData(data))
            .then((builtString) => this.render(builtString))
            .catch((err) => console.log(err));
    };

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
            this.source = target.dataset.source;
            this.handleFetch();
        }
    };
};