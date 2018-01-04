import {customImageUrl, dateOptions} from '../config';
import store  from './../redux-simple';
import { fetchAll } from "../ducks/news";

export default class NewsList{
    /**
     * @param node {object} - DOM node to apply class
     */
    constructor(node){
        this.newsContainer = node;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        store.subscribe(this.render.bind(this));

        //TODO: create 'connect' to make dispatching more comfortable
        store.dispatch( fetchAll() );
    }

    /**
     * Renders result to DOM
     */
    render() {
        const data = store.getState().news;

        if (data && data.articles.length > 0) {
            this.newsContainer.innerHTML = this.parseData(data);
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
};