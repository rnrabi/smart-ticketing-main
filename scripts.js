const seats = document.getElementsByClassName('chair');
let count = 1;
let countDown = 39;
let totalPrice = 0;
// console.log(seats)
for(const seat of seats){
    console.log(seat);
    seat.addEventListener('click' , function(event){
        const seatNum = event.target.innerText;
        event.target.classList.add('bg-[#1DD100]');
        // এখানে একাধক বার ক্লক করলে যেন বার বার না এসট্র হয় । 
        console.log(event.target)
        seatClassPrice(seatNum);
        // -------------------------------------------------------
        setInnerTextByIdValue('seat-left', countDown);
        countDown--;
        // -----------------------------------------------------
        setInnerTextByIdValue('seat',count);
        count++;
        // -------------------------------------------
        totalPrice = totalPrice + 550;
        setInnerTextByIdValue('total-price',totalPrice);
        // -------------------------------------------------------
       
        setInnerTextByIdValue('grand-total',totalPrice);
       

    })
}

