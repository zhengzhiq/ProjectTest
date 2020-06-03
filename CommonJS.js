function requestMethod(par1, par2, par3, callback) {

    //第一步:创建一个网络请求对象(http),去服务端要数据,接收服务端数据
    var xhr = new XMLHttpRequest();

    //第二步:与服务端建立连接(get/post)请求方式,连接哪个服务器,用连接这个服务器的哪个接口
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);
    //设置请求头,告诉服务器咱们传递过去的数据是以表单的形式传递过去的
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    //第三步:向服务器发送请求(传参)
    xhr.send(par3);

    //第四步:接收服务器返回的数据
    xhr.onreadystatechange = function () {
        //xhr.readyState == 4 代表数据请求完成
        //xhr.status == 200 代表数据成功返回
        if (xhr.readyState == 4 && xhr.status == 200) {
            //responseText里面包含了服务端返回的数据
            var responseData = JSON.parse(xhr.responseText);
            var obj = responseData.data;

            callback(obj, xhr.responseText);
        }
    }

}



