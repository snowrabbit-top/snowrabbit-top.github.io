/**
 * 封装通用的xhr对象,兼容各个版本
 * @returns {XMLHttpRequest|*}
 */
function createXHR() {
    //判断浏览器是否将XMLHttpRequest作为本地对象实现,针对IE7,火狐,欧朋等
    if (typeof XMLHttpRequest != 'undefined') {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != 'undefined') {
        // 将有可能出现的ActiveXObject版本放在一个数组中
        let versions = ['MSXML.XMLHTTP', 'MSXML2.XMLHTTP.7.0', 'Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
        // 遍历创建XMLHttpRequest对象
        let len = versions.length, xhr;
        for (let i = 0; i < len; i++) {
            try {
                // 创建XMLHttpRequest对象
                xhr = new ActiveXObject(versions[i]);
            } catch (ex) {
                throw new Error('No XHR object available');
            }
        }
        return xhr;
    } else {
        throw new Error('No XHR object available');
    }
}

// // XHLHttpRequest对象 (第一步)
// let xhr = createXHR();
// // 响应XMLHttpRequest对象函数状态变化的函数,onreadystatechange在readystatuschange在readystatechange属性发生改变时触发(第三步)
// xhr.onreadystatechange = () => {
//     switch (xhr.readyState) {
//         case 0:
//             console.log("open方法已经调用，但是send方法没有调用");
//             break;
//         case 1:
//             console.log("send方法已经调用，但是服务器没有返回数据");
//             break;
//         case 2:
//             console.log("send方法已经调用，服务器开始返回数据");
//             break;
//         case 3:
//             console.log("服务器已经返回部分数据");
//             break;
//         case 4:
//             // 异步调用成功,响应内容解析完成,可以在客户端调用
//             if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
//                 console.log("异步调用成功,响应内容解析完成,可以在客户端调用");
//                 // 获得服务器返回的数据(第五步)
//                 console.log(xhr.responseText);
//                 console.log(xhr.response);
//                 console.log(xhr.responseText);
//                 console.log(xhr.responseURL);
//                 console.log(xhr.status);
//                 console.log(xhr.getAllResponseHeaders);
//             }
//             break;
//     }
// };
// // 创建请求 (第二步)
// xhr.open("post", "https://www.baidu.com", true);
//
// // 处理数据
// let formData = new FormData();
// formData.append("trending", trending);
// formData.append("tokenTitle", tokenTitle);
// formData.append("shareIcon", shareIcon);
// formData.append("describe", describe);
// formData.append("details", details);
// formData.append("state", state);
// formData.append("pieChart", pieChart);
// formData.append("layout", layout);
// formData.append("countdown", countdown);
// formData.append("upperLimit", upperLimit);
// // 发送请求(第四步)
// xhr.send(formData);
//
// export default createXHR;

