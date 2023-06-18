
    const form = document.getElementById('form')
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    const today = new Date();
    const dayToday = today.getDate();
    const monthToday = 1 + today.getMonth();
    const yearToday = today.getFullYear();
    
    const resultBtn = document.getElementById('result_btn');


    function calculateAge() {
        
        const dayDate = day.value;
        const monthDate = month.value;
        const yearDate = year.value;
        
        //https://www.tutorialstonight.com/age-calculator-in-javascript 
        // Calculate years
        let years;
        if (monthToday > monthDate || ( monthToday  == monthDate && monthToday  >= monthDate)) {
          years = yearToday - yearDate;
        }
        else {
          years = yearToday - yearDate - 1 ;
        }
        
        // Calculate months
        let months;
        if ( monthToday < monthDate) {
         months = monthToday - monthDate;
        }
        else if (monthToday >= monthDate) {
            months = monthToday - monthDate + 1;
        }
        // make month positive
        months = months < 0 ? months + 12 : months;
  
        // Calculate days
        let days;
        // days of months in a year
        const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (dayToday >= dayDate) {
          days = dayToday - dayDate;
        } else {
          days = dayToday - dayDate + monthDays[monthToday];
        }
        // Display result
        document.getElementById('yr').innerHTML = years;
        document.getElementById('mon').innerHTML = months;
        document.getElementById('dy').innerHTML = days;
        
        if (months == 0 && days == 0) {
            document.getElementById('bd').innerHTML = "Happy Birthday!";
        }
    }


/* value validation if 0 */
 
form.addEventListener('submit', e => {
    e.preventDefault();

    calculateAge();
    validate();
    
});
const setError = (parent, message) => {
    const formInput = parent.parentElement;
    const errorDisplay = formInput.querySelector('small');

    errorDisplay.innerText = message;
    formInput.classList.add('error');
    formInput.classList.add('label');
    formInput.classList.remove('success')
}

const setSuccess = (parent) => {
    const formInput = parent.parentElement;
    const errorDisplay = formInput.querySelector('small');

    errorDisplay.innerText = '';
    formInput.classList.add('success');
    formInput.classList.add('labelsuc');
    formInput.classList.remove('error');
};
// value validation
const validate = () => {
    const dayValue = day.value;
    const monthValue = month.value;
    const yearValue = year.value;

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if(dayValue === '') {
        setError(day, 'This feild is required');
    }
    else if(dayValue > monthDays[monthValue - 1 ]) {
        setError(day, 'Must be valid day');
    }
    else {
        setSuccess(day);
    }

    if(monthValue === '') {
        setError(month, 'This feild is required');
    }
    else if(monthValue > 12) {
        setError(month, 'Must be valid month');
    }
    else {
        setSuccess(month);
    }

    if(yearValue === '') {
        setError(year, 'This feild is required');
    }
    else if(yearValue > yearToday) {
        setError(year, 'Must be in the past');
    }
    else {
        setSuccess(year);
    }
}     
// value validation 
      