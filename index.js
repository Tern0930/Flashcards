let packs = new Map;
const packsList = ['Europe', 'Asia', 'USA'];
// let capitalsEurope = [{country: 'Albania', capital: 'Tirana'}, {country: 'Andorra', capital: 'Andorra la Vella'}, {country: 'Armenia', capital: 'Yerevan'},
//     {country: 'Austria', capital: 'Vienna'}, {country: 'Azerbaijan', capital: 'Baku'}, {country: 'Belarus', capital: 'Minsk'},
//     {country: 'Belgium', capital: 'Brussels'}, {country: 'Bosnia & Herzegovina', capital: 'Sarajevo'}, {country: 'Bulgaria', capital: 'Sofia'},
//
//     {country: 'Croatia', capital: 'Zagreb'}, {country: 'Cyprus', capital: 'Nicosia'}, {country: 'Czech Republic',capital: 'Prague'},
//     {country: 'Denmark', capital: 'Copenhagen'}, {country: 'Estonia', capital: 'Tallinn'}, {country: 'Finland', capital: 'Helsinki'},
//     {country: 'France', capital: 'Paris'}, {country: 'Georgia', capital: 'Tbilisi'}, {country: 'Germany', capital: 'Berlin'},
//
//     {country: 'Greece', capital: 'Athens'}, {country: 'Hungary', capital: 'Budapest'}, {country: 'Iceland', capital: 'Reykjavik'},
//     {country: 'Ireland', capital: 'Dublin'}, {country: 'Italy', capital: 'Rome'}, {country: 'Kosovo', capital: 'Priština'},
//     {country: 'Latvia', capital: 'Riga'}, {country: 'Liechtenstein', capital: 'Vaduz'}, {country: 'Lithuania', capital: 'Vilnius'},
//
//     {country: 'Luxembourg', capital: 'Luxembourg'}, {country: 'Macedonia', capital: 'Skopje'}, {country: 'Malta', capital: 'Valletta'},
//     {country: 'Moldova', capital: 'Chişinău'}, {country: 'Monaco', capital: 'Monaco-Ville'}, {country: 'Montenegro', capital: 'Podgorica'},
//     {country: 'The Netherlands', capital: 'Amsterdam'}, {country: 'Norway', capital: 'Oslo'}, {country: 'Poland', capital: 'Warsaw'},
//
//     {country: 'Portugal', capital: 'Lisbon'}, {country: 'Romania', capital: 'Bucharest'}, {country: 'Russia', capital: 'Moscow'},
//     {country: 'San Marino', capital: 'San Marino City'}, {country: 'Serbia', capital: 'Belgrade'}, {country: 'Slovakia', capital: 'Bratislava'},
//     {country: 'Slovenia', capital: 'Ljubljana'}, {country: 'Spain', capital: 'Madrid'}, {country: 'Sweden', capital: 'Stockholm'},
//
//     {country: 'Switzerland', capital: 'Bern'}, {country: 'Turkey', capital: 'Ankara'}, {country: 'Ukraine', capital: 'Kiev'},
//     {country: 'United Kingdom', capital: 'London'}, {country: 'Vatican City', capital: 'Vatican City'}, {country: '', capital: ''},
//     {country: '', capital: ''}, {country: '', capital: ''}, {country: '', capital: ''}];

// let capitalsAsia = [{country: 'Afghanistan', capital: 'Kabul' }, {country: 'Armenia', capital: 'Yerevan' }, {country: 'Azerbaijan', capital: 'Baku' },
//     {country: 'Bahrain', capital: 'Manama' }, {country: 'Bangladesh', capital: 'Dhaka' }, {country: 'Bhutan', capital: 'Thimphu' },
//     {country: 'Brunei', capital: 'Bandar Seri Begawan' }, {country: 'Burma (Myanmar)', capital: 'Naypyidaw' }, {country: 'Cambodia', capital: 'Phnom Penh' },
//
//     {country: 'China', capital: 'Beijing' }, {country: 'Georgia', capital: 'T\'bilisi' }, {country: 'India', capital: 'New Delhi' },
//     {country: 'Indonesia', capital: 'Jakarta' }, {country: 'Iran', capital: 'Tehran' }, {country: 'Iraq', capital: 'Baghdad' },
//     {country: 'Israel', capital: 'Jerusalem' }, {country: 'Japan', capital: 'Tokyo' }, {country: 'Jordan', capital: 'Amman' },
//
//     {country: 'Kazakhstan', capital: 'Astana' }, {country: 'Korea , North', capital: 'P\'yongyang' }, {country: 'Korea , South', capital: 'Seoul' },
//     {country: 'Kuwait', capital: 'Kuwait City' }, {country: 'Kyrgyzstan', capital: 'Bishkek' }, {country: 'Laos', capital: 'Vientiane' },
//     {country: 'Lebanon', capital: 'Beirut' }, {country: 'Malaysia', capital: 'Kuala Lumpur' }, {country: 'Maldives', capital: 'Male' },
//
//     {country: 'Mongolia', capital: 'Ulaanbaatar' }, {country: 'Nepal', capital: 'Kathmandu' }, {country: 'Oman', capital: 'Muscat' },
//     {country: 'Pakistan', capital: 'Islamabad' }, {country: 'Philippines', capital: 'Manila' }, {country: 'Qatar', capital: 'Doha' },
//     {country: 'Russia', capital: 'Moscow' }, {country: 'Saudi Arabia', capital: 'Riyadh' }, {country: 'Singapore', capital: 'Singapore' },
//
//     {country: 'Sri Lanka', capital: 'Sri Jayawarde-<br>nepura Kotte' }, {country: 'Syria', capital: 'Damascus' }, {country: 'Taiwan', capital: 'Taipei' },
//     {country: 'Tajikistan', capital: 'Dushanbe' }, {country: 'Thailand', capital: 'Bangkok' }, {country: 'Tibet (PR China)', capital: 'Lhasa' },
//     {country: 'Timor Leste', capital: 'Dili' }, {country: 'Turkey', capital: 'Ankara' }, {country: 'Turkmenistan', capital: 'Ashgabat' },
//
//     {country: 'United Arab Emirates', capital: 'Abu Dhabi' }, {country: 'Uzbekistan', capital: 'Tashkent' }, {country: 'Viet Nam', capital: 'Hanoi' },
//     {country: 'Yemen', capital: 'Sanaa' }, {country: '', capital: '' }, {country: '', capital: '' },
//     {country: '', capital: '' }, {country: '', capital: '' }, {country: '', capital: '' }];

// let capitalsUSA = [{country: 'Alabama<br>(AL)', capital: 'Montgomery' }, {country: 'Alaska<br>(AK)', capital: 'Juneau' }, {country: 'Arizona<br>(AZ)', capital: 'Phoenix' },
//     {country: 'Arkansas<br>(AR)', capital: 'Little Rock' }, {country: 'California<br>(CA)', capital: 'Sacramento' }, {country: 'Colorado<br>(CO)', capital: 'Denver' },
//     {country: 'Connecticut<br>(CT)', capital: 'Hartford' }, {country: 'Delaware<br>(DE)', capital: 'Dover' }, {country: 'Florida<br>(FL)', capital: 'Tallahassee' },
//
//     {country: 'Georgia<br>(GA)', capital: 'Atlanta' }, {country: 'Hawaii<br>(HI)', capital: 'Honolulu' }, {country: 'Idaho<br>(ID)', capital: 'Boise' },
//     {country: 'Illinois<br>(IL)', capital: 'Springfield' }, {country: 'Indiana<br>(IN)', capital: 'Indianapolis' }, {country: 'Iowa<br>(IA)', capital: 'Des Moines' },
//     {country: 'Kansas<br>(KS)', capital: 'Topeka' }, {country: 'Kentucky<br>(KY)', capital: 'Frankfort' }, {country: 'Louisiana<br>(LA)', capital: 'Baton Rouge' },
//
//     {country: 'Maine<br>(ME)', capital: 'Augusta' }, {country: 'Maryland<br>(MD)', capital: 'Annapolis' }, {country: 'Massa-<br>chusetts<br>(MA)', capital: 'Boston' },
//     {country: 'Michigan<br>(MI)', capital: 'Lansing' }, {country: 'Minnesota<br>(MN)', capital: 'St. Paul' }, {country: 'Mississippi<br>(MS)', capital: 'Jackson' },
//     {country: 'Missouri<br>(MO)', capital: 'Jefferson<br>City' }, {country: 'Montana<br>(MT)', capital: 'Helena' }, {country: 'Nebraska<br>(NE)', capital: 'Lincoln' },
//
//     {country: 'Nevada<br>(NV)', capital: 'Carson City' }, {country: 'New Hampshire<br>(NH)', capital: 'Concord' }, {country: 'New Jersey<br>(NJ)', capital: 'Trenton' },
//     {country: 'New Mexico<br>(NM)', capital: 'Santa Fe' }, {country: 'New York<br>(NY)', capital: 'Albany' }, {country: 'North<br>Carolina<br>(NC)', capital: 'Raleigh' },
//     {country: 'North<br>Dakota<br>(ND)', capital: 'Bismarck' }, {country: 'Ohio<br>(OH)', capital: 'Columbus' }, {country: 'Oklahoma<br>(OK)', capital: 'Oklahoma City' },
//
//     {country: 'Oregon<br>(OR)', capital: 'Salem' }, {country: 'Pennsylvania<br>(PA)', capital: 'Harrisburg' }, {country: 'Rhode Island<br>(RI)', capital: 'Providence' },
//     {country: 'South<br>Carolina<br>(SC)', capital: 'Columbia' }, {country: 'South<br>Dakota<br>(SD)', capital: 'Pierre' }, {country: 'Tennessee<br>(TN)', capital: 'Nashville' },
//     {country: 'Texas<br>(TX)', capital: 'Austin' }, {country: 'Utah<br>(UT)', capital: 'Salt Lake<br>City' }, {country: 'Vermont<br>(VT)', capital: 'Montpelier' },
//
//     {country: 'Virginia<br>(VA)', capital: 'Richmond' }, {country: 'Washington<br>(WA)', capital: 'Olympia' }, {country: 'West Virginia<br>(WV)', capital: 'Charleston' },
//     {country: 'Wisconsin<br>(WI)', capital: 'Madison' }, {country: 'Wyoming<br>(WY)', capital: 'Cheyenne' }, {country: '', capital: '' },
//     {country: '', capital: '' }, {country: '', capital: '' }, {country: '', capital: '' }];
//
// packs.set('USA', capitalsUSA);
// console.log(JSON.stringify({...capitalsUSA}));

let curPack = [];
let curPageNumber = 0;

let pagesAmount = 0;

let curPage = document.querySelector('.cur-page');
let prevPage = document.querySelector('.prev-page');
let nextPage = document.querySelector('.next-page');
let pageHTML = '';

const pagesContainer = document.getElementById('pages-container')
const rightButton = document.getElementById('right-button');
const leftButton = document.getElementById('left-button');

const pageNav = document.getElementById('dots');
const pageNavMap = new Map;

rightButton.addEventListener('click', () => {
    if (leftButton.hasAttribute('disabled')) {
        leftButton.removeAttribute('disabled');
    }
    if (curPageNumber !== pagesAmount - 1) {
        pagesContainer.classList.toggle('slide-left');
        ++curPageNumber;
        selectDot(curPageNumber)
        sleep(1000).then(() => {
            renderPages();
            pagesContainer.classList.toggle('slide-left');
        });
    }
    if (curPageNumber === pagesAmount - 1) {
        rightButton.setAttribute('disabled', 'disabled');
    }
});

leftButton.addEventListener('click', () => {
    if (rightButton.hasAttribute('disabled')) {
        rightButton.removeAttribute('disabled');
    }
    if (curPageNumber !== 0) {
        pagesContainer.classList.toggle('slide-right');
        --curPageNumber;
        selectDot(curPageNumber)
        sleep(1000).then(() => {
            renderPages();
            pagesContainer.classList.toggle('slide-right');
        });
    }
    if (!curPageNumber) {
        leftButton.setAttribute('disabled', 'disabled');
    }
});

function reqListener () {
    let jsonObj = this.response;
    let capitals = [];
    for (const pack of packsList) {
        for (const i in jsonObj[pack]) {
            capitals[i] = jsonObj[pack][i];
        }
        packs.set(pack, capitals);
        capitals = [];
    }

    curPack = packs.get(packsList[0]);
    pagesAmount = Number(curPack.length / 9);

    renderPages();
    renderPack();
}

const oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "example.json");
oReq.responseType = 'json';
oReq.send();

function selectDot(page) {
    document.querySelector('.selected-dot').classList.toggle('selected-dot');
    pageNav.children[page].classList.toggle('selected-dot');
}

function renderPack() {
    pagesAmount = Number(curPack.length / 9);
    curPageNumber = 0;
    leftButton.setAttribute('disabled', 'disabled');

    if (!(pagesAmount - 1)) {
        rightButton.setAttribute('disabled', 'disabled');
    }
    else {
        rightButton.hasAttribute('disabled') ? rightButton.removeAttribute('disabled') : '';
    }

    pageNav.innerHTML = '';
    pageNavMap.clear();

    for (let page = 0; page < pagesAmount; ++page) {
        const dot = document.createElement('span');
        dot.innerHTML = '&bullet;';
        pageNav.appendChild(dot);
        pageNavMap.set(dot, page);
        dot.addEventListener('click', () => {
            const newPageNumber = pageNavMap.get(dot);
            if (curPageNumber !== newPageNumber) {
                let newPageHTML = '';
                for (let it = newPageNumber * 9; it < (newPageNumber + 1) * 9; ++it) {
                    newPageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
                }
                if (newPageNumber > curPageNumber) {
                    nextPage.innerHTML = newPageHTML;
                    curPageNumber = newPageNumber - 1;
                    rightButton.click();
                }
                else {
                    prevPage.innerHTML = newPageHTML;
                    curPageNumber = newPageNumber + 1;
                    leftButton.click();
                }
            }
        })
    }
    pageNav.children[0].classList.toggle('selected-dot');
}

function renderPages() {
    switch (curPageNumber) {
        case 0:
            pageHTML = '';
            for (let it = 0; it < 9; ++it) {
                pageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
            }
            curPage.innerHTML = pageHTML;
            pageHTML = '';
            if (pagesAmount !== 1) {
                for (let it = 9; it < 18; ++it) {
                    pageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
                }
                nextPage.innerHTML = pageHTML;
            } else {
                nextPage.innerHTML = '';
            }
            prevPage.innerHTML = '';
            break;
        case pagesAmount - 1:
            pageHTML = '';
            for (let it = (pagesAmount - 1) * 9; it < pagesAmount * 9; ++it) {
                pageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
            }
            curPage.innerHTML = pageHTML;
            pageHTML = '';
            for (let it = (pagesAmount - 2) * 9; it < (pagesAmount - 1) * 9; ++it) {
                pageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
            }
            prevPage.innerHTML = pageHTML;
            nextPage.innerHTML = '';
            break;
        default:
            pageHTML = '';
            for (let it = curPageNumber * 9; it < (curPageNumber + 1) * 9; ++it) {
                pageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
            }
            curPage.innerHTML = pageHTML;
            pageHTML = '';
            for (let it = (curPageNumber - 1) * 9; it < curPageNumber * 9; ++it) {
                pageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
            }
            prevPage.innerHTML = pageHTML;
            pageHTML = '';
            for (let it = (curPageNumber + 1) * 9; it < (curPageNumber + 2) * 9; ++it) {
                pageHTML += `<div class="card-container">
                <div class="card">
                    <div class="front"><p>${curPack[it].country}</p></div>
                    <div class="back"><p>${curPack[it].capital}</p></div>
                </div>
                </div>`
            }
            nextPage.innerHTML = pageHTML;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const packNav = document.getElementById('pack-nav');
const packList = document.querySelector('.select-pack');
let selectedPackName = packsList[0];
for (let packIt = 0; packIt < packList.children.length; ++packIt) {
    packList.children[packIt].addEventListener('click', () => {
        if (selectedPackName !== packList.children[packIt].innerText) {
            selectedPackName = packList.children[packIt].innerText;
            packNav.firstElementChild.textContent = selectedPackName;
            packList.firstElementChild.textContent = selectedPackName;
            sleep(500).then(() => {
                document.querySelector('.selected-pack').classList.remove('selected-pack');
                packList.children[packIt].classList.add('selected-pack');
            });
            curPack = packs.get(selectedPackName);
            renderPack();
            renderPages();
        }
    })
}
