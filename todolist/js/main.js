let list = [];
let check = [];
let renderList = () => {
    let html = '';
    for(let i in list){
        html += `
            <li>
            ${list[i]}
            <span>
                <i class="far fa-trash-alt" onclick="delList('${i}')"></i>
                <span onclick="checkAct('${i}')"><i class="far fa-check-circle"></i></span>
            </span>
            </li>
        `  
    }
    document.querySelector('#todo').innerHTML = html;
}
let renderCheck = () => {
    let html = '';
    for(let i in check){
        html += `
            <li>
            ${check[i]}
            <span>
                <i class="far fa-trash-alt" onclick="delCheck('${i}')"></i>
                <span><i class="fas fa-check-circle"></i></span>
            </span>
            </li>
        `  
    }
    document.querySelector('#completed').innerHTML = html;
}
document.querySelector('#addItem').onclick = function(){
    let inputAct = document.querySelector('#newTask').value;
    for(let act1 of list){
        if(act1 == inputAct)
            return;
    }
    for(let act2 of check){
        if(act2 == inputAct)
            return;
    }
    list.push(inputAct);
    renderList(list);
    let nList = JSON.stringify(list);
    luuAct('list', nList);
}
window.delList = (i) =>{
    list.splice(i,1);

    renderList();
    let dList1 = JSON.stringify(list);
    luuAct('list', dList1);
} 
window.delCheck = (i) =>{
    check.splice(i,1);

    renderCheck();
    let dCheck2 = JSON.stringify(check);
    luuAct('check', dCheck2);
} 
window.checkAct = (i) => {
    check.push(list[i]);
    list.splice(i,1);

    renderList();
    let cList = JSON.stringify(list);
    luuAct('list', cList);
    
    renderCheck();
    let cCheck = JSON.stringify(check);
    luuAct('check', cCheck);
    return;
}
document.querySelector('#two').onclick = function(){
    list = list.sort((a,b) => a.localeCompare(b));
    renderList();
}
document.querySelector('#three').onclick = function(){
    list = list.sort((a,b) => a.localeCompare(b));
    list = list.reverse();
    renderList();
}


window.onload = function(){
    if(layAct('list')){
        list = JSON.parse(layAct('list'));
        renderList(list);
    }
    if(layAct('check')){
        check = JSON.parse(layAct('check'));
        renderList(check);
    }
}
let layAct = (key) => {
    if(localStorage.getItem(key))
        return localStorage.getItem(key);
    return undefined;
}
let luuAct = (key,value) => {
    localStorage.setItem(key,value);
}