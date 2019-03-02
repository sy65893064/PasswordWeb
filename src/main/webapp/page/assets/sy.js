//SongY自己的模块组件
var SY = {
    /**
     * 载入页面
     */
    loadPage : function (url, success, error) {
        var xhr = $.ajax({
            url : location.origin + "/" + url,
            data : {},
            type : "get",
            success : success,
            timeout : 8000,
            error : function (data) {
                error && error();
            },
            complete : function(XMLHttpRequest, status) {
                if (status == "timeout") {
                    xhr.abort();
                } else if (status == "0") {
                    console.log("网络连接异常!请检查您的网络！");
                } else if (status == "404") {
                    console.log("请求的网页不存在！");
                }
            }
        });
    },

    /**
     * 载入页面到#indexPage
     */
    loadIndexPage : function (url, func) {
        var loadingPage = $("#indexPage");
        var indexPage = $('<div data-page="index"></div>');
        this.loadPage(url, function (html) {
            indexPage.html(html);
            indexPage.attr("data-page", url);
            func && func();
        }, function () {
            func && func();
        });
    }
};