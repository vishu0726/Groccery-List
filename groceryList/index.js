document.querySelector('button').addEventListener('click', addList);
let table = document.querySelector('table');

let tfoot = document.createElement('tfoot');
let footRow = tfoot.insertRow();
let totalValue = footRow.insertCell(0);
totalValue.setAttribute("data-ns-test","grandTotal");
totalValue.innerHTML = 0;
totalValue.colSpan = "3";
table.appendChild(tfoot);

let num = 0;
function addList() {
    let names = document.querySelector("[data-ns-test=item-name]").value;
    let price = document.querySelector("[data-ns-test=item-price]").value;
    // console.log(names);
    // console.log(price);
    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td1 = document.createElement('td');
    tr.appendChild(td1);
    let td2= document.createElement('td');
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    tr.appendChild(td3);
    if (names !== "") {
        // console.log("not empty");
        num++;
        td1.innerHTML = num;
        td2.innerHTML = names;
        td3.innerHTML = price;
        // console.log(td1,td2,td3);

        totalValue.innerHTML = parseInt(totalValue.innerHTML)+parseInt(price);
        // console.log(totalValue.innerHTML);
    }

    document.querySelector("[data-ns-test=item-name]").value = "";
    document.querySelector("[data-ns-test=item-price]").value = "";
}