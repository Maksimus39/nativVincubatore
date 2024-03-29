//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"

// function repeatString(substring, repeats, separator) {
//     let result = "";
//
//     for (let i = 0; i < repeats; i++) {
//         result += substring;
//
//         if (i < repeats - 1) {
//             result += separator;
//         }
//     }
//
//     return result;
// }
//
// console.log(repeatString("yo", 3, " "));       // "yo yo yo"
// console.log(repeatString("yo", 3, ","));       // "yo,yo,yo"
// console.log(repeatString("yo", 3, ", "));      // "yo, yo, yo"
// console.log(repeatString("yo", 0, ", "));      // ""
// console.log(repeatString("yo", 1, ", "));      // "yo"















//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false



// function checkStart(str, substr) {
//     return str.toLowerCase().startsWith(substr.toLowerCase());
// }
//
// console.log(checkStart("Incubator", "inc"));   // true
// console.log(checkStart("Incubator", "yo"));    // false


// 3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
// truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."


// function truncateString(str, num) {
//     if (str.length <= num) {
//         return str;
//     } else {
//         return str.slice(0, num) + "...";
//     }
// }
//
// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10));  // "Всем студе..."




//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи.") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// getMinLengthWord(true) => null
// getMinLengthWord(undefined) => null

// function getMinLengthWord(sentence) {
//     if (typeof sentence !== 'string' || sentence === '') {
//         return null;
//     }
//
//     const words = sentence.split(' ');
//     let minLengthWord = words[0];
//
//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length < minLengthWord.length) {
//             minLengthWord = words[i];
//         }
//     }
//
//     return minLengthWord;
// }
//
// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи."));  // "Всем"
// console.log(getMinLengthWord(""));  // null
// console.log(getMinLengthWord(123));  // null
// console.log(getMinLengthWord(true));  // null
// console.log(getMinLengthWord(undefined));  // null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"
// function setUpperCase(sentence) {
//     const words = sentence.toLowerCase().split(' ');
//     const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     return capitalizedWords.join(' ');
// }
//
// const sentence = "всем стУдентам инкуБатора Желаю удачИ";
// const result = setUpperCase(sentence);
// console.log(result); // Всем Студентам Инкубатора Желаю Удачи!




// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.



// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true 
// isIncludes("Incubator", "inba") => true  
// isIncludes("Incubator", "Incubatorrr")=> true 





  




