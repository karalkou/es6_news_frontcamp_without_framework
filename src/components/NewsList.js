import {customImageUrl, dateOptions} from './../config';
import { storeManager } from "./../redux-simple/command";
import ProvideStoreDecorator from "../decorators/ProvideStoreDecorator";

@ProvideStoreDecorator()
export default class NewsList{
    /**
     * @param instanceArgs {object} - args to create instance
     */
    constructor(instanceArgs){
        this.instanceArgs = instanceArgs;
        const { node, store } = instanceArgs;
        this.newsContainer = node;
        this.store = store;
    }

    /**
     * Starts methods and add event listeners
     */
    init(){
        this.store.subscribe(this.render.bind(this));

        //TODO: create 'connect' to make dispatching more comfortable
        this.store.dispatch( storeManager.execute('FETCH_ALL_COMMAND') );
    }

    /**
     * Renders result to DOM
     */
    render() {
        const data = this.store.getState().news;

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

    /**
     * This method is created only to implement the Prototype Design Pattern
     * @returns {NewsList} - instance of class NewsList
     */
    clone() {
        return new NewsList(this.instanceArgs);
    }
}

/*
export default ProvideStoreDecorator()(NewsList)*/
