
/**
* Perform the following three steps, and return the result:
* 
* 1. Transform the data:
* a. Add 1 to even numbers in the list.
* b. Subtract 1 from odd numbers in the list.
* 2. Filter the data in the list (i.e., using results from #1):
* a. Remove items less than 3.
* 3. Summarize (add up) the data in the list (i.e., using results from #2).
* SUM(), =SUM(...)
*/
// constcalculate = (data: number[]): number => {
//     return data;
// };
var arr = [0, 1, 1, 2, 3, 5, 8, 13]
// calculate(arr);
function calculate(array) {
    console.log(array.map((a) => {
        if (a % 2 === 0) {
            return a + 1
        } else {
            return a - 1
        }
    }).filter((a) => {
        return a >= 3
    }))

    var res = array.map((a) => {
        if (a % 2 === 0) {
            return a + 1
        } else {
            return a - 1
        }
    }).filter((a) => {
        return a >= 3
    }).reduce((acc, curr) => {
        return acc + curr
    })
    // console.log(res)
}

/*** Implement the `findSecondHighest` Function which finds the second* highest number
 *  in an Array of numbers.*/
const findSecondHighest = (data) => {
    // data = data.sort((a, b) => { return a - b });
    // var n = data.length;
    // console.log(data);
    // return data[n - 2];
    var smallest = 999999;
    var second = 999999;
    for (const i in data) {
        if (data[i] < smallest) {
            second = smallest;
            smallest = data[i]
        } else if (data[i] != smallest && data[i] < second) {
            second = data[i]
        }
    }
    if (second == 999999) {
        return false
    }
    else return second
};
var arrayE = [100, 10100, 10001, 200, 32, 4, 50];
const result = findSecondHighest(arrayE);
console.log(result)

/*** Implement a `timeout` Function which is a Promisified version of setTimeout.*
 *  It should accept a number (in ms) as an argument and return a 'thenable' Function.*/
// export const timeout = (time) => {}const delayTimeMilliseconds = 500;
// timeout(delayTimeMilliseconds).then((time) => {console.log(`After ${time} ms`);});

function timeout() {
    var timeO = new Promise((resolve) => {
        return setTimeout(() => {
            console.log('hi')
        }, 300);
    })
    return timeO
}

// console.log(timeout());

var ar = [1, 4, 2, 7];
var sum = 5;
console.log(check(ar));

function check(array1) {
    for (var i = 0; i < array1.length; i++) {
        for (var j = i; j < array1.length; j++) {
            if (array1[i] + array1[j] === sum) {
                return [array1[i], array1[j]]
            }
        }
    }
    return false;
}

var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel libero id diam vulputate pellentesque. Mauris ullamcorper lacinia fringilla. Quisque auctor pellentesque facilisis. Nulla odio enim, varius et erat ac, pretium egestas dui. Proin vulputate aliquet auctor. Quisque sollicitudin erat ac elit dictum, et sodales elit volutpat. Nunc tellus tortor, mattis eu nibh in, mattis pulvinar neque. Duis fermentum mauris tortor, vitae ullamcorper sapien lobortis eget. Morbi odio turpis, commodo et porta vel, eleifend quis felis. Vivamus commodo elit placerat urna porta, sed vestibulum leo laoreet. Curabitur vitae venenatis ex, eget euismod lorem. Nulla sed aliquam lectus. Suspendisse consectetur leo ut tortor luctus dapibus. Integer quis magna quam."

// console.log(findMx(str));
function findMx(str) {
    var ob = {}
    str = str.match(/\w+/g)
    for (let word of str) {
        if (ob[word]) {
            ob[word]++;
        } else {
            ob[word] = 1;
        }
    }
    var someArray = [];
    // for(const i in ob){
    //     someArray.push([i, ob[i]])
    // }
    // var bb =someArray.sort((a,b)=> {return a[1]-b[1]});
    var bb = Object.keys(ob).sort((a, b) => { return ob[a] - ob[b] })
    console.log(ob)
    var list = { "you": 100, "me": 75, "foo": 116, "bar": 15 };
    var keysSorted = Object.keys(list).sort(function (a, b) { return list[a] - list[b] })
    // console.log(keysSorted);     
    let max = 0;
    let rep = "";
    for (let word of str) {
        if (ob[word] > max) {
            max = ob[word];
            rep = word;
        }
    }
    console.log(rep, max)
    return rep
}

var examArray = [6, 2, 51, 1, 9];
var amp = examArray.map((a) => { return a + 2 });
console.log(amp)
var search = 9;
// console.log(searchFun(examArray, search));

function searchFun(a, sea) {
    // a = a.sort((c,b)=>{ return c-b});
    console.log(a, 'undsorted')
    a = quickSort(a);
    console.log(a, 'sorted');
    var mid = a.length / 2;
    var min = 0;
    var max = a.length;
    while (a[mid] != sea && min < max) {
        if (sea < a[mid]) {
            max = mid - 1
        } else {
            min = mid + 1
        }
        mid = Math.floor((max + min) / 2)
    }
    if (a[mid] == sea) {
        return a[mid]
    } else {
        return 'not found'
    }
}

function quickSort(a) {
    if (a.length < 2) {
        return a
    } else {
        var pivot = a.pop();
        var left = [];
        var right = [];
        var sorted = []
        for (const value of a) {
            if (value < pivot) {
                left.push(value)
            } else {
                right.push(value)
            }
        }
        return sorted.concat(quickSort(left), pivot, quickSort(right))
    }
}

var nk = 8; //changeto n
var bennyArra = [7, 3, 4, 6, 3, 1, 0, 11];
var sumToMatc = 5;

console.log(calculatAftSort(bennyArra, sumToMatc), 'benny');

function calculatAftSort(bennyArray, sumToMatch) {
    bennyArray.sort((a, b) => { return a - b })
    return bennyArray
}

function calculat(bennyArray, sumToMatch) {
    var diff = 0;
    var res = 0;
    for (var i = 0; i < bennyArray.length; i++) {
        for (var j = i + 1; j < bennyArray.length; j++) {
            if (Math.abs(bennyArray[i] - bennyArray[j]) == sumToMatc) {
                res = bennyArray[i] + bennyArray[j];
                return res;
            } else if (Math.abs(bennyArray[i] - bennyArray[j]) - sumToMatc > (Math.abs(sumToMatc - diff))) {
                diff = Math.abs(bennyArray[i] - bennyArray[j]);
                res = bennyArray[i] + bennyArray[j];
            }
        }
    }
    return res;
}

var word = 'ABC';
var recs = [];
// console.log(find(word));
function find(worda) {
    for (const char of worda) {
        if (recs.includes(char)) {
            return char;
        } else {
            recs.push(char)
        }
    }
    return false;
}

var arry2 = [2, 3, 10, 20, 4, 2, 5, 9, 1];
var resMul = 20;

// console.log(solveHash(arry2, resMul));
function solve(ar2, resMu) {
    ar2 = ar2.sort((a, b) => { return a - b });
    console.log(ar2);
    var res = [];
    var i = 0; var j = ar2.length - 1;
    console.log(i, j, ar2[i] * ar2[j], resMu)
    while (i != j) {
        if (ar2[i] * ar2[j] == resMu) {
            res.push([ar2[i], ar2[j]]);
            i = i + 1;
        } else if (ar2[i] * ar2[j] < resMu) {
            i = i + 1;
            console.log('2')
        } else if (ar2[i] * ar2[j] > resMu) {
            j = j - 1;
            console.log('3')
        }
    }
    return res;
}

function solveHash(ar2, resMu) {
    console.log(ar2)
    var hashObj = {};
    var res = [];
    for (const num of ar2) {
        if (hashObj[num]) {
            res.push([num, resMu / num]);
        } else {

            console.log(hashObj[resMu / num], resMu / num)
            hashObj[resMu / num] = 1
        }
    }
    console.log(hashObj)
    return res;
}

var searchItem = 4;
var box = [3, 6, 4, 2, 9, 23, 45, 2, 33, 13, 99];
var found = box.filter((a) => a == searchItem);
var mid = Math.floor(box.length / 2);
var low = 0;
var high = box.length;
box = insertionSort(box)
console.log(box)
while (box[mid] !== searchItem && low < high) {
    if (searchItem > box[mid]) {
        low = mid - 1;
    } else {
        high = mid + 1;
    }

    mid = Math.floor(low + high / 2);
}
if (box[mid] == searchItem) {
    console.log('binary searc', [box[mid], mid])
}
// console.log(found, '.....');


function swap(a, l, r) {
    if (a[l] > a[r]) {
        var temp = a[l];
        a[l] = a[r];
        a[r] = temp;
    }

};
function bubbleSort(a) {
    var arrlength = a.length;
    do {
        for (let i = 0; i < a.length; i++) {
            var j = i + 1;
            if (a[i] > a[j]) {
                swap(a, i, j);
            }
        }
    }
    while (arrlength--);
    return a
}

function insertionSort(a) {
    var curr, j;
    for (let i = 1; i < a.length; i++) {
        curr = a[i];
        j = i;
        while (j > 0 && a[j - 1] > curr) {
            a[j] = a[j - 1];
            j--;
        }
        a[j] = curr;
    }
    return a;
}

box = [3, 6, 4, 2, 9, 23, 45, 33, 13, 99];
console.log('......', box, reverseArray(box, 0, box.length - 1));
function reverseArray(a, l, h) {
    if (l >= h) {
        return a;
    } else {
        var temp = a[l];
        a[l] = a[h];
        a[h] = temp;
        l++;
        h--;
        console.log(a)
        reverseArray(a, l, h);
    }
    return a;
}
console.log(rotateArray(box))
function rotateArray(a) {
    let temp = a[a.length - 1];
    for (let i = a.length - 1; i > 0; i--) {
        a[i] = a[i - 1];
    }
    a[0] = temp;
    return a;
}

console.log(removeDuplicates(box))

function removeDuplicates(a) {
    var b = []
    var valye = false;
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i]) !== i) {
            valye = true;
        } else {
            b.push(a[i])
        }
    }
    b.push(valye)
    return b;
}

/*
n-> n-1
n -> n/2
n -> n/3
*/
function findMinCost(res) {
    const cache = [];
    cache[1] = 0;
    for (let i = 2; i <= res; i++) {
        var a = 1000, b = 1000, c = 1000;
        a = 1 + cache[i - 1];
        if (i % 2 === 0) {
            b = 1 + cache[i / 2];
        }
        if (i % 3 === 0) {
            c = 1 + cache[i / 3];
        }
        cache[i] = Math.min(a, b, c);
    }
    console.log(cache)
    return cache[res];
}
console.log(findMinCost(5), 'jjjjjj')

function topDown(n, memo) {
    if (typeof (memo[n]) != 'undefined') {
        return memo[n]
    }
    if (n <= 1) {
        return 0;
    }
    var a = 1000, b = 1000, c = 1000;
    a = 1 + topDown(n - 1, memo)
    if (n % 2 === 0) {
        b = 1 + topDown(n / 2, memo)
    }
    if (n % 3 === 0) {
        b = 1 + topDown(n / 3, memo)
    }
    return memo[n] = Math.min(a, b, c);
}
var memoi = [];
console.log(topDown(5, memoi))

function fiboBottomUp(numm) {
    var res = []
    res[0] = 1;
    res[1] = 1;
    for (var i = 2; i <= numm; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    console.log(res)
    return res[numm - 1]
}

console.log(fiboBottomUp(10))


/*
top down
1.memoize
2.recursion
*/
function fiboTop(num1, memo) {
    if (typeof (memo[num1]) != 'undefined') {
        return memo[num1]
    }
    if (num1 == 0) {
        return 0
    }
    if (num1 == 2 || num1 == 1) {
        return 1;
    }
    return memo[num1] = fiboTop(num1 - 1, memo) + fiboTop(num1 - 2, memo)
}

var memo = []
console.log(fiboTop(10, memo));

function isBalanced(c) {
    var open = ['{', '[', '('];
    var close = ['}', ']', ')'];
        
    var stack = [];
    for (const i of c) {
    console.log(i)
        if (open.indexOf(i) >= 0) {
            stack.push(i)
        } else if (open.indexOf(stack.pop()) !== close.indexOf(i)) {
            return false;
        }
    }
    
    console.log(stack)
    if (stack.length > 0) {
        return false;
    }
    return true
}
console.log(isBalanced('[{{{}}'))

function greedy(){
var coins = [10,5,2,1];
var s = 46;
var remain = s;
var count = {};
for(const i of coins){
    count[i]= 0;
    if(remain == 0){
        return count;
    }
    while(i <= remain){
        remain = remain - i;
        count[i] = count[i]+1;
    }
}
return count;
}

console.log(greedy())

var a = [1, 5, 6, 7, 1, 2, 3, 3, 2, 1, 5, 5, 6, 7, 9, 10];
var b = [];

for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i] == a[j]) {
        a.pop(a[i])
        }
    }
}
// console.log(a)
var a = [{ id: 1 }, { id: 2 }, { id: 5 }];
a = [...new Set(a)]

a = a.map((s) =>
    s.id
).reduce((acc, v) => v * v, 1)

console.log(a)

let u = [...new Set(a)]
console.log(u);

a.forEach((element, index) => {
    if(a.indexOf(element) == index) {
        console.log( element)
    }
});

console.log(a.filter((element, index) => {
    return a.indexOf(element) == index
}))

console.log((new Set(a)));

function closure() {
    var count = 0;
    function innerFunction() {
        return count += 1;
    }

    return innerFunction;
}
// var a = closure();
// console.log(a());
// console.log(a());
// console.log(a());

function Counter() {
    var x = 0;

    function IncreaseCounter() {
        return x += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
// console.log(counter()); // 4


function Y() {
    var y = 0;
    function z() {
        return y += 1;
    }
    return z
}

var coun = Y();
// console.log(coun());
// console.log(coun());
// console.log(coun());



function currying(q) {
    q = q + 3
    return function (w) {
        return function (e) {
            return q * w * e
        }
    }
}
// console.log(currying(1)(6)(3));


var Input = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
// rearrange(Input)
function rearrange(array) {
    let pos = [];
    let neg = [];
    for (const element of array) {
        if (element >= 0) {
            pos.push(element)
        } else {
            neg.push(element)
        }
    }
    let length = (pos.length + neg.length) - 1;
    var j = pos.length;
    var i = 0;
    var arr = pos.concat(neg)
    console.log(arr, i, j, length)
    while (i != j && j <= length) {
        arr = swap(arr, i, j)
        j++;
        i = i + 2;
    }
    console.log(length, pos, neg)
    let res = neg;
    let Resu = [];
    for (let i = 0; i <= length; i++) {
        Resu[i] = res.shift();
        if (res == neg && pos.length != 0){
            res = pos;
        }
        else if (res == pos && neg.length != 0) {
            res = neg;
        }

    }
    console.log(arr)
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(arr, 'jj')
    return arr;
}

var ie = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
sort1s(ie);

function sort1s(input){
    let l = 0;
    let m = 0;
    let h = input.length-1;
    while(m <=h){
        if(input[m]==0){
            swap(input,m,l);
            l++;
            m++;
        } else if(input[m]==1){
            m++;
        } else {
            swap(input,m,h);
            h--;
        }
    }
// console.log(input)
}

function printRepeating(arr, size)
{
    let i;
    for (i = 0; i < size; i++) {
        var abs_value = Math.abs(arr[i]);
        if (arr[abs_value] >= 0)
            arr[abs_value] = -arr[abs_value];
        else
            console.log(abs_value + " ");
    }
}
// Driver Code
    let arr = [1, 2, 3, 4 ,3, 3, 2];
    arr.sort((ab,bc)=> ab-bc);
    console.log(arr, 'jjjj')
    let arr_size = arr.length;
    printRepeating(arr, arr_size);

var arr = [3,1,6,8,2];
var temp = arr[arr.length-1];
for(let i=arr.length-1;i>=0; i--){
arr[i] = arr[i-1]
}
arr[0]=temp;
console.log(arr);


var result = "";


var input='thisIsAVariable';
      for (var i = 0; i < input.length; i++)
      {
       if(input[i]=='_'){
           input = input.substring(0, i) + input[i+1].toUpperCase() + input.substring(i+2);
       } else if(input[i] == input[i].toUpperCase()){
           input = input.substring(0,i) + '_' +input[i].toLowerCase() +input.substring(i+1);
       }
      }
      
      console.log(input);


      constructor(route: Router)

      const routes =[ {component: apiCompo, path: '/cart', loadchilder: ()=> import('./card/Cart.module).then(m => m.c) #cartModule' }]

      TransformStream(items, searchTerm){
          items.filter((item)=> {this.applyFilter(item, searchterm)})
      }


      let vaue: behaviotSubject;

      @output value: eventEmiter = new

var str = "appppa";
console.log(str.split('').reverse().join('') === str);

var x=1221;
console.log('number is',check(x));

function check(n){
    let ori = n;
    let rem = 0; 
    let rev = 0;
    while(n!=0){
    rem = n%10;
    rev = rev * 10 + rem;
    n = Math.floor(n/10);
    }
    if(ori === rev){
        return true;
    }
    return false
}

var s = "today is saturday and it is a nice day";
var res = s.split(' ').map((word, i)=> {
    if(i%2===0){
    return word.charAt(0).toUpperCase()+word.substr(1);
    } else{
        return word;
    }
}).join(' ');
console.log(res);
