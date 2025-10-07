document.querySelector('#calendar').addEventListener('change', () => {
    let choice = document.querySelector('#calendar').value;
    let days;

    if (["January","March","May","July","August","October","December"].includes(choice)) {
        days = 31;
    } else if (choice === 'February') {
        days = 28; // ignoring leap years for simplicity
    } else {
        days = 30;
    }

    let monthHTML = `<ul>`;
    monthHTML += createCalendar(choice, days);
    monthHTML += `</ul>`;

    document.querySelector('h2').innerHTML = monthHTML;
});


function createCalendar(monthName, days) {
    let month = `<h1>${monthName}</h1>`;
    
    // Weekday headers
    month += `<li class="weekdays">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </li>`;

    let week = [];
    for (let i = 1; i <= days; i++) {
        week.push(`<span>${i}</span>`);
        if (week.length === 7 || i === days) {
            month += `<li>${week.join('')}</li>`;
            week = [];
        }
    }

    return month;
}
