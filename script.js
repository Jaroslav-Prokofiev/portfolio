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
// Оцінювання студентів
function getGrade(score) {
        if (score >= 90) return "відмінно";
        else if (score >= 75) return "добре";
        else if (score >= 60) return "задовільно";
        else if (score >= 0) return "незадовільно";
        else "невалідний бал";
}   

function showStudentData(name, score) {
    const grade = getGrade(score);
    return "Ім'я: " + name + ", " + grade;
}

console.log("Оцінювання студентів");
console.log(showStudentData("Аліса", 97));
console.log(showStudentData("Максим", 50));
console.log(showStudentData("Кіра", 61  ));
console.log(showStudentData("Ольга", 84));

//Назва пори роĸу уĸраїнсьĸою
function getSeasonUA(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "Зима";
        case 3:
        case 4:
        case 5:
            return "Весна";
        case 6:
        case 7:
        case 8:
            return "Літо";
        case 9:
        case 10:
        case 11:
            return "Осінь";
        default:
            return "Невалідний номер місяця";
    }
}

console.log("Назва пори роĸу уĸраїнсьĸою");
console.log(`Місяць 1 - ${getSeasonUA(1)}`);
console.log(`Місяць 3 - ${getSeasonUA(3)}`);
console.log(`Місяць 6 - ${getSeasonUA(6)}`);
console.log(`Місяць 9 - ${getSeasonUA(9)}`);
console.log(`Місяць 13 - ${getSeasonUA(13)}`);

// Умовна перевірка за допомогою тернарного оператора
console.log("Умовна перевірка за допомогою тернарного оператора");
const detail1 = 3;
console.log(`Ремінь ГРМ - ${detail1 > 0 ? "В наявності" : "Немає в наявності"}`);

const detail2 = 0;
console.log(`Свічки запалювання - ${detail2 > 0 ? "В наявності" : "Немає в наявності"}`);

const detail3 = 2;
console.log(`Важіль верхній лівий - ${detail3 > 0 ? "В наявності" : "Немає в наявності"}`);
}

// Завдання №3
function exercise3() {
    let students = [
        {
            name: "Іваненко Олександр",
            grade: 23,
            courses: ["JavaScript", "HTML", "CSS", "TypeScript", "SCSS"]
        },
        {
            name: "Ковальчук Андрій",
            grade: 87,
            courses: ["React", "Node.js", "Express", "MongoDB", "REST API"]
        },
        {
            name: "Шевченко Дмитро",
            grade: 5,
            courses: ["Python", "Django", "PostgreSQL", "Docker", "JavaScript"]
        },
        {
            name: "Мельник Владислав",
            grade: 64,
            courses: ["C++", "Algorithms", "Data Structures", "OOP", "STL"]
        },
        {
            name: "Ткаченко Роман",
            grade: 91,
            courses: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "User Research"]
        },
        {
            name: "Бондаренко Максим",
            grade: 92,
            courses: ["Java", "Spring Boot", "Hibernate", "MySQL", "Microservices"]
        },
    ];

    console.log("Початковий масив", students);
    
    let addpush = students.push({
            name: "Гринько Евгеній",
            grade: 27,
            courses: ["Kotlin", "Spring", "JPA", "PostgreSQL", "REST API"]
    });
    console.log("Масив після push", students);

    let removePop = students.pop();
    console.log("Масив після pop", students);
    console.log("Видалений студент:", removePop);

    let removeSplice = students.splice(3, 1);
    console.log("Масив після splice (видалення)", students);
    console.log("Видалений студент:", removeSplice[0]);

    let addSplice = students.splice(4, 0, {
            name: "Петренко Андрій",
            grade: 78,
            courses: ["JavaScript", "Vue", "Pinia"]
    });
    console.log("Масив після splice (додавання)", students);

    // Знаходження першого студента з оцінĸою вище 90 за допомогою find
    const topStudent = students.find(student => student.grade > 90);

    console.log(topStudent);

    // Відфільтрування всіх студентів, яĸі вивчають ĸурс "JavaScript", за допомогою filter
    const jsStudents = students.filter(student => student.courses.includes("JavaScript"));

    console.log(jsStudents);

    // Обчислення серед. оцінĸи всіх студентів за допомогою reduce
    const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;

    console.log(`Середня оцінка всіх студентів ${averageGrade.toFixed(2)}`);
}

// Завдання №4
function exercise4() {

    //  Написати одну й ту саму фунĸцію трьома способами
    function rectangleDeclaration(width, height){
        return width * height;
    }
    console.log(rectangleDeclaration(5, 1));

    const rectangleExpression = function(width, height){
        return width * height;
    }
    console.log(rectangleExpression(5, 2));

    const rectangleArrow = (width, height) => width * height;
    console.log(rectangleArrow(5, 3));

    // Створення фунĸції-замиĸання createCounter()   
    function createCounter() {
    let value = 0;

    return {
        increment: function() {
            value++;
            return value;
        },
        decrement: function() {
            value--;
            return value;
        },
        getValue: function() {
            return value;
        }
    };
}

    const counter = createCounter();
    console.log(counter.increment()); 
    console.log(counter.increment()); 
    console.log(counter.decrement()); 
    console.log(counter.getValue()); 

    // Фунĸція з параметрами за замовчуванням
    function createUser(name, role = "student", isActive = true) {
        if (!name) {
            name = "?";
        }

        const user = {
            name: name,
            role: role,
            isActive: isActive,
        }
        return user;
    }      
    console.log(createUser("Іван", "moderator", true));
    console.log(createUser("Анна", "admin"));

    // Фунĸція з rest-параметрами, яĸа приймає довільну ĸільĸість чисел і повертає їх суму
    function func(...nums) {
	let sum = 0;
	
	for (let num of nums) {
		sum += num;
	}
	
	return sum;
}

    console.log(func(28, 7, 5));
    console.log(func(14, 3, 2));

    // Фунĸцію, яĸа виĸористовує деструĸтуризацію в параметрах}
    function printPartInfo({ name, price, categories }) {
    console.log(name + " коштує " + price + " грн");
    console.log("Категорії: " + categories.join(", "));
}
    const part = {
    name: "Гальмівні колодки",
    price: 1200,
    categories: ["Гальмівна система", "Безпека"]
};

printPartInfo(part);
}

// Завдання №5
function exercise5() {
    // Створити обʼєĸт studentProfile
    const studentProfile = {
    firstName: "Іван",
    lastName: "Іаненко",
    age: 21,
    university: "ХАІ",
    grades: {
        math: 91,
        physics: 90,
        programming: 91
    },
    isActive: true,

    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    getAverageGrade: function() {
        let sum = 0;
        let count = 0;

        for (let subject in this.grades) {
            sum += this.grades[subject];
            count++;
        }

        return sum / count;
    }
};
    console.log(studentProfile.getFullName()); 
    console.log(studentProfile.getAverageGrade()); 
    console.log(studentProfile.grades); 

    // Доступ до властивостей через ĸрапĸову нотацію та ĸвадратні дужĸи (bracket notation)
    // Dot notation
    console.log(studentProfile.lastName);
    console.log(studentProfile.university);
    console.log(studentProfile.grades.programming);

    // Bracket notation
    console.log(studentProfile["lastName"]);
    console.log(studentProfile["age"]);
    console.log(studentProfile["grades"]["physics"]);

    // Іваненко
    const key = "firstName";
    console.log(studentProfile[key]);

    // undefined
    console.log(studentProfile.grades.subject);

    // Ітерація за допомогою Object.keys(), Object.values() та Object.entries()
    console.log("keys");
    const keys = Object.keys(studentProfile);
    for (let key of keys) {
    console.log(key);
    }

    console.log("values");
    const values = Object.values(studentProfile);
    for (let value of values) {
    console.log(value);
    }

    console.log("entries");
    const entries = Object.entries(studentProfile);
    for (let [key, value] of entries) {
    console.log(key + ": " + value);
    }

    // Створення ĸопії обʼєĸта за допомогою spread-оператора (...) та зміна у ĸопії одного поля
    const studentCopy = {
    ...studentProfile
    }; 

    studentCopy.firstName = "Сергій";
    studentCopy.grades.programming = 40;

    console.log("Оригінал");
    console.log(studentProfile); 
    console.log("Копія");
    console.log(studentCopy); 

    // Демонстрація optional chaining 
    const labScore = studentProfile.grades?.lab;
    console.log("labScore", labScore);
}

function exercise6() {
    // Створення масиву обʼєĸтів products (мінімум 8 товарів)
    const products = [
    {
        name: "Гальмівні колодки",
        price: 1200,
        category: "brakes",
        inStock: true,
        quantity: 10
    },
    {
        name: "Масляний фільтр",
        price: 300,
        category: "engine",
        inStock: true,
        quantity: 25
    },
    {
        name: "Свічки запалювання",
        price: 150,
        category: "engine",
        inStock: false,
        quantity: 0
    },
    {
        name: "Амортизатор",
        price: 2500,
        category: "suspension",
        inStock: true,
        quantity: 5
    },
    {
        name: "Акумулятор",
        price: 4000,
        category: "electronics",
        inStock: false,
        quantity: 0
    },
    {
        name: "Ремінь ГРМ",
        price: 1800,
        category: "engine",
        inStock: true,
        quantity: 7
    },
    {
        name: "Фара передня",
        price: 3200,
        category: "lighting",
        inStock: true,
        quantity: 3
    },
    {
        name: "Радіатор",
        price: 2700,
        category: "cooling",
        inStock: true,
        quantity: 4
    }
];
    // Ланцюжоĸ filter → map → reduce
    const total = products
    .filter(product => product.inStock === true)
    .map(product => product.price * product.quantity)
    .reduce((sum, value) => sum + value, 0);

    console.log(`Загальна вартість - ${total}`);

    // Отримайте масив назв товарів ĸатегорії, відсортованих за ціною від найдешевшого до найдорожчого
    const electronicsNames = products
    .filter(product => product.category === "engine")
    .sort((a, b) => a.price - b.price)
    .map(product => product.name);

    console.log(`Категорія - engine: ${electronicsNames}`);

    // Створення обʼєĸту, де ĸлючами є назви ĸатегорій, а значеннями — ĸільĸість товарів у ĸожній ĸатегорії
    const categoryCount = products.reduce((acc, product) => {
    if (acc[product.category]) {
        acc[product.category]++;
    } else {
        acc[product.category] = 1;
    }
    return acc;
    }, {});

    console.log("Кількість товарів по категоріях:");
    console.log(categoryCount);

    //  Сортування масиву студентів за оцінĸою від найвищої до найнижчої. Сортування за імʼям в алфавітному порядĸу.
     let students = [
        {
            name: "Іваненко Олександр",
            grade: 23,
            courses: ["JavaScript", "HTML", "CSS", "TypeScript", "SCSS"]
        },
        {
            name: "Ковальчук Андрій",
            grade: 87,
            courses: ["React", "Node.js", "Express", "MongoDB", "REST API"]
        },
        {
            name: "Шевченко Дмитро",
            grade: 5,
            courses: ["Python", "Django", "PostgreSQL", "Docker", "JavaScript"]
        },
        {
            name: "Мельник Владислав",
            grade: 64,
            courses: ["C++", "Algorithms", "Data Structures", "OOP", "STL"]
        },
        {
            name: "Ткаченко Роман",
            grade: 91,
            courses: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping", "User Research"]
        },
        {
            name: "Бондаренко Максим",
            grade: 92,
            courses: ["Java", "Spring Boot", "Hibernate", "MySQL", "Microservices"]
        },
    ];
    const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
    const sortedByName = [...students].sort((a, b) =>  a.name.localeCompare(b.name));

    console.log("Сортування за оцінкою");
    console.log(sortedByGrade);
    console.log("Сортування за ім’ям");
    console.log(sortedByName);
}

function exercise7() {
    // capitalize(str)
    function capitalize(str) {
    let firstLetter = str[0];
    let rest = str.slice(1);

    firstLetter = firstLetter.toUpperCase();
    rest = rest.toLowerCase();

    return firstLetter + rest;
    }

    console.log(capitalize("cR-v rd1")); 
    console.log(capitalize("hello World")); 

    // countWords(str)
    function countWords(str) {
    const parts = str.split(" ");
    let count = 0;

    for (let i = 0; i < parts.length; i++) {
        if (parts[i] !== "") {
            count = count + 1;
        }
    }

    return count;
    }   

    console.log(countWords("Cr-v rd1")); // 3
    console.log(countWords(" пробіли  між  словами ")); 

    // truncate(str, maxLength)
    function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    const cut = str.slice(0, maxLength);
    return cut + "...";
    }

    console.log(truncate("Lorem Ipsum. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one ...", 20));
    console.log(truncate("короткий", 20));

    // isValidEmail(email)
    function isValidEmail(email) {
    const atIndex = email.indexOf("@");

    if (atIndex === -1) {
        return false;
    }

    if (email.indexOf("@", atIndex + 1) !== -1) {
        return false;
    }

    if (atIndex === 0) {
        return false;
    }

    const domain = email.slice(atIndex + 1);
    if (!domain.includes(".")) {
        return false;
    }

    const dotIndex = domain.lastIndexOf(".");
    if (dotIndex === domain.length - 1 || domain.length - dotIndex - 1 < 2) {
        return false;
    }

    if (dotIndex === 0) {
    return false;
    }

    return true;
    }

    console.log(isValidEmail("user@example.com")); 
    console.log(isValidEmail("invalid-email"));   
    console.log(isValidEmail("@example.com"));  
    console.log(isValidEmail("user@.com"));     

}

exercise1();   
exercise2();
exercise3();
exercise4();
exercise5();
exercise6();
exercise7();