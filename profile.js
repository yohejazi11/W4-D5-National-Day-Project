let postApi="https://66f0eef8f2a8bce81be7056d.mockapi.io/posts";

let userData=sessionStorage.getItem('userID');
let postsConainer=document.getElementById('postsConainer')

if(!userData || userData.trim() === ""){
    window.location.href="index.html"
}
fetch(postApi)
.then(response => response.json())
.then(data => {
    data.forEach(element => {

        let postBox=document.createElement('div')
        postBox.setAttribute('class','post-box')
        let postImage=document.createElement('img')
        postImage.setAttribute('class','post-img')

        let postContent=document.createElement('p')
        postContent.setAttribute('class','post-text')

        postImage.src=element.image;
        postContent.textContent=element.text;

        postBox.appendChild(postImage)
        postBox.appendChild(postContent)
        postsConainer.appendChild(postBox)
    });
})

let addPostBTN=document.getElementById('addPostBTN')
let addPostForm=document.getElementById('addPostDiv')

addPostBTN.addEventListener("click",()=>{
    addPostForm.classList.toggle('show-sign-form');

})

let postBTN=document.getElementById('postBTN')
let postContent=document.getElementById('postText')
let postImage=document.getElementById('postImage')

postBTN.addEventListener("click",()=>{
    fetch(postApi,{
        method:'POST',
        body:JSON.stringify({
            user:userData[0].id,
            text:postContent.value,
            image:postImage.value,

        }),
        headers:{"Content-Type":"application/json"}
    }).then(respone =>respone.json())
    addPostForm.classList.toggle('show-sign-form');

})