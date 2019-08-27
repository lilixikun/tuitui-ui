var li = document.querySelectorAll('.tt-navbar .navbar-item');
for (var i = 0; i < li.length; i++)
    li[i].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            li[i].classList.remove("active");
            this.classList.add('active');
        }
    }
