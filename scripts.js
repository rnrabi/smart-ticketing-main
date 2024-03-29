const seats = document.getElementsByClassName('chair');
let count = 1;
let countDown = 39;
let totalPrice = 0;

for (const seat of seats) {
    seat.addEventListener('click', function (event) {

        if (count > 4) {
            alert('You have selected alrady four seats')
            return;
        }
        else {
            const seatNum = event.target.innerText;
            event.target.classList.add('bg-[#1DD100]');
            seatClassPrice(seatNum);
            // -------------------------------------------------------
            setInnerTextByIdValue('seat-left', countDown);
            countDown--;
            // -----------------------------------------------------
            setInnerTextByIdValue('seat', count);
            count++;
            // -------------------------------------------
            totalPrice = totalPrice + 550;
            setInnerTextByIdValue('total-price', totalPrice);
            // -------------------------------------------------------  
            setInnerTextByIdValue('grand-total', totalPrice);
            // -----------------------------------------------------
            const nextBtn = document.getElementById('next');
            const phoneInput = document.getElementById('phone-number');
            const phoneNumber = phoneInput.value;
            if ((phoneNumber.length > 0) && (count > 1)) {
                nextBtn.removeAttribute('disabled');
            }
        }

    })
}

document.getElementById('coupon-btn').addEventListener('click', function (event) {
    coupon(event);
})


const phone = document.getElementById('phone-number');
const nextBtn = document.getElementById('next');

phone.addEventListener('keyup', function (event) {
    const number = event.target.value;
    if ((number.length > 0) && (count > 1)) {
        nextBtn.removeAttribute('disabled');
    }
})
