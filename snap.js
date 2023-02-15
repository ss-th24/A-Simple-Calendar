let size = document.querySelector('select').length;
// console.log(size);

    document.querySelector('select').addEventListener('change',()=>{
        let choice =  document.querySelector('select').value;
        let days;
        if(choice === 'January' || choice ===  "March" || choice === "May" || choice === "May" ||choice === "July" || choice ===  "August" || choice === "October" ||choice === "December")
        {
            days = 31;
        }
        else if(choice === 'February')
        {
            days = 28;
        }
        else{days = 30};


        let month = `<ul>`
        month += createCalendar(choice, days);
        month += `</ul>`
        console.log(month);

        document.querySelector('h2').innerHTML = month;
    });


    

    function createCalendar(choice,days)
    {
        let month= `<h1>${choice}</h1>`;
        for(let i = 0; i< days; ++i)
        {
            month += `<li>${i+1}</li>`;
        }

        return month;
    }



   