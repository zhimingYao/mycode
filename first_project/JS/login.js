/* 实现密码验证 */
var btn = document.querySelector('#btn');
var user = document.querySelector('#username');
var psd = document.querySelector('#passward');

var userReg = /\w{6,12}/;
var psdReg = /\w{6,8}/
// console.log(userReg.test('Asdfsa'));
btn.addEventListener('click',function (e) {
    // console.log(user.value,psd.value);
    if (!userReg.test(user.value)) {
        userError.innerHTML = '请输入大写字母开头6-12位的数字字母下划线用户名';
        return
    }
    if (!psdReg.test(psd.value)) {
        psdError.innerHTML = '请输入6-8位的数字字母下划线密码';
        return
    }
    console.log('输入正确');
    // window.open('../HTML/index.html',target='_self')
    location.href = '../HTML/index1.html';
    localStorage.setItem('token',123456)
})