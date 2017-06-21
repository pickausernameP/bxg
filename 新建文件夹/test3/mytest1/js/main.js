

// require(["study/test3/mytest1/js/1","2"],(function (a, b) {
//         alert("main");
//      console.log(a+b)
// }));
require.config({
    baseUrl:"/",
    paths:{
        "1":"test3/mytest1/js/1",
        "2":"test3/mytest1/js/2",
        "jquery":"test3/mytest1/js/jquery/jquery",
        "mm":"test3/mytest1/js/mm"
    },
    shim:{
        "mm":{
            exports:"test"
        }
    }
});
require(["1","2","jquery","mm"],function (a,b,$,mm) {
    alert(a+b);
    console.log($("p"));
    mm();

})
// require(["m"],function (fn) {
//     console.log(fn);
// })