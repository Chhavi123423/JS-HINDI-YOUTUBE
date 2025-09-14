let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());

console.log(date.toISOString());

console.log(date.toJSON());

console.log(date.toLocaleDateString());

console.log(date.toLocaleString());

console.log(typeof date);

/*
1. toString() → returns a human-readable string of the date.

2. toISOString() → returns date in ISO 8601 format (e.g., "2025-09-14T13:45:30.000Z").

3. toJSON() → same as toISOString(), but intended for JSON serialization.

4. toLocaleDateString() → returns only the date, formatted based on locale (e.g., "14/9/2025" in India).

5. toLocaleString() → returns date and time, formatted based on locale (e.g., "14/9/2025, 7:15:30 pm").
*/

let myCreatedDate = new Date(2025, 8, 14, 10, 30);//yy-mm-dd
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getMonth());
console.log(Math.floor(Date.now()/1000));

//toLocaleString() is one of the most powerful date/time formatting methods in  
// Javascript because it can be customized with locale codes and options.

console.log(date.toLocaleString("default", { 
  weekday: "long",   // full day name (e.g., "Sunday")
  year: "numeric", 
  month: "long",     // full month name
  day: "numeric",
  hour: "2-digit", 
  minute: "2-digit", 
  second: "2-digit",
  hour12: true       // use 12-hour clock
}));
