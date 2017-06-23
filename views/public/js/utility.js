/**
 * Created by why on 2017/6/22.
 */
define(function (){
    var obj = {
        queryString:function (){
            var search = location.search.slice(1);
            var searchArr = search.split('&');
            console.log(searchArr);
            var o = {}; //
            for (var i = 0; i < searchArr.length; i++) {
                var temp = searchArr[i].split('=');
                o[temp[0]] = temp[1];
               console.log(o)
            }
            return o;
        }

    }
    return obj;

})
