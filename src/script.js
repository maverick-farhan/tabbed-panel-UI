const tabPanels = document.querySelectorAll('div.tab-panel');
const tabControls =  document.querySelectorAll('li a.tab-control')
tabControls.forEach((tab,i)=>{
    tab.addEventListener('click',function(e){
        tabControls.forEach(tab=>{tab.parentElement.classList.remove('active')});
        tab.parentElement.classList.add('active');
        tabPanels.forEach(content=>{
        content.classList.remove('active');});
        tabPanels[i].classList.add('active')
    }
    
    )
})