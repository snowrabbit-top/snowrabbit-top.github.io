import createXHR from "../tool/xhr";
import queryParams from "../tool/queryParams";
// 排名
let trending = document.querySelector("ul[class^=Trending_items]").innerHTML;
// 代币标题
let tokenTitle = document.querySelector("div.is-flex-grow-1.is-flex.is-align-items-center.single-title").innerHTML;
// 分享图标
let shareIcon = document.querySelector("div.is-flex.mt-1.mb-2").innerHTML;
// 描述
let describe = document.querySelector("div.ant-typography").innerHTML;
// 详情表格
let details = document.querySelector("div.table-container.mt-6").innerHTML;
// 状态
let state = document.querySelector("div.column.is-flex-grow-1 div.ant-card.ant-card-bordered div.ant-card-body div.table-container").innerHTML;
// 饼状图
let pieChart = document.querySelector("div[class^=TokenMetric_root]").firstElementChild.toDataURL("image/png");
// 评论
let layout = document.getElementById("layout").innerHTML;
// 倒计时
let countdown = document.querySelector("form div.has-text-centered div.has-text-centered strong").innerHTML;
// 上限
let upperLimit = document.querySelector("form div.pb-4 div.is-flex.is-align-items-center.is-size-7 div.is-flex-grow-1.has-text-right").innerHTML;

let data = {
    trending,
    tokenTitle,
    shareIcon,
    describe,
    details,
    state,
    pieChart,
    layout,
    countdown,
    upperLimit,
};
// XHLHttpRequest对象 (第一步)
let xhr = createXHR();
// 响应XMLHttpRequest对象函数状态变化的函数,onreadystatechange在readystatuschange在readystatechange属性发生改变时触发(第三步)
xhr.onreadystatechange = () => {
    switch (xhr.readyState) {
        case 0:
            console.log("open方法已经调用，但是send方法没有调用");
            break;
        case 1:
            console.log("send方法已经调用，但是服务器没有返回数据");
            break;
        case 2:
            console.log("send方法已经调用，服务器开始返回数据");
            break;
        case 3:
            console.log("服务器已经返回部分数据");
            break;
        case 4:
            // 异步调用成功,响应内容解析完成,可以在客户端调用
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                console.log("异步调用成功,响应内容解析完成,可以在客户端调用");
                // 获得服务器返回的数据(第五步)
                console.log(xhr.responseText);
                console.log(xhr.response);
                console.log(xhr.responseText);
                console.log(xhr.responseURL);
                console.log(xhr.status);
                console.log(xhr.getAllResponseHeaders);
            }
            break;
    }
};
// 创建请求 (第二步)
xhr.open("post", "https://www.baidu.com", true);
// 处理数据
// let query = queryParams(data);
// 发送请求(第四步)
xhr.send(query);
