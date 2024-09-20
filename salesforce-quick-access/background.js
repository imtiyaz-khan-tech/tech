chrome.commands.onCommand.addListener(function (command) {
    if (command === "openRecordDetail") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
                let currentUrl = tabs[0].url;
                if (currentUrl.indexOf('force.com') != -1 || currentUrl.indexOf('salesforce.com') != -1 || currentUrl.indexOf('visualforce.com') != -1) {
                    initializeOnLoad('record.html', {url: currentUrl});
                }
            }
        });
    }else if (command === "openDebugLogs") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
                let currentUrl = tabs[0].url;
                if (currentUrl.indexOf('force.com') != -1 || currentUrl.indexOf('salesforce.com') != -1 || currentUrl.indexOf('visualforce.com') != -1) {
                    initializeOnLoad('quicktasks.html', {url: currentUrl});
                }
            }
        });
    }else if (command === "openMetadata") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
                let currentUrl = tabs[0].url;
                if (currentUrl.indexOf('force.com') != -1 || currentUrl.indexOf('salesforce.com') != -1 || currentUrl.indexOf('visualforce.com') != -1) {
                    initializeOnLoad('metadata.html', {url: currentUrl});
                }
            }
        });
    }else if (command === "openObjects") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
                let currentUrl = tabs[0].url;
                if (currentUrl.indexOf('force.com') != -1 || currentUrl.indexOf('salesforce.com') != -1 || currentUrl.indexOf('visualforce.com') != -1) {
                    initializeOnLoad('objects.html', {url: currentUrl});
                }
            }
        });
    }else if (command === "openRecordsList") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
                let currentUrl = tabs[0].url;
                if (currentUrl.indexOf('force.com') != -1 || currentUrl.indexOf('salesforce.com') != -1 || currentUrl.indexOf('visualforce.com') != -1) {
                    initializeOnLoad('recordslist.html', {url: currentUrl});
                }
            }
        });
    }
});
let recordID = '';
function initializeOnLoad(page, tab) {
    console.log('$tab: ',tab);
    chrome.cookies.getAll({
        name: 'sid'
    }, function (cookies) {
        let sid = cookies.find(element => {
            return element.domain.includes(getUrlInSalesforceForm(tab.url));
        });
        let baseUrl = 'https://' + sid.domain.replace('lightning.force', 'my.salesforce');
        let sessionId = sid.value;
        getRecordDetailId(tab.url);
        openMaximized(page + '?' + recordID + 'baseUrl=' + baseUrl + '&sessionId=' + sessionId);
    });
}
function getRecordDetailId(url) {
    let info = url.split("/");
    if (info && info.length && info[info.length - 1].toLowerCase() == 'view' && info.length > 5) {
        let sObjectId = info[info.length - 2];
        recordID = 'recordID=' + sObjectId + '&';
    }
}

function getUrlInSalesforceForm(url) {
    url = url.replace('https://', '').split('/')[0].replace('lightning.force', 'my.salesforce');
    return url;
}
function openMaximized(url) {
    if (url) {
        chrome.windows.create({
            type: 'popup',
            url: url,
            state: 'maximized'
        });
    }
}