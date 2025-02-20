//your code here!
let order = document.querySelector("#infi-list");
function addListItems(count) {
    let currentLength = order.children.length; 

    for (let i = 0; i < count; i++) {
        let newli = document.createElement("li");
        newli.textContent = `Item ${currentLength + i + 1}`;
        order.appendChild(newli);
    }
}
function isAtBottom() {
    return order.scrollTop + order.clientHeight >= order.scrollHeight - 1; 

}
order.addEventListener("scroll", function () {
    if (isAtBottom()) {
        addListItems(2); 
    }

});
    
addListItems(10);
