/*  */
var shopCarArr = JSON.parse(localStorage.getItem('shopCar'));
console.log(shopCarArr);
render(shopCarArr);
function render(arr) {
    var option = document.querySelector('.option');
    var htmlStr = '';
    for (let i = 0; i < arr.length; i++) {
        htmlStr += `
            <div class="item">
                <input type="checkbox" name="onecheck" id="onecheck">
                <img src="${arr[i].img_list_url}" alt="">
                <div class="info">
                    <h5>${arr[i].title}</h5>
                    <p>${arr[i].price}￥</p>
                </div>
                <button>删除</button>
            </div>`;
    }
    option.innerHTML = htmlStr;
    del(shopCarArr);
}

/* 全选 */
// console.log(allcheck.checked);
// allcheck.checked = true;
var onechecks = document.querySelectorAll('#onecheck');
option_all()
function option_all() {
    var flag = true
    allcheck.addEventListener('click', function () {
        onechecks = document.querySelectorAll('#onecheck');
        if (allcheck.checked = true && flag) {
            for (let i = 0; i < onechecks.length; i++) {
                onechecks[i].checked = allcheck.checked;
            }
            flag = false;
        } else {
            for (let i = 0; i < onechecks.length; i++) {
                onechecks[i].checked = allcheck.checked;
            }
            flag = true;
        }
        count(onechecks);
    })
}


/* 单选事件 */
option_one()
function option_one() {
    onechecks = document.querySelectorAll('#onecheck');
    for (let i = 0; i < onechecks.length; i++) {
        onechecks[i].addEventListener('click', function () {
            count(onechecks);
            console.log('asdfaf');
        })
    }
}


/* 计价 */
function count() {
    onechecks = document.querySelectorAll('#onecheck');
    var count = 0;
    var prices = document.querySelectorAll('.info>p')
    for (let i = 0; i < onechecks.length; i++) {
        if (onechecks[i].checked == true) {
            var price = parseInt(prices[i].innerHTML);
            count += price;
        }
    }
    total.innerHTML = count;
}
/* 删除 */

function del(arr) {
    var dels = document.querySelectorAll('.item>button');
    console.log(dels);
    for (let i = 0; i < dels.length; i++) {
        dels[i].addEventListener('click', function (e) {
            arr.splice(i, i + 1);
            shopCarArr = arr;
            localStorage.setItem('shopCar', JSON.stringify(shopCarArr))
            render(shopCarArr);
        })
    }
    count()
}
/* 返回 */
back.onclick = function () {
    // location.href = '../HTML/index.html'
    history.back()
    history.back()
}