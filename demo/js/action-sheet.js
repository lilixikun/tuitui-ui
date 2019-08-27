// 弹出菜单
if (document.querySelector('#js-show')) {
    document.querySelector('#js-show').onclick = (e) => {
        document.querySelector('.tt-action-sheet').classList.add('show');
    }
}

// 收回菜单
if (document.querySelector('#js-close')) {
    document.querySelector('#js-close').onclick = (e) => {
        document.querySelector('.tt-action-sheet').classList.remove('show');
    }
}
