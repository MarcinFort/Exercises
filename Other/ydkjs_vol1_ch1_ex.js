// An exercise from Kyle Simpsons's 'You Don't Know JavaScript', Vol. 1, Ch. 1
// https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md
// Date of access: 16 Oct 2017

// constants
const TAX_RATE = 0.08;
const PHONE_PRICE = 100;
const ACC_PRICE = 10;
const THRESHOLD = 5555.55;

// variables
let balance = 12300;
let bought_phones = 0;
let bought_accessories = 0;
let spent_money = 0;

// calculate the tax
function calc_tax(price) {
    return price + (0.08 * price);
}

const PHONE_WITH_TAX = calc_tax(PHONE_PRICE);
const ACC_WITH_TAX = calc_tax(ACC_PRICE);

// calculate the number of phones and accessories which you can buy
function calc_num_of_phones() {
    while (balance > PHONE_WITH_TAX) {
        bought_phones++;
        spent_money += (PHONE_WITH_TAX); 
        balance -= (PHONE_WITH_TAX);
        if (spent_money < THRESHOLD) {
            bought_accessories++;
            spent_money += (ACC_WITH_TAX);
            balance -= (ACC_WITH_TAX);
        }
    }
}

calc_num_of_phones();

// convert money sums to strings and add the currency symbol
ed_spent_money = String(spent_money.toFixed(2))+" $";
ed_balance = String(balance.toFixed(2))+" $";


console.log(`You bought ${bought_phones} phones and ${bought_accessories} accessories for the total of ${ed_spent_money}. Your current balance is ${ed_balance}.`);
