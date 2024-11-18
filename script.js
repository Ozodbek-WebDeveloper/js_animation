document.querySelector('.color_btn').onclick = () =>{
    document.querySelector('.color').classList.toggle('active')
}
let botom = document.querySelectorAll('.theme-buttons');
botom.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color' , dataColor )
    } )
})  