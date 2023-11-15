import nock from 'nock';
import { default as restaurantList } from './components/mocks/bodyMockData.json'

global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

// Configure nock here
nock('https://corsproxy.io/?https://www.swiggy.com')
    .get('/dapi/restaurants/list/v5?lat=12.979568962372062&lng=77.50290893018244&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&__fetch_req__=true')
    .reply(200, { data: { cards: restaurantList } });

// Other global setup if needed
