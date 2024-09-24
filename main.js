
let greyBG = document.getElementById('grayBG');


let lastScrollPosition = 0;
const header = document.getElementById('mainHeader');

let mainNavList=document.getElementById('mainNavList');

window.addEventListener('scroll', function () {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollPosition = currentScrollPosition;
});



let signInNavBTN = document.getElementById('signInNavBTN')
let signInForm = document.getElementById('signInDiv')

let makeAccountBTN = document.getElementById('makeAccountBTN')
let signUpForm = document.getElementById('signUpDiv')

signInNavBTN.addEventListener('click', () => {
    signInForm.classList.toggle('show-sign-form');
    greyBG.classList.toggle('grey-bg-show')
    signUpForm.classList.remove('show-sign-form');
});

makeAccountBTN.addEventListener('click', () => {
    signInForm.classList.remove('show-sign-form');
    greyBG.classList.add('grey-bg-show')
    signUpForm.classList.toggle('show-sign-form');
});

function closeForm(divID) {
    let form = document.getElementById(divID)
    form.classList.remove('show-sign-form')
    greyBG.classList.remove('grey-bg-show')

}

//sign up scripts
let userApi = "https://66f0eef8f2a8bce81be7056d.mockapi.io/user";

let signUpUsername = document.getElementById('signUpUsername')
let firstName = document.getElementById('firstName')
let signUpEmail = document.getElementById('signUpEmail')
let signUpass = document.getElementById('signUpass')

let signUpBTN = document.getElementById('signUpBTN')

signUpBTN.addEventListener("click", () => {

    fetch(userApi, {
        method: 'POST',
        body: JSON.stringify({
            username: signUpUsername.value,
            fname: firstName.value,
            email: signUpEmail.value,
            password: signUpass.value
        }),
        headers: { "Content-Type": "application/json" }
    }).then(respone =>respone.json())
    signUpForm.classList.toggle('show-sign-form');
    signInForm.classList.toggle('show-sign-form');


})

//sign in scripts
let signInEmail=document.getElementById('signInEmail')
let signInPass=document.getElementById('signInPass')
let signInBTN=document.getElementById('signInBTN');
let signInNavBTNli=document.getElementById('signInNavBTNli');

signInBTN.addEventListener("click",()=>{
    fetch(userApi)
    .then(response => response.json())
    .then(data =>{
        let userData=data.filter(user=>user.email==signInEmail.value && user.password==signInPass.value)
        console.log(userData[0].username)
        if(userData.length > 0){
            sessionStorage.setItem('userID',userData[0].id)
            sessionStorage.setItem('userName',userData[0].username)
            let profileLi=document.createElement('li')
            let profileLink=document.createElement('a')
            profileLink.textContent='حسابي';
            profileLink.href='profile.html'
            profileLi.appendChild(profileLink)
            mainNavList.appendChild(profileLi)
            signInForm.classList.toggle('show-sign-form');
            greyBG.classList.toggle('grey-bg-show')
            signInNavBTN.remove();
            signInForm.remove()
            signUpForm.remove()
            signInNavBTNli.remove()
            window.location.href="profile.html"

        }

    })
})


let tourLocationSelectDiv = document.getElementById('tourLocationSelectDiv')


let diriyahPin = document.getElementById('diriyahPin')
let riyadhPin = document.getElementById('riyadhPin')
let alulaPin = document.getElementById('alulaPin')

diriyahPin.addEventListener('mouseover', () => {
    let diriyahHover = document.createElement('img')
    diriyahHover.setAttribute('class', 'city-hover')
    diriyahHover.setAttribute('id', 'cityHover')
    diriyahHover.src = 'images/riyadhMap.png'
    tourLocationSelectDiv.appendChild(diriyahHover)

})

diriyahPin.addEventListener('mouseleave', () => {
    let diriyahHover = document.getElementById('cityHover')
    diriyahHover.setAttribute('class', 'city-hover')
    diriyahHover.remove()
})

riyadhPin.addEventListener('mouseover', () => {
    let diriyahHover = document.createElement('img')
    diriyahHover.setAttribute('class', 'city-hover')
    diriyahHover.setAttribute('id', 'cityHover')
    diriyahHover.src = 'images/riyadhMap.png'
    tourLocationSelectDiv.appendChild(diriyahHover)

})

riyadhPin.addEventListener('mouseleave', () => {
    let diriyahHover = document.getElementById('cityHover')
    diriyahHover.setAttribute('class', 'city-hover')
    diriyahHover.remove()
})

alulaPin.addEventListener('mouseover', () => {
    let diriyahHover = document.createElement('img')
    diriyahHover.setAttribute('class', 'city-hover')
    diriyahHover.setAttribute('id', 'cityHover')
    diriyahHover.src = 'images/alulaMap.png'
    tourLocationSelectDiv.appendChild(diriyahHover)

})

alulaPin.addEventListener('mouseleave', () => {
    let diriyahHover = document.getElementById('cityHover')
    diriyahHover.setAttribute('class', 'city-hover')
    diriyahHover.remove()
})







//sign in and up form control





// Tourist Character
let boyChracterSelected = document.getElementById('boyGender')
let girlChracterSelected = document.getElementById('girlGender')
let CharacterImage = document.querySelectorAll('.tourist-in-frame')


let touristName;

boyChracterSelected.addEventListener("click", () => {
    CharacterImage.forEach(element => {
        element.src = "images/boy.png"
        touristName = document.getElementById('touristName').value

    })
})

girlChracterSelected.addEventListener("click", () => {
    CharacterImage.forEach(element => {
        element.src = "images/girl.png"
        touristName = document.getElementById('touristName').value

    })
})
let welcomeessage=document.querySelectorAll('.name-welcome')

function slideFrame(curent, next) {
    let firstFrame = document.getElementById(curent)
    let otherFrame = document.getElementById(next)
    touristName = document.getElementById('touristName').value

    firstFrame.classList.remove('show')
    otherFrame.classList.add('show')

    welcomeessage.forEach(span=>{
        span.textContent=`مرحبا ${touristName}`
    })
    

}
mesumSlideFrame(".diriyah-tour-frame", "diriyahbackBTN", "diriyahnextBTN")
mesumSlideFrame(".riadh-tour-frame", "riyadhbackBTN", "riyadhnextBTN")
mesumSlideFrame('.alula-tour-frame', 'alulabackBTN', 'alulanextBTN');

function mesumSlideFrame(framClass, backBTN, nextBTN,) {

    let currentFrame = 0;
    const frames = document.querySelectorAll(framClass);
    const prevBtn = document.getElementById(backBTN);
    const nextBtn = document.getElementById(nextBTN);

    function showFrame(index) {
        frames.forEach((frame, i) => {
            frame.classList.toggle('show', i === index);
        });

        prevBtn.style.display = (index === 0) ? 'none' : 'block';
        nextBtn.textContent = (index === frames.length - 1) ? 'العودة للخريطة' : 'التالي';
    }

    function nextFrame() {
        if (currentFrame < frames.length - 1) {
            currentFrame++;
            showFrame(currentFrame);
        } else {
            window.location.href = '#tourLocationSelectDiv';
        }
    }

    function prevFrame() {
        if (currentFrame > 0) {
            currentFrame--;
            showFrame(currentFrame);
        }
    }

    nextBtn.addEventListener('click', nextFrame);
    prevBtn.addEventListener('click', prevFrame);

    showFrame(currentFrame);

}
