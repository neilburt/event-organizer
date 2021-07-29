//Changing date and time format that we get from third party API

const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

module.exports = {
  format_date: (date) => {
    // MMM Do h:mm
    const dateObj = new Date(date);
    // console.log(dateObj)

    // const intl = new Intl.DateTimeFormat("en", dateObj).format("MMM Do h:mm")

    const month = dateObj.getMonth();
    const day = dateObj.getDay();
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes("mm");

    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];


    const monthToDisplay = months[month];
    const dayToDisplay = nth(day);
    // const hourToDisplay = (hour > 12) ? (hour - 12) : hour;
    const minutesToDisplay = (minutes < 10) ? `0${minutes}` : minutes;

    return `${monthToDisplay} ${day}${dayToDisplay} ${hour}:${minutesToDisplay}`;  
    //return intl;
  }
}

