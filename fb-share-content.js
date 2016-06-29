
import $ from'jquery';
import qs from'query-string';
import setQuery from'url-set-query';
import Snake from'snakecase-keys';
import {partial} from'ap';
import pipe from'value-pipe';

const base = 'https://www.facebook.com/dialog/feed';

let share, options = {

};

let popupParamsStr = '';

export function init({appId, display = 'popup', from}, popupParams = {}) {
    appId = parseInt(appId);
    check(appId, Number);
    popupParamsStr = Object.keys(popupParams).map(it => {
        return `${it}=${popupParams[it]}`;
    }).join(',');
    share = pipe(
        partial(Object.assign, {
            appId,
            from,
            display
        }),
        Snake,
        qs.stringify,
        partial(setQuery, base)
    )
}


export function sharePost(name, description, link) {
    check(name, String);
    check(description, String);
    check(link, String);
    description = $('<p>'+description+'</p>').text();
    checkIfInited();
    let params = {
        ...options,
        name,
        description,
        link
    };
    const url = share(params);
    const newWindow = window.open(url, 'shareIt', popupParamsStr);
    if (window.focus) {
        newWindow.focus()
    }
    return newWindow;
}

function checkIfInited() {
    if (!share) {
        throw new Error('You must call init with your facebook appId to initialize!');
    }
}
