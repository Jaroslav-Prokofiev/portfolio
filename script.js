// Завдання №1
function exercise1() {  
    // Оголошення змінних ĸожного примітивного типу та виведення значення та типу для кожної змінної
    console.log("Оголошення змінних ĸожного примітивного типу");  
    const string_1 = "Hello world";
    const number_1 = 28;
    const boolean_1 = false;
    const null_1 = null;
    let undefined_1 = undefined; 
    const symbol_1 = Symbol("id");
    const bigint_1 = 900719921313213132254740991n;
    
    console.log(`string_1: ${string_1}, ${typeof string_1}`);
    console.log(`number_1: ${number_1}, ${typeof number_1}`);
    console.log(`boolean_1: ${boolean_1}, ${typeof boolean_1}`);
    console.log(`null_1: ${null_1}, ${typeof null_1}`);
    console.log(`undefined_1: ${undefined_1}, ${typeof undefined_1}`);
    console.log(`symbol_1: ${symbol_1.toString()}, ${typeof symbol_1}`);
    console.log(`bigint_1: ${bigint_1}, ${typeof bigint_1}`);

    // Явне перетворення типів - String
    console.log("Явне перетворення типів - String");  
    console.log(`String(123): ${String(123)}, ${typeof String(123)}`);
    console.log(`String(true): ${String(true)}, ${typeof String(true)}`);

    // Явне перетворення типів - Number
    console.log("Явне перетворення типів - Number");  
    console.log(`Number("123"): ${Number("123")}, ${typeof Number("123")}`);
    console.log(`Number(""): ${Number("")}, ${typeof Number("")}`);
    console.log(`Number(true): ${Number(true)}, ${typeof Number(true)}`);
    console.log(`Number(false): ${Number(false)}, ${typeof Number(false)}`);
    console.log(`Number(null): ${Number(null)}, ${typeof Number(null)}`);
    console.log(`Number(undefined): ${Number(undefined)}, ${typeof Number(undefined)}`);

    // Явне перетворення типів - Boolean
    console.log("Явне перетворення типів - Boolean");  
    console.log(`Boolean(0): ${Boolean(0)}`);
    console.log(`Boolean(""): ${Boolean("")}`);
    console.log(`Boolean(null): ${Boolean(null)}`);
    console.log(`Boolean(undefined): ${Boolean(undefined)}`);
    console.log(`Boolean(NaN): ${Boolean(NaN)}`);
    console.log(`Boolean(1): ${Boolean(1)}`);
    console.log(`Boolean("hello"): ${Boolean("hello")}`);
    
    // Використання шаблонних рядків
    console.log("Використання шаблонних рядків");
    const detail = "Гальмівні колодки";
    const price = 900;
    const carModel = "Honda cr-v rd1";
    console.log(`Деталь - ${detail}, ціна - ${price} грн, автомобіль - ${carModel}`);

    // Різниця між == та ===
    console.log("Різниця між == та ===");
    console.log(`5 == "5" ${5 == '5'}`);
    console.log(`5 === '5' ${5 === '5'}`);
    console.log(`false == '0' ${false == '0'}`);
    console.log(`false === '0' ${false === '0'}`);
    console.log(`null == undefined ${null == undefined}`);
    console.log(`null === undefined ${null === undefined}`);
}

// Завдання №2
function exercise2() {

}










//exercise1();   
exercise2();