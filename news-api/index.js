/*export default class NewsList{
 constructor(){}

 }*/


document.addEventListener('DOMContentLoaded', () => {
    /* ------------------------------------------------------------------------------- */
    let source = `bbc-news`;
    const apiKey = '90e3266a077347219e896b2dec2ec141';

    const buildUrl = (source) => {
        if ( source && source.length > 0 ) {
            return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
        }
    };
    const customImageUrl = `http://bydesignvsm.com/wp-content/uploads/2015/06/Black-Background-HD-Wallpaper-24.jpg`;
    const parseJSON = (data) => data.json();

    const getYear = (date) => date.split('-')[0];

    const getMonth = (date) => {
        const monthsArr = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec'
        };
        return monthsArr[date.split('-')[1]];
    };

    const getDay = (date) => date.split('-')[2];

    const parseData = (data) => data.articles.map( (item) => {
        const customDate = new Date().toISOString().slice(0, 10).toString();
        const newsCard = `
            <div class="news-card">
                <img class="news-card__img" src="${item.urlToImage || customImageUrl}" alt="News Article Image">
                <div class="news-card__wrapper">
                    <div class="news-card__header">
                        <div class="news-card__date">
                            <span class="news-card__day">${getDay(item.publishedAt || customDate)}</span>
                            <span class="news-card__month">${getMonth(item.publishedAt || customDate)}</span>
                            <span class="news-card__year">${getYear(item.publishedAt || customDate)}</span>
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

    const renderToDom = ({nodes: stringNodes, source}) => {
        const newsSource = document.querySelector('.news-source');
        const newsContainer = document.querySelector('.news-container');

        newsSource.innerHTML = source;
        newsContainer.innerHTML = '';
        stringNodes.map((el) => newsContainer.insertAdjacentHTML('afterbegin', el));
    };

    const triggerFetch = (source) => {
        fetch(buildUrl(source))
            .then((response) => parseJSON(response))
            .then((data) => parseData(data))
            .then((nodes) => renderToDom({nodes, source}))
            .catch((err) => console.log(err));
    };

    triggerFetch(source);

    document.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('source-list__item')) {
            source = target.dataset.source;
            triggerFetch(source);
        }
    });


    /* ------------------------------------------------------------------------------- */
});
