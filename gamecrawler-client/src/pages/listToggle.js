//작성자:김현영
const toggleBtn =document.querySelector('.navToggleBtn');
const navMenu = document.querySelector('.navMenu');
const loginMenu = document.querySelector('.navLoginMenu');

toggleBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('active') //loginMenu의 classList 중에 active 클래스를 토글링한다.
    loginMenu.classList.toggle('active') 
});

//즉, 메뉴를 클릭했을 때 active가 없다면 추가하고 있으면 빼주는 일을 한다.