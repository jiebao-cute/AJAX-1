let n = 1;
getPage.onclick=()=>{
    const request = new XMLHttpRequest();
    request.open("GET",`/page${n+1}`)
    request.onreadystatechange=()=>{
     if(request.readyState===4 ){
         if(request.status>=200 && request.status<300){
          const array =JSON.parse(request.response);
          array.forEach(item => {
              const li = document.createElement('li');
              li.textContent = item.id;
              xxx.appendChild(li);
          });
          n +=1;
          }
     }
    }
    request.send();

}




getJSON.onclick=()=>{
   const request = new XMLHttpRequest();
   request.open("GET","/5.json")
   request.onreadystatechange=()=>{
    if(request.readyState===4 ){
        if(request.status>=200 && request.status<300){
        const object = JSON.parse(request.response)
         myName.textContent = object.name
         console.log(object);
         }
    }
   }
   request.send();
}


getXML.onclick=()=>{
 const request = new XMLHttpRequest();
 request.open("GET","/4.xml")
 request.onreadystatechange=()=>{
   if(request.readyState===4 ){
       if(request.status>=200 && request.status<300){
        const dom =request.responseXML;
        const text = dom.getElementsByTagName('warning')[0].textContent  
        console.log(text.trim());
        }
   }
}
   request.send();
}


getHTML.onclick=()=>{
const request = new XMLHttpRequest();
request.open("GET","/3.html")
request.onload=()=>{
    //创建div
    const div = document.createElement('div')
    //填写div内容
    div.innerHTML = request.response
    //把div插到body里
    document.body.appendChild(div)
}
request.onerror=()=>{}
request.send();
}


getJS.onclick=()=>{
  const request = new XMLHttpRequest();
  request.open("GET","/2.js");
  request.onload = () =>{
    //创建script标签
    const script = document.createElement('script')
    //填写标签内容
    script.innerHTML = request.response
    //把标签插到body里
    document.body.appendChild(script)
  }
  request.onerror=()=>{
  }
  request.send();
}


// getCSS.onclick =()=>{
//     //创建httpRequest对象
//     const request = new XMLHttpRequest();
//     //调用对象的open方法
//     request.open("GET","/style.css");
//     //监听对象的onload&onerror事件
//     request.onload = ()=>{
//         //让style生效
//         console.log('request.response 是')
//         console.log(request.response)
//         //创建style标签
//         const style = document.createElement('style')
//         //填写style标签内容
//         style.innerHTML = request.response
//         //把style标签插到header里面
//         document.head.appendChild(style)
//         console.log('成功');
//     }
//     request.onerror = ()=>{
//         console.log('失败渣渣');
//     }
//     //调用对象的send方法（发送请求）
//     request.send();
// }

getCSS.onclick =()=>{
        const request = new XMLHttpRequest();
        request.open("GET","/style.css");//readyState = 1
        request.onreadystatechange=()=>{
            //下载完成，但是不知道是成功 2XX还是失败 4XX 5XX 
            if(request.readyState===4){
                if(request.status>=200 && request.status<300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
                }else {
                    alert('加载CSS失败')
                }
            }
        }    
        request.send();//readyState = 2
    }
    