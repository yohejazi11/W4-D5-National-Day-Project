let postApi="https://66f0eef8f2a8bce81be7056d.mockapi.io/posts";

let postsConainer=document.getElementById('postsConainer')

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