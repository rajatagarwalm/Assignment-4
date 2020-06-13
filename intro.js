//Very easy Question 1
console.log('\n==>output of Very easy Question 1');
function myTime(time) {
    var sec = time * 60;
    return time+"minutes =>"+ sec+"seconds";
 }
console.log(myTime(5));
console.log(myTime(3));
console.log(myTime(2));

//Very easy Question 2
console.log('\n==>output of Very easy Question 2');
function dividesevenly(a , b){
    if(a%b==0){
        console.log('true');
    }else{
        console.log('false');
    }
}
dividesevenly(98, 7);
dividesevenly(85, 4);

//easy question 1
console.log('\n==>output of easy Question 1');
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return 'Occurence of '+letter+' in '+str+' => '+letter_Count+' times. ';
}
console.log(char_count('edabit', 'a'))
console.log(char_count('Chamber of secrets', 'c'));
console.log(char_count('big fat bubble', 'b'));

//easy question 2
console.log('\n==>output of easy Question 2');
function addup(num) {
    var s = 0;
    for (var i=0; i <= num; i++) {
        s = s + i;
    }
    return 'addup ('+num+') => '+s;
}
console.log(addup(4));
console.log(addup(13));
console.log(addup(600));

//easy question 3
console.log('\n==>output of easy question 3')
let replaceVowel = function(name){
    let a = name.replace(/a/gi, '1');
    let e = a.replace(/e/gi, '2');
    let i = e.replace(/i/gi, '3');
    let o = i.replace(/o/gi, '4');
    let u = o.replace(/u/gi, '5');
    return name+" => "+u;
}
result = replaceVowel('karachi');
console.log(result);
result = replaceVowel('chembur');
console.log(result);
result = replaceVowel('khandbari');
console.log(result);

//medium Question 1
console.log('\n==>output of medium Question 1');
function spe_Reverse(sent,letter){
    let words = sent.toLowerCase().split(' ');
    for(let i = 0; i<words.length; i++){
        if(words[i][0] == letter){
            words[i] = words[i].split('').reverse('').join('');
        }
    }
    return words.join(' ');
}
console.log(spe_Reverse('word searches are super fun', 's'));
console.log(spe_Reverse('first man to walk on the moon', 'm'));
console.log(spe_Reverse('peter piper picked pickled peppers', 'p'));

//medium Question 2
console.log('\n==>output of medium Question 2');
function identical(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return array+' => False';
        }
    }
    return array+' => true';
}
var arr = ["@","@","@","@"];
console.log(identical(arr));
var arr = ["abc","abc","abc","abc"];
console.log(identical(arr));
var arr = ["SS","SS","SS","SS"];
console.log(identical(arr));
var arr = ["&","&&","&&&","&&&&"];
console.log(identical(arr));
var arr = ["SS","SS","SS","Ss"];
console.log(identical(arr));

//medium question 3
console.log('\n==>output of medium Question 3');
function removedups( array ){
    var unique='';
    for(var i=0; i<array.length; i++){
        if(unique.indexOf(array[i])==-1){
            unique += array[i];
        }
    }
    return array +" After remove duplicates is:- "+unique;
}
var arr = ["1 ","0 ","1 ","0 "];
console.log(removedups(arr));
var arr = ["The ","big ","cat"];
console.log(removedups(arr));
var arr = ["John ","Taylor ","John"];
console.log(removedups(arr));

//hard question 1
console.log('\n==>output of hard question 1');
function realType(value){
    if(value == null){
    return 'null';
    }
    switch(typeof value){
    case(typeof 0): 
        return 'type of value is Number';
    case(typeof ''):        
        return 'type of value is String';
    case(typeof true):      
        return 'type of value is Boolean';
    case(typeof []):        
        return 'type of value is Array';
    default:                
        return 'Please use correct type';
    }
}
console.log(realType (1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType ([]));
console.log(realType(null));

//hard question 2
console.log('\n==>output of hard question 2');
function numInStr(arrOfStr){
    let strHaveNum = arrOfStr.filter( function (element){
        if(element.includes('0') || element.includes('1')|| element.includes('2')|| element.includes('3') || element.includes('4')|| element.includes('5')||element.includes('6') || element.includes('7')|| element.includes('8')|| element.includes('9')){
            return true;
        }
    });
    return "in this "+arrOfStr+" having numbers is=>"+strHaveNum;
}

console.log(numInStr(['1a', 'a', '2b', 'b']));
console.log(numInStr (['abc', 'abc10']));
console.log(numInStr (['abc', 'ab10c', 'a10bc', 'bcd']));
console.log(numInStr (['this is a test', 'test1']));