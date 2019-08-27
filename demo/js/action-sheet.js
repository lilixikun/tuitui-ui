window.onload = function () {
    // 弹出菜单
    document.querySelector('#js-show').onclick = (e) => {
        document.querySelector('.tt-action-sheet').classList.add('show');
    }
    // 收回菜单
    document.querySelector('#js-close').onclick = (e) => {
        document.querySelector('.tt-action-sheet').classList.remove('show');
    }
}