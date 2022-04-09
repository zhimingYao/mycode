var url = location.href;
console.log(url);
var obj = query(url);
var content = document.querySelector(".content");
var data = shopdata;
console.log(data);
detail(data);
function query(url) {
    console.log(url);
    var prame = {}
    var index = url.indexOf('?');
    var sub_url = url.slice(index + 1);
    var arr = sub_url.split('&');
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        let index = arr[i].indexOf('=');
        var key = arr[i].slice(0, index);
        var value = arr[i].slice(index + 1);
        console.log(key, value);
        prame[key] = value;
    }
    return prame
}

function detail(data) {
    var htmlStr = ``;
    for (var i = 0; i < data.length; i++) {
        if (data[i].Id == obj.Id) {
            var shop = data[i];
            console.log(obj);
            htmlStr = `
                <button id="back">返回</button>
                <h3 id="shopClass">商品详情</h3>
                <div class="shopList clearfix">
                    <div class="item-img left">
                    <img src="${shop.img_list_url}" alt="">
                    </div>
                    <div class="detail">
                     <h4>${shop.title}</h4>
                     <p>${shop.price}￥</p>
                    <button id="shopCar">加入购物车</button>
                    </div>
                </div>`;
            break;
        }
    }
    content.innerHTML = htmlStr;
}

/* 返回上一页 */
back.onclick = function () {
    history.back()
}

/* 放大镜 */


/* 加入购物车 */
shopCar.onclick = function () {
    function get(key) {
        return localStorage.getItem(key)
    }
    var token = get('token');
    permission(token)

    function permission(token) {
        if (!token) {
            alert('未登录，请去登录');
            location.href = '../HTML/login.html';
            return
        } else {
            console.log('已经登陆');
            console.log('获取购物车列表数据');
            var shopCarArr = JSON.parse(localStorage.getItem('shopCar')) ||[];
            for (let i = 0; i < data.length; i++) {
                if (data[i].Id == obj.Id) {
                    shopCarArr.push(data[i])
                    localStorage.setItem('shopCar',JSON.stringify(shopCarArr))
                    break;
                }
            }
            location.href = "../HTML/shopCar.html"
        }
    }
}
