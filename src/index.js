import {apiKey} from './config';
import {defaultSource} from './config';
import {customImageUrl} from './config'

import './css/styles.css';

export default class NewsList{
    constructor(){
        this.NEWS_CONTAINER = null;
        this.NEWS_SOURCE_TITLE = null;
        this.SOURCE = null;
    }

    init(node, initialSource){
        this.NEWS_CONTAINER = node;
        this.NEWS_SOURCE_TITLE = document.querySelector('.news-source');
        this.SOURCE = initialSource;


        this.triggerFetch(this.SOURCE);
        document.addEventListener('click', this.clickHandler);
    }

    render({nodes: stringNodes, source}) {
        this.NEWS_SOURCE_TITLE.innerHTML = source;
        this.NEWS_CONTAINER.innerHTML = '';
        stringNodes.map((el) => this.NEWS_CONTAINER.insertAdjacentHTML('afterbegin', el));
    };

    parseData(data) {
        return data.articles.map( (item) => {
            const customDate = new Date().toISOString().slice(0, 10).toString();
            const newsCard = `
                <div class="news-card">
                    <img class="news-card__img" src="${item.urlToImage || customImageUrl}" alt="News Article Image">
                    <div class="news-card__wrapper">
                        <div class="news-card__header">
                            <div class="news-card__date">
                                
                            </div>
                        </div>
                        <div class="news-card__data">
                            <div class="news-card__content">
                                <span class="news-card__author">${item.author}</span>
                                <h1 class="news-card__title"><a href="#">${item.title}</a></h1>
                                <p class="news-card__description">${item.description}</p>
                                <a href="${item.url}" class="news-card__button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
              `;
            return newsCard;
        });
    }

    parseJSON(data){
        return data.json();
    };

    triggerFetch(source = defaultSource) {
        let that = this;
        fetch(this.buildUrl(source))
            .then((response) => this.parseJSON(response))
            .then((data) => this.parseData(data))
            .then((nodes) => this.render({nodes, source}))
            .catch((err) => console.log(err));
    };

    buildUrl(source){
        if ( source && source.length > 0 ) {
            return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
        }
    };

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