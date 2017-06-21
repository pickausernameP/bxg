

// require(["study/test3/mytest1/js/1","2"],(function (a, b) {
//         alert("main");
//      console.log(a+b)
// }));
require.config({
    baseUrl:"/",
    paths:{
        "1":"test3/mytest1/js/1",
        "2":"test3/mytest1/js/2",
    }
});
require(["1","2"],function (a,b) {
    alert(a+b)
})