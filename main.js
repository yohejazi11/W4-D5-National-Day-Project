
let lastScrollPosition = 0;
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', function() {
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollPosition = currentScrollPosition;
});

function slideFrame(curent,next){
    let firstFrame=document.getElementById(curent)
    let otherFrame=document.getElementById(next)

    firstFrame.classList.remove('show')
    otherFrame.classList.add('show')

}


let tourLocationSelectDiv=document.getElementById('tourLocationSelectDiv')


let diriyahPin=document.getElementById('diriyahPin')
let riyadhPin=document.getElementById('riyadhPin')
let alulaPin=document.getElementById('alulaPin')

diriyahPin.addEventListener('mouseover',()=>{
    let diriyahHover=document.createElement('img')
    diriyahHover.setAttribute('class','city-hover')
    diriyahHover.setAttribute('id','cityHover')
    diriyahHover.src='images/riyadhMap.png'
    tourLocationSelectDiv.appendChild(diriyahHover)

})

diriyahPin.addEventListener('mouseleave',()=>{
    let diriyahHover=document.getElementById('cityHover')
    diriyahHover.setAttribute('class','city-hover')
    diriyahHover.remove()
})

riyadhPin.addEventListener('mouseover',()=>{
    let diriyahHover=document.createElement('img')
    diriyahHover.setAttribute('class','city-hover')
    diriyahHover.setAttribute('id','cityHover')
    diriyahHover.src='images/riyadhMap.png'
    tourLocationSelectDiv.appendChild(diriyahHover)

})

riyadhPin.addEventListener('mouseleave',()=>{
    let diriyahHover=document.getElementById('cityHover')
    diriyahHover.setAttribute('class','city-hover')
    diriyahHover.remove()
})

alulaPin.addEventListener('mouseover',()=>{
    let diriyahHover=document.createElement('img')
    diriyahHover.setAttribute('class','city-hover')
    diriyahHover.setAttribute('id','cityHover')
    diriyahHover.src='images/alulaMap.png'
    tourLocationSelectDiv.appendChild(diriyahHover)

})

alulaPin.addEventListener('mouseleave',()=>{
    let diriyahHover=document.getElementById('cityHover')
    diriyahHover.setAttribute('class','city-hover')
    diriyahHover.remove()
})