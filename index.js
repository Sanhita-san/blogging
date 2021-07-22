const views = document.getElementById('viewCount');
const users = document.getElementById('userCount');

//updating views count
const updateViewsCount = () =>{
    fetch('https://api.countapi.xyz/update/mysite.com/sanhita/?amount=1')
    .then(res=>res.json())
    .then(res=>{
        views.innerHTML=res.value;
    })
}

updateViewsCount();

const viewUserCount = () =>{
    fetch('https://api.countapi.xyz/get/bloggingUsers/sanhita')
    .then(res=>res.json())
    .then(res=>{
        users.innerHTML=res.value;
    })
}

viewUserCount();

//updating users count
const updateUsersCount = () =>{
    fetch('https://api.countapi.xyz/update/bloggingUsers/sanhita/?amount=1')
    .then(res=>res.json())
    .then(res=>{
        users.innerHTML=res.value;
    })
}
