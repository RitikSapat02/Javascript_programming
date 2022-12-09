'use strict'

const weekdays = ['Mon','Tue','Wed','Thu','Fri','sat','sun'];
const openingHours = {
    [weekdays[3]]: {
        open:12,
        close:22,
    },
    [weekdays[4]]:{
        open:11,
        close: 23,
    },
    [weekdays[5]] : {
        open:0, //open 24 hours
        close:24,
    },
};

  //property names

  const properties = Object.keys(openingHours);
  console.log(properties);

  let openstr = `we are open on ${properties.length} days: `;

  for(const day of properties)openstr+=`${day}, `;
  console.log(openstr);

  //property values
  const values = Object.values(openingHours);
  console.log(values);

  //entrries or entire object
  const enteries = Object.entries(openingHours);
  console.log(enteries);

  for(const [key,{open,close}] of enteries)console.log(`On ${key} we open at ${open} and close at ${close}`);