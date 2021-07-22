const views = document.getElementById('viewCount');
const users = document.getElementById('userCount');

const viewViewsCount = () =>{
    fetch('https://api.countapi.xyz/get/mysite.com/sanhita')
    .then(res=>res.json())
    .then(res=>{
        views.innerHTML=res.value;
    })
}

viewViewsCount();

const viewUserCount = () =>{
    fetch('https://api.countapi.xyz/get/bloggingUsers/sanhita')
    .then(res=>res.json())
    .then(res=>{
        users.innerHTML=res.value;
    })
}

viewUserCount();