let cpt = document.querySelector('.currentProjectTitle'); // currentProjectTitle -> cpt

cpt.addEventListener('mousemove',(e)=>{
    let {x,y} = e;

    cpt.style.transform = `translateX(${x*0.1}px)`;
})