// Vquestion.js
export let ValuesandVariablesQuest = [
  {
    "question": "1. Declare a variable named age and assign your age to it",
    "code": "let age = 25;\nconsole.log(age);",
    "englishExplanation": "`let` is used to declare a variable named `age` and assign it the value 25.",
    "urduExplanation": "`let` keyword se hum variable banate hain — yahan `age` naam ka variable banaya aur usay 25 assign kiya."
  },
  {
    "question": "2. Declare two variables firstName and lastName, then log full name",
    "code": "let firstName = \"Ali\";\nlet lastName = \"Khan\";\nconsole.log(firstName + \" \" + lastName);",
    "englishExplanation": "Two variables `firstName` and `lastName` are joined using `+` to form the full name.",
    "urduExplanation": "`firstName` aur `lastName` ko `+` se jor kar full name banaya gaya."
  },
  {
    "question": "3. Change a variable value and log before and after",
    "code": "let city = \"Lahore\";\nconsole.log(\"Before:\", city);\ncity = \"Karachi\";\nconsole.log(\"After:\", city);",
    "englishExplanation": "Value of `city` is first set to 'Lahore', then changed to 'Karachi'.",
    "urduExplanation": "`city` ki value pehle 'Lahore' thi, baad mein 'Karachi' set ki."
  },
  {
    "question": "4. Use const to declare a constant and try changing its value",
    "code": "const country = \"Pakistan\";\n// country = \"India\"; // ❌ Error\nconsole.log(country);",
    "englishExplanation": "`const` declares a constant, which cannot be changed.",
    "urduExplanation": "`const` ka use permanent variable banane ke liye hota hai, jise change nahi kiya ja sakta."
  },
  {
    "question": "5. What happens when you use a variable before declaring it?",
    "code": "// console.log(test); // ❌ ReferenceError\nlet test = \"Hello\";",
    "englishExplanation": "Using `let` or `const` before declaration causes ReferenceError.",
    "urduExplanation": "`let` ya `const` se pehle variable use karne par ReferenceError aata hai."
  },
  {
    "question": "6. Create variables name, birthYear, currentYear and calculate age",
    "code": "let name = \"Ahmed\";\nlet birthYear = 2000;\nlet currentYear = 2025;\nlet age = currentYear - birthYear;\nconsole.log(name + \"'s age is: \" + age);",
    "englishExplanation": "Age is calculated by subtracting birth year from current year.",
    "urduExplanation": "Age nikalne ke liye current year me se birth year minus kiya gaya."
  },
  {
    "question": "7. Use let vs var to show block scope",
    "code": "{\n  let a = 10;\n  var b = 20;\n}\nconsole.log(typeof a); // ❌ Error\nconsole.log(b);        // ✅ 20",
    "englishExplanation": "`let` is block-scoped, `var` is function-scoped.",
    "urduExplanation": "`let` sirf block ke andar kaam karta hai, `var` bahar bhi accessible hota hai."
  },
  {
    "question": "8. Declare a variable without assigning a value",
    "code": "let score;\nconsole.log(score); // Output: undefined",
    "englishExplanation": "A variable without assignment holds `undefined`.",
    "urduExplanation": "Jab variable ko value na di jaye to default `undefined` hoti hai."
  },
  {
    "question": "9. Combine string and number",
    "code": "let result = \"Score: \" + 90;\nconsole.log(result);",
    "englishExplanation": "Combining a string and number results in string due to type coercion.",
    "urduExplanation": "String aur number ko jor kar string milti hai (type coercion)."
  },
  {
    "question": "10. Re-declare a variable using var and let",
    "code": "var item = \"Book\";\nvar item = \"Pen\"; // ✅ Allowed\n\nlet tool = \"Hammer\";\n// let tool = \"Wrench\"; // ❌ Error",
    "englishExplanation": "`var` allows re-declaration; `let` does not.",
    "urduExplanation": "`var` se dobara variable bana sakte hain, `let` error deta hai."
  },
  {
    "question": "11. Declare 3 variables in one line and assign values",
    "code": "let x = 1, y = 2, z = 3;\nconsole.log(x, y, z);",
    "englishExplanation": "Multiple variables can be declared and assigned in one line.",
    "urduExplanation": "Ek hi line mein 3 ya zyada variables declare aur assign kiye ja sakte hain."
  },
  {
    "question": "12. Assign a variable to another and change original",
    "code": "let a = 5;\nlet b = a;\na = 10;\nconsole.log(\"a:\", a);\nconsole.log(\"b:\", b);",
    "englishExplanation": "`b` keeps the old value of `a`; it's a copy, not reference.",
    "urduExplanation": "`b` mein `a` ki value copy hoti hai, reference nahi hota."
  },
  {
    "question": "13. Use typeof to check type",
    "code": "let city = \"Lahore\";\nconsole.log(typeof city);",
    "englishExplanation": "`typeof` is used to get the type of a variable.",
    "urduExplanation": "`typeof` se variable ka type pata chalta hai."
  },
  {
    "question": "14. Log an undeclared variable",
    "code": "// console.log(price); // ❌ ReferenceError",
    "englishExplanation": "Using a variable that hasn’t been declared causes a ReferenceError.",
    "urduExplanation": "Declare kiye bina variable use karne se ReferenceError aata hai."
  },
  {
    "question": "15. Comment each variable",
    "code": "let name = \"Ali\"; // Person’s name\nlet marks = 90;   // Test score\nconst grade = \"A\"; // Final grade",
    "englishExplanation": "Use `//` to add inline comments to variables.",
    "urduExplanation": "`//` se variable ke saath comment likh sakte hain taake samajh aaye."
  }
];


export let DataTypesQuest = [
  {
    question: "1. Declare a string, number, and boolean variable.",
    code: "let name = \"Ali\";\nlet age = 25;\nlet isStudent = true;",
    englishExplanation: "Three variables are declared with string, number, and boolean types.",
    urduExplanation: "Teen variables banaye gaye hain: aik string, aik number, aur aik boolean value ke sath."
  },
  {
    question: "2. Use typeof on different data types and log results.",
    code: "console.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof isStudent);",
    englishExplanation: "`typeof` operator tells the data type of a variable.",
    urduExplanation: "`typeof` operator variable ka type batata hai."
  },
  {
    question: "3. Create an object and log one property.",
    code: "let person = { name: \"Ali\", age: 25 };\nconsole.log(person.name);",
    englishExplanation: "An object is created and one property is accessed using dot notation.",
    urduExplanation: "Ek object banaya gaya aur uski aik property dot notation se access ki gayi."
  },
  {
    question: "4. Create an array of your favorite colors.",
    code: "let colors = [\"red\", \"blue\", \"green\"];\nconsole.log(colors);",
    englishExplanation: "An array stores multiple values in one variable.",
    urduExplanation: "Array aik hi variable mein multiple values store karta hai."
  },
  {
    question: "5. Assign null to a variable and log its type.",
    code: "let emptyValue = null;\nconsole.log(typeof emptyValue);",
    englishExplanation: "Null represents 'no value', but typeof returns 'object'.",
    urduExplanation: "Null ka matlab hota hai koi value nahi, lekin `typeof` ise 'object' batata hai (JS ka bug)."
  },
  {
    question: "6. Assign undefined to a variable and log its type.",
    code: "let notAssigned = undefined;\nconsole.log(typeof notAssigned);",
    englishExplanation: "`undefined` means the variable has been declared but not given a value.",
    urduExplanation: "`undefined` ka matlab hai variable declare to hua hai, lekin usmein koi value nahi di gayi."
  },
  {
    question: "7. Create a boolean variable and use it in an if-else condition.",
    code: "let isLoggedIn = false;\nif (isLoggedIn) {\n  console.log(\"Welcome!\");\n} else {\n  console.log(\"Please log in.\");\n}",
    englishExplanation: "Boolean values control program flow using if-else.",
    urduExplanation: "Boolean value `if-else` ka use karke program ka flow control karti hai."
  },
  {
    question: "8. Compare a number and a string using == and ===.",
    code: "let x = 5;\nlet y = \"5\";\nconsole.log(x == y);\nconsole.log(x === y);",
    englishExplanation: "`==` compares values only, `===` compares values and types.",
    urduExplanation: "`==` sirf value check karta hai, jabke `===` value aur type dono check karta hai."
  },
  {
    question: "9. Create a variable with a decimal (float) number.",
    code: "let price = 99.99;\nconsole.log(price);",
    englishExplanation: "Floating point numbers have decimal values.",
    urduExplanation: "Decimal ya float number woh hota hai jisme point (.) hota hai."
  },
  {
    question: "10. Check if a value is NaN using isNaN().",
    code: "console.log(isNaN(\"hello\"));\nconsole.log(isNaN(123));",
    englishExplanation: "`isNaN()` checks if the value is Not-a-Number.",
    urduExplanation: "`isNaN()` check karta hai ke value number nahi hai."
  },
  {
    question: "11. Declare a variable and don't assign it — what is its type?",
    code: "let test;\nconsole.log(typeof test);",
    englishExplanation: "If you declare a variable without value, it is `undefined`.",
    urduExplanation: "Jab koi variable value ke bina declare kiya jaye to woh `undefined` hota hai."
  },
  {
    question: "12. Use Array.isArray() to check an array.",
    code: "let items = [1, 2, 3];\nconsole.log(Array.isArray(items));",
    englishExplanation: "`Array.isArray()` checks whether a value is an array or not.",
    urduExplanation: "`Array.isArray()` se pata chalta hai ke value array hai ya nahi."
  },
  {
    question: "13. Create a variable and assign a BigInt value.",
    code: "let bigNum = 12345678901234567890n;\nconsole.log(typeof bigNum);",
    englishExplanation: "BigInt is used for very large integers.",
    urduExplanation: "BigInt bohat bare numbers ko store karne ke liye use hota hai."
  },
  {
    question: "14. Create a Symbol and log it.",
    code: "let sym = Symbol(\"id\");\nconsole.log(sym);",
    englishExplanation: "`Symbol()` creates a unique value used as an identifier.",
    urduExplanation: "`Symbol()` aik unique value banata hai jo usually identifier ke tor pe use hoti hai."
  },
  {
    question: "15. Compare null and undefined.",
    code: "console.log(null == undefined);\nconsole.log(null === undefined);",
    englishExplanation: "`null == undefined` is true because both mean 'empty', but `===` checks type too.",
    urduExplanation: "`null == undefined` true deta hai kyunke dono khaali hotay hain, lekin `===` type bhi check karta hai is liye false aata hai."
  }
];
