/* 实现密码验证 */
var btn = document.querySelector('#btn');
var user = document.querySelector('#username');
var psd = document.querySelector('#passward');

var userReg = /\w{5,12}/;
var psdReg = /\w{6,8}/
// console.log(userReg.test('Asdfsa'));
btn.addEventListener('click', function (e) {
    // console.log(user.value,psd.value);
    if (!userReg.test(user.value)) {
        userError.innerHTML = '请输入6-12位的数字字母下划线用户名';
        return
    }
    if (!psdReg.test(psd.value)) {
        psdError.innerHTML = '请输入6-12位的数字字母下划线';
        return
    }
    console.log('注册成功');
    // window.open('../HTML/login.html', target = '_self')
    lacation.href = '../HTML/login.html'


})