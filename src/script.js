const tabLists = document.querySelectorAll('.tab-list');
tabLists.forEach((tabList)=>{
    tabList.addEventListener('click',function(e){
        e.preventDefault();
        let links = this.firstChild;
        let activeTab = tabList.querySelectorAll(`:scope ${'li.active'}`)
        console.log(this.firstChild);
    })
})