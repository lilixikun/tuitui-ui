// 显示加载中的Toast
document.querySelector('#js-show-toast-loading').onclick = (e) => {
    let toastEle = document.querySelector('#js-toast-loading');
    toastEle.classList.add('show');
    setTimeout(() => {
        toastEle.classList.remove('show');
    }, 2e3);
};
// 显示操作成功的Toast
document.querySelector('#js-show-toast-success').onclick = (e) => {
    let toastEle = document.querySelector('#js-toast-success');
    toastEle.classList.add('show');
    setTimeout(() => {
        toastEle.classList.remove('show');
    }, 2e3);
};