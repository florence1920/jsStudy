document.addEventListener('mousemove',logKey);

//좌표 박스 
const moveWrap = document.querySelector('.moveWrap');
const corBox = document.querySelector('.corBox');
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');


function logKey (e){
    //따라다니는 박스 만들기
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    //움직이는 요소들 보여줌 
    moveWrap.style.display = 'block';
    //좌표 움직임
    corBox.style.left = mouseX + 150 + 'px';
    corBox.style.top = mouseY + 100+ 'px';
    corBox.innerHTML = `(${mouseX},${mouseY})`;
    // 선 움직임
    vertical.style.left = `${mouseX}px`;
    horizontal.style.top = `${mouseY}px`;
    // 타겟 움직임
    target.style.left = `${mouseX}px`;
    target.style.top =`${mouseY}px`;
}