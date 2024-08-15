var ul = document.getElementsByTagName('ul')[0];

var messageList = [
    {
        url: "https://n.sinaimg.cn/sinakd20114/96/w2048h2048/20201020/6d86-kavypmp6058389.jpg",
        username: "Mickey Mouse",
        time: "2024. 1. 20",
        message: "小熊维尼的憨态可掬总是能融化我的心，他的简单快乐提醒我们，生活中的小确幸才是最值得珍惜的。"
    },
    {
        url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.bPWxPOtZiKGVIQRLYtuCJQHaHa?pid=ImgDet&w=474&h=474&rs=1",
        username: "Donald Duck",
        time: "2024. 2. 26",
        message: "唐老鸭的搞笑日常总是让人忍俊不禁，他的乐观精神教会了我们，即使面对挫折也要笑着面对，生活才会更加精彩！"
    },
    {
        url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.gz246S1Io_oAl8zcIMKW_QHaHa?pid=ImgDet&w=474&h=474&rs=1",
        username: "Goofy",
        time: "2024. 3. 30",
        message: "每次看到狮子王辛巴站在荣耀石上，那份坚定与勇敢都深深感染着我。勇往直前，追求自己的梦想，永不放弃！"
    },
    {
        url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.PD3-zHS3QO708sxwC3R3igHaHa?pid=ImgDet&w=474&h=474&rs=1",
        username: "Pluto",
        time: "2024. 4. 7",
        message: "每次看到米奇那永不放弃的笑容，就像是对生活的小小鼓舞，提醒我要保持乐观，勇往直前！"
    },
    {
        url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.nlqkBHQTbQ0qgMKSwCJt9wHaHa?pid=ImgDet&w=474&h=474&rs=1",
        username: "Minnie Mouse",
        time: "2024. 4. 19",
        message: "和唐老鸭一起笑过、恼过，他的憨态可掬总能让我忘记烦恼，感受到简单的快乐最纯粹。"
    },
    {
        url: "https://n.sinaimg.cn/sinakd20114/96/w2048h2048/20201020/8502-kavypmp6058129.jpg",
        username: "Cinderella",
        time: "2024. 5. 4",
        message: "贝拉公主的勇敢与坚持，是我面对挑战时的精神支柱。她教会我，真爱与勇气能战胜一切困难"
    },
    {
        url: "https://n.sinaimg.cn/sinakd20117/96/w2048h2048/20200925/d2df-izrvxmf7248839.jpg",
        username: "Snow White",
        time: "2024. 6. 22",
        message: "每次重温《狮子王》，辛巴的成长历程总让我感慨万千。它教会我，责任与勇气是成长的必经之路。"
    },
    {
        url: "https://n.sinaimg.cn/sinakd20114/96/w2048h2048/20201020/633a-kavypmp6056928.jpg",
        username: "Jasmine",
        time: "2024. 7. 31",
        message: "爱丽丝梦游仙境的奇幻之旅，让我相信，生活中的每一个转角都可能藏着意想不到的惊喜。"
    }
]

var messageInputs = messageList.map(function (e) {
    return `<li>
                <div>
                    <img src="${e.url}">
                    <div>
                        <h3>${e.username}</h3>
                        <span class="time">${e.time}</span>
                    </div>
                </div>
                <p>${e.message}</p>
            </li>`
})
ul.innerHTML = messageInputs.join("");

var infoDiv = document.querySelectorAll('ul > li > div');
var contP = document.querySelectorAll('ul > li > p');

for (var i = 0; i < infoDiv.length; i++) {

    infoDiv[i].setAttribute('class', 'info');
    contP[i].setAttribute('class', 'cont');

}

// 点击按钮发送事件
var sendBtn = document.getElementById('sendBtn');
var count = -1;

sendBtn.onclick = function () {
    var message = document.querySelector('textarea');
    var newLi = document.createElement('li');
    var newBtn = document.createElement('input');

    var time = new Date();
    var year = time.getFullYear(), month = time.getMonth() + 1, day = time.getDate();
    var span = document.getElementsByClassName('time')[count];

    if (message.value != '') {
        count++;
        if (count % 2 === 1) {
            newLi.innerHTML = `<div class="info">
                                    <img src = "https://n.sinaimg.cn/sinakd20114/96/w2048h2048/20201020/6d86-kavypmp6058389.jpg">
                                    <div id="innerbox">
                                        <h3>Visitor</h3>
                                        <span class="time">${year.toString() + ". " + month.toString() + ". " + day.toString()}</span>
                                    </div>
                                </div>
                                <p class="cont">${message.value}</p>`
        } else {
            newLi.innerHTML = `<div class="info">
                                    <img src = "https://tse3-mm.cn.bing.net/th/id/OIP-C.bPWxPOtZiKGVIQRLYtuCJQHaHa?pid=ImgDet&w=474&h=474&rs=1">
                                    <div id="innerbox">
                                        <h3>Visitor</h3>
                                        <span class="time">${year.toString() + ". " + month.toString() + ". " + day.toString()}</span>
                                    </div>
                                </div>
                                <p class="cont">${message.value}</p>`
        }
        newLi.setAttribute('class', 'canBeDelete');
        newBtn.setAttribute('type', 'button');
        newBtn.setAttribute('value', ' delete ');
        newBtn.setAttribute('class', 'deleteBtn');
        newBtn.setAttribute('style', 'position: absolute; right: 10px;');

        newLi.appendChild(newBtn);
        ul.appendChild(newLi);

        message.value = '';

    } else {
        alert('Please input something before sending!');
    }

    var deleteBtn = document.getElementsByClassName('deleteBtn');


    (function (count) {

        var username = document.getElementsByTagName('h3')[count + 8];
        var content = document.getElementsByClassName('cont')[count + 8];

        deleteBtn[count].addEventListener('click', function () {

            var targetLi = [];
            targetLi[count] = deleteBtn[count].parentElement;
            username.innerHTML = 'Anonymous';
            content.innerText = 'This message has been deleted!';
            deleteBtn[count].setAttribute('style', 'display: none');

        })
    }(count));
}

var aSignUp = document.querySelector('nav a');

aSignUp.onclick = function () {

    aSignUp.setAttribute('href', 'signUpPage.html');

}