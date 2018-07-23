var urlarray = ['http://loc.gov/rr/print/list/images/GBung061732pt.gif',
    'http://loc.gov/rr/print/list/images/GCape074130pt.gif',
    'http://loc.gov/rr/print/list/images/GCourt003193pt.gif',
    'http://loc.gov/rr/print/list/images/GCovered065570pt.gif',
    'http://loc.gov/rr/print/list/images/GFLWright570317ct.gif',
    'http://loc.gov/rr/print/list/images/GSaltbox023811pt.gif',
    'http://loc.gov/rr/print/list/images/GTimber00001.gif',
    'http://loc.gov/rr/print/list/images/GSlavery3a17639t.gif',
    'http://loc.gov/rr/print/list/images/GAACW4a40237t.gif',
    'http://loc.gov/rr/print/list/images/Lincoln3b49830sm.jpg',
    'http://loc.gov/rr/print/list/images/GCColumbus3b49587t.gif',
    'http://loc.gov/rr/print/list/images/CivilRights03130t.gif',
    'http://loc.gov/rr/print/list/images/Prohib3c23257.jpg',
    'http://loc.gov/rr/print/list/images/GEllis3a14957t.gif',
    'http://loc.gov/rr/print/list/images/GFSAPop8b14845t.gif',
    'http://loc.gov/rr/print/list/images/GFSAStaff00250t.gif',
    'http://loc.gov/rr/print/list/images/GFSAStaff00250t.gif',
    'http://loc.gov/rr/print/list/images/GFSADisc00209t.gif',
    'http://loc.gov/rr/print/list/images/paHistEventsm.jpg',
    'http://loc.gov/rr/print/list/images/GStatueoL3b50383t.gif',
    'http://loc.gov/rr/print/list/images/Twenties3b45868t.gif',
    'http://loc.gov/rr/print/list/images/GWashSites3b52595t.gif',
    'http://loc.gov/rr/print/list/images/GCWWomen3a06712t.gif',
    'http://loc.gov/rr/print/list/images/GWomenSuff3a24586t.gif',
    'http://loc.gov/rr/print/list/images/War1812-03275-150.jpg',
    'http://loc.gov/rr/print/list/images/GRiveter1a35371.jpg',
    'http://loc.gov/rr/print/list/images/GAEarhart3c12514t.gif',
    'http://loc.gov/rr/print/list/images/CWJemison4a40928t.gif',
    'http://loc.gov/rr/print/list/images/GFamous3g02566.jpg',
    'http://loc.gov/rr/print/list/images/GFirstL3a07287t.gif',
    'http://loc.gov/rr/print/list/images/Abe_banner2150.jpg',
    'http://loc.gov/rr/print/list/images/GFSAPhotog00691t.gif',
    'http://loc.gov/rr/print/list/images/Washington3a09915.jpg',
    'http://loc.gov/rr/print/list/images/bryan_crop.jpg',
    'http://loc.gov/rr/print/list/images/GAAActivists01263t.gif',
    'http://loc.gov/rr/print/list/images/Adams3a53276.jpg',
    'http://loc.gov/rr/print/list/images/CollMontage.jpg',
    'http://loc.gov/rr/print/list/images/GVarStage3g03277t.gif',
    'http://loc.gov/rr/print/list/images/GConserv3b52984t.gif',
    'http://loc.gov/rr/print/list/images/GBaseball00048t.gif',
    'http://loc.gov/rr/print/list/images/GInaug02887t.gif'
];

var ul = document.createElement('ul');
document.body.appendChild(ul);

for (var i = 0; i < urlarray.length; i++) {
    var li = document.createElement('li');

    var img = document.createElement('img');
    img.className = 'slow';
    img.setAttribute('src', '');
    img.setAttribute('data-src', urlarray[i]);

    li.appendChild(img);
    ul.appendChild(li);
}

window.onscroll = function(event) {
    imageLoad();
};

function imageLoad() {
    var slowimages = document.getElementsByClassName('slow');
    for(var i = 0; i < slowimages.length; i++) {
        if(elementInViewport(slowimages[i])) {
            slowimages[i].setAttribute('src', slowimages[i].getAttribute('data-src'));
        }
    } 
}

function elementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}