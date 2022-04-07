/* 选中效果 */
var lists = document.querySelectorAll('.h-list>ul>li');
// console.log(lists);

option(lists, 'active')
function option(lists,str) {
    for (let i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click', function (e) {
            clear(lists);
            lists[i].className = str;
        })
    }
    function clear(els) {
        for (let i = 0; i < els.length; i++) {
            els[i].className = '';
        }
    }
}

/* 轮播效果 */
/* 轮播图 */
var img_box = document.querySelector('.img-box');
var imgs = document.querySelectorAll('.img-box>ul>li>a>img');
var spans = document.querySelectorAll('.list-item>span');
var imgshow = document.querySelector('.imgshow');
// console.log(imgshow);
var width = parseInt(getComputedStyle(imgs[0], null).width);
var move = 0;

var timer = setInterval(() => {
    move -= width;
    if (move < -2000) {
        move = 0;
    }
    if (move > 0) {
        move = 0;
    }
    fun2(move);
    // console.log(move);
    img_box.style.left = move + 'px';
}, 3000);


function fun2(move) {
    if (move == 0) {
        imgs[0].style.opacity = '1';
        imgs[1].style.opacity = '0';
        imgs[2].style.opacity = '0';
        spans[0].style.backgroundColor = 'white';
        spans[1].style.backgroundColor = '';
        spans[2].style.backgroundColor = '';
    } else if (move == -1000) {
        imgs[0].style.opacity = '0';
        imgs[1].style.opacity = '1';
        imgs[2].style.opacity = '0';
        spans[0].style.backgroundColor = '';
        spans[1].style.backgroundColor = 'white';
        spans[2].style.backgroundColor = '';
    } else if (move == -2000) {
        imgs[0].style.opacity = '0';
        imgs[1].style.opacity = '0';
        imgs[2].style.opacity = '1';
        spans[0].style.backgroundColor = '';
        spans[1].style.backgroundColor = '';
        spans[2].style.backgroundColor = 'white';
    }

}

var imglast = document.querySelector('.imglast');
var imgnext = document.querySelector('.imgnext');
// console.log(imglast, imgnext);

imglast.addEventListener('click', function (e) {
    move += width;
    if (move < -2000) {
        move = 0;
    }
    if (move > 0) {
        move = -2000;
    }
    fun2(move);
    console.log(move);
    img_box.style.left = move + 'px';
});
imgnext.addEventListener('click', function (e) {
    move -= width;
    if (move < -2000) {
        move = 0;
    }
    if (move > 0) {
        move = 0;
    }
    fun2(move);
    console.log(move);
    img_box.style.left = move + 'px';
})

imgshow.addEventListener('mouseover', function (e) {
    clearInterval(timer);
    imglast.style.display = 'block';
    imgnext.style.display = 'block';
})
imgshow.addEventListener('mouseout', function (e) {
    imglast.style.display = 'none';
    imgnext.style.display = 'none';
    timer = setInterval(() => {
        move -= width;
        if (move < -2000) {
            move = 0;
        }
        if (move > 0) {
            move = 0;
        }
        fun2(move);
        console.log(move);
        img_box.style.left = move + 'px';
    }, 3000);
})

/* 触底加载更多 */
var shopClass = ['食品类'];
request()
function request() {
    var data;
    var xhr = new XMLHttpRequest();
    var url = 'http://49.232.47.192:9528/api/detail?goodId=124'
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // console.log(xhr);
            // console.log(xhr.responseText);
            // data = JSON.parse(xhr.responseText);
            data = shopdata
            console.log(data,shopdata);
            render(data);
        }
    }
}

var content = document.querySelector('.content');
var shopList = document.querySelector('.shopList');
// console.log(content);
function render(data) {
    var htmlStr = `<h3 id="shopClass">${shopClass[0]}</h3>
        <div class="shopList clearfix">`;
    for (let i = 0; i < data.length; i++) {
        htmlStr += `
        <div class="item left">
            <img src="${data[i].img_list_url}" alt="">
            <h4>${data[i].title}</h4>
            <p>${data[i].price}￥</p>
            <span></span>
        </div>`;
    }
    htmlStr +=`</div>`;
    content.innerHTML += htmlStr;
}
var page = document.querySelector('body');
window.onscroll = function (e) {
    console.log(window.innerHeight, scrollY, page.scrollHeight);
    var height = Math.floor(window.innerHeight + scrollY)+10 ;
    var total = page.scrollHeight;
    if(height >= total ){
        request();
    }
}

/* 回到顶部动画 */
var flag = true;
back.onclick = function () {
    var move = Math.floor(scrollY);
    console.log(move);
    var timer = null;
    if (move > 0 && flag) {
        flag = false;
        timer = setInterval(function () {
            move -= 10;
            scrollTo(0,move);
            if (move <= 0) {
                move = 0;
                scrollTo(0, move);
                clearInterval(timer);
                flag = true;
            }
        },3)
    }
}

/* 导航栏 */
var bars = document.querySelectorAll('.bar>ul>li');
// console.log(bars);
option(bars, 'active1');
