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

export let CoercionQuest = [
  {
    question: "1. Concatenate a number and a string, then log the type.",
    code: `var a = 1, b = 'a';\nvar cont = a + b;\nconsole.log(typeof(cont));`,
    englishExplanation: "Number 1 is coerced to a string and added to 'a', resulting in '1a' of type string.",
    urduExplanation: "1 ko string mein convert karke 'a' ke saath jora gaya, result '1a' bana jo string type ka hai."
  },
  {
    question: "2. Use + and - with a number and string.",
    code: `var a = 1, b = 'a';\nvar sum = a + b;\nvar sub = a - b;\nconsole.log(sum);\nconsole.log(sub);`,
    englishExplanation: "+ converts number to string, - tries numeric conversion but fails, giving NaN.",
    urduExplanation: "+ number ko string bana deta hai, - string ko number banane ki koshish karta hai lekin fail hota hai is liye NaN deta hai."
  },
  {
    question: "3. Use template literals to combine values.",
    code: `var a = 'Ali', b = 23;\nvar literals = \`\${a} age is \${b}\`;\nconsole.log(literals);`,
    englishExplanation: "Template literals allow variables to be embedded inside strings using `${}`.",
    urduExplanation: "Template literals mein \`${}\` ka use hota hai jisme variables string ke andar direct lagte hain."
  },
  {
    question: "4. Use string numbers with arithmetic operations.",
    code: `console.log('5' + 5);\nconsole.log('5' - 2);\nconsole.log('5' * 2);\nconsole.log('5' / 2);`,
    englishExplanation: "+ leads to string concatenation, other operators convert string to number.",
    urduExplanation: "+ se string concat hoti hai, jabke - * / string ko number mein convert kar dete hain."
  },
  {
    question: "5. Add null to numbers.",
    code: `console.log(null + 2);\nconsole.log(5 + null);`,
    englishExplanation: "Null is treated as 0 when used in arithmetic operations.",
    urduExplanation: "Null ko arithmetic mein 0 samjha jata hai, is liye answer 2 aur 5 aata hai."
  },
  {
    question: "6. Add undefined to a number.",
    code: `console.log(undefined + 2);`,
    englishExplanation: "Undefined cannot convert to a number, so result is NaN.",
    urduExplanation: "Undefined number nahi ban sakta is liye result NaN aata hai."
  },
  {
    question: "7. Concatenate multiple strings using template literals.",
    code: `var a = 'Ali', b = 'genius', c = 'boy';\nconsole.log(\`\${a} is a \${b} \${c}\`);`,
    englishExplanation: "Template literals combine multiple string variables in one statement.",
    urduExplanation: "Template literals mein multiple strings aik hi line mein combine ki jati hain."
  },
  {
    question: "8. Find the length of a string.",
    code: `function number(a){\n  console.log(a.length);\n}\nnumber('ali');\nnumber('ali Khan');`,
    englishExplanation: ".length returns the number of characters in a string.",
    urduExplanation: ".length string ke andar kitne characters hain woh batata hai."
  },
  {
    question: "9. Use parseInt() and parseFloat() with strings.",
    code: `console.log(parseInt('ali'));\nconsole.log(parseFloat('Ali'));`,
    englishExplanation: "If string doesn’t start with a number, parsing fails and returns NaN.",
    urduExplanation: "Agar string number se start nahi hoti to parseInt ya parseFloat NaN return karta hai."
  },
  {
    question: "10. Coerce boolean to string and do arithmetic.",
    code: `var a = true;\nconsole.log(a + 2);\nconsole.log(a + 9);\nconsole.log(a - 1);\nvar b = true + '';\nconsole.log(b);`,
    englishExplanation: "Boolean true acts like 1 in math; adding empty string converts it to 'true'.",
    urduExplanation: "Boolean true ko 1 treat kiya jata hai; aur jab string se jora jaye to 'true' ban jata hai."
  },
  {
    question: "11. Concatenate string with boolean value.",
    code: `var online = 'user is online ' + false;\nconsole.log(online);`,
    englishExplanation: "Boolean false is coerced to string 'false' and added to the original string.",
    urduExplanation: "false ko string mein convert karke original string ke saath jor diya gaya."
  },
  {
    question: "12. Convert string to boolean using Boolean().",
    code: `console.log(Boolean(\"\"));\nconsole.log(Boolean(\"hello\"));`,
    englishExplanation: "Empty string is false, any non-empty string is true.",
    urduExplanation: "Khaali string false hoti hai, jabke koi bhi likhi hui string true hoti hai."
  },
  {
    question: "13. Add boolean values.",
    code: `console.log(true + true);\nconsole.log(false + 1);`,
    englishExplanation: "true becomes 1, false becomes 0 in arithmetic operations.",
    urduExplanation: "true 1 ke barabar aur false 0 ke barabar hota hai jab math operations kiye jayein."
  },
  {
    question: "14. Subtract string from number where string is not numeric.",
    code: `var subtracting = 'hello' - 2;\nconsole.log(subtracting);`,
    englishExplanation: "Non-numeric strings can’t convert to numbers, so result is NaN.",
    urduExplanation: "Non-number string ko jab minus kiya jaye to woh number nahi ban sakti, is liye NaN milta hai."
  },
  {
    question: "15. Mixed expressions: guess result before running.",
    code: `console.log('hello' + 2 + null + false);\nconsole.log(+2 + null + false + 'hai');`,
    englishExplanation: "First expression coerces everything to string; second does math then adds string.",
    urduExplanation: "Pehli expression mein sab kuch string ban gaya; doosri mein pehle numbers ka hisaab phir string add hui."
  }
];

export let FunctionsQuest = [
  {
    question: "1. Create a function that logs 'Hai World'.",
    code: `function greet() {\n  console.log("Hai World");\n}\ngreet();`,
    englishExplanation: "A simple function `greet` prints a message when called using `greet()`.",
    urduExplanation: "Ek simple function `greet` message print karta hai jab `greet()` se call kiya jata hai."
  },
  {
    question: "2. Create a function that takes 2 numbers and adds them.",
    code: `function sum(a, b) {\n  return console.log(a + b);\n}\nsum(1, 4);`,
    englishExplanation: "The function takes two numbers and logs their sum.",
    urduExplanation: "Function do numbers leta hai aur unka sum print karta hai."
  },
  {
    question: "3. Return the result from a function and log it.",
    code: `function result() {\n  return console.log("you are pass");\n}\nresult();`,
    englishExplanation: "The function logs the message when called.",
    urduExplanation: "Function call karne pe message print hota hai."
  },
  {
    question: "4. Call a function with arguments and without.",
    code: `function substract(a, b) {\n  return console.log(a - b);\n}\nsubstract();\nsubstract(5, 1);`,
    englishExplanation: "Without arguments it gives NaN, with numbers it works correctly.",
    urduExplanation: "Agar values na di jayein to NaN milega, warna result sahi aayega."
  },
  {
    question: "5. Create a function with a default parameter.",
    code: `function default_VAlue(a = "Ali khan is default") {\n  console.log(a);\n}\ndefault_VAlue();\ndefault_VAlue("Awais");`,
    englishExplanation: "If no value is passed, the default is used.",
    urduExplanation: "Agar koi value pass na ho to default value use hoti hai."
  },
  {
    question: "6. Create a function that returns a string with name.",
    code: `function name_greet(a) {\n  return console.log("welcome " + a);\n}\nname_greet("Ali");`,
    englishExplanation: "The name is added to 'welcome' and printed.",
    urduExplanation: "Naam 'welcome' ke sath jora jata hai aur print hota hai."
  },
  {
    question: "7. Create a function that multiplies 3 numbers.",
    code: `function multiple(a, b, c) {\n  console.log(a * b * c);\n}\nmultiple(3, 5, 6);`,
    englishExplanation: "Multiplies three numbers and logs result.",
    urduExplanation: "Teen numbers multiply kar ke result print karta hai."
  },
  {
    question: "8. Write a function expression and call it.",
    code: `var expression_fun = function sum(a, b) {\n  return console.log(a + b);\n};\nexpression_fun(2, 10);`,
    englishExplanation: "Function is stored in a variable and called later.",
    urduExplanation: "Function ko variable mein store kar ke call kiya gaya hai."
  },
  {
    question: "9. Write an arrow function that adds two numbers.",
    code: `sum = (a, b) => {\n  console.log(a + b);\n};\nsum(5, 4);`,
    englishExplanation: "Arrow functions are concise alternatives to normal functions.",
    urduExplanation: "Arrow functions short syntax hain function likhne ke liye."
  },
  {
    question: "10. Store a function in a variable and call it.",
    code: `store = () => {\n  console.log("hai every one");\n};\nstore();`,
    englishExplanation: "The function is stored and called using its variable name.",
    urduExplanation: "Function ko store karke usi naam se call kiya gaya hai."
  },
  {
    question: "11. Create a function that checks even or odd.",
    code: `num_checker = (a) => {\n  if (a % 2 === 0) {\n    console.log(a + " is even Number");\n  } else {\n    console.log(a + " is Odd Number");\n  }\n};\nnum_checker(4);\nnum_checker(15);`,
    englishExplanation: "Checks if number is even or odd using `%` operator.",
    urduExplanation: "Modulus `%` operator se even/odd check karta hai."
  },
  {
    question: "12. Call a function inside another function.",
    code: `function_inner = (a) => {\n  num_checker(a);\n};\nfunction_inner(45);`,
    englishExplanation: "One function calls another function inside it.",
    urduExplanation: "Ek function ke andar dusra function call hota hai."
  },
  {
    question: "13. Use a function in a conditional statement.",
    code: `num_checker = (a) => {\n  if (a % 2 === 0) {\n    console.log(a + " is even Number");\n  } else {\n    console.log(a + " is Odd Number");\n  }\n};\nnum_checker(4);\nnum_checker(15);`,
    englishExplanation: "Function used in condition to print based on value.",
    urduExplanation: "Condition check karke even ya odd number ka message deta hai."
  },
  {
    question: "14. Loop through an array inside a function.",
    code: `function printFruits() {\n  const fruits = ["Apple", "Banana", "Mango", "Grapes"];\n  for (let i = 0; i < fruits.length; i++) {\n    console.log(fruits[i]);\n  }\n}\nprintFruits();`,
    englishExplanation: "Loop inside function prints all fruits from array.",
    urduExplanation: "Loop ke zariye array ke tamam items print kiye ja rahe hain."
  },
  {
    question: "15. Return an object from a function.",
    code: `function createUser(name, age) {\n  return {\n    username: name,\n    userAge: age,\n    isAdult: age >= 18\n  };\n}\nconst user = createUser("Ali", 22);\nconsole.log(user);`,
    englishExplanation: "Function returns an object with user info and a calculated property.",
    urduExplanation: "Function aik object return karta hai jisme user ka data aur adult check hota hai."
  }
];
