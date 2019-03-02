$(function () {
    var basePath = location.origin;
    var libs = {};
    var SID = new Date().getTime();
    console.log("-----init---index----1----", basePath);
    console.log("-----init---index----2----", libs);
    //配置sea.js
    seajs.config({
        base: basePath,
        alias: libs,
        map: [[/^(.*\.(?:css|js))(?:.*)$/i, '$1?v=' + (SID)]]
    });

    //载入#后面的页面
    var path = location.hash;
    path = path.substring(1);
    console.log(location);
    debugger;
    SY.loadIndexPage(path);
});