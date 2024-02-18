function seatClassPrice(seat) {
    const tbodoy = document.getElementById('tbody');
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = seat;
    const td2 = document.createElement('td');
    td2.innerText = 'Economoy';
    const td3 = document.createElement('td');
    td3.innerText = 550;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbodoy.appendChild(tr);

}

function getTextValueById(id) {
    const element = document.getElementById(id);
    const valueString = element.innerText;
    const value = parseInt(valueString);
    return value;
}

function getInputValueById(id) {
    const element = document.getElementById(id);
    const textNum = element.value;
    return textNum;
}

function setInnerTextByIdValue(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}

function coupon(event) {
    const inputText = getInputValueById('coupon');
    const grandTotal = getTextValueById('grand-total');

    if (inputText == 'NEW15') {
        const discountFifty = grandTotal * 0.15;
        const restOfDiscount = grandTotal - discountFifty;
        setInnerTextByIdValue('grand-total', restOfDiscount);
        event.target.parentNode.innerHTML = ''
    }
    else if(inputText == 'Couple 20') {
        const discountFifty = grandTotal * 0.20;
        const restOfDiscount = grandTotal - discountFifty;
        setInnerTextByIdValue('grand-total', restOfDiscount);
        event.target.parentNode.innerHTML = ''
    }
    else{
        alert('Please input right coupon code');
    }
}

function jumpToOtherSection() {
    const section = document.getElementById('ph-paribahan');
    section.scrollIntoView({ behavior: 'smooth' });
  }