/* Use the *= operator to see the power of compound interest. If you have
$100 and you gain 8 ­ percent interest ­ every year, how many years ­ will it
take to double your money? To find out, create a variable called savings
and initialize it with the value 100. Then repeatedly use the *= operator to
multiply this value by 1.08. (Tip: press the up arrow to reuse the previous
input, instead of having to retype it over and over.) */

let savings = 100;
savings *= 1.08;

console.log(`Current compound interest is ${savings / 100}%`);