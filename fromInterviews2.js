// function findMaxSum(list) {
//     var first;
//     var second;

//     if (list[0] > list[1]) {
//         first = list[0];
//         second = list[1];
//     } else {
//         first = list[1];
//         second = list[0];
//     }

//     for (var i = 2; i < list.length; i++) {
//         if (list[i] > first) {
//             second = first;
//             first = list[i];
//         } else if (list[i] > second) {
//             second = list[i];
//         }
//     }

//     console.log(first + second);
// }

// findMaxSum([5, 9, 7, 11, 11, 6, 1]);


// function setup() {
//     var lis = document.querySelectorAll('ul li');
//     for (var i = 0; i < lis.length; i++) {
//         lis[i].addEventListener('click', function (e) {
//             // Write your code here
//             $(this).parent().prependTo(lis[i - 1]);
//         });
//     }
// }

// setup();


// function allPrefixes(prefixLength, words) {
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > prefixLength) {
//             var a = words[i].substring(0, prefixLength);
//             console.log(a);
//         }
//     }
// }

// allPrefixes(3, ["flow", "flowers", "flew", "flag", "fm"]);


// returns negative numbers in parentheses
// function toAccounting(n) {
//     if (n < 0) {
//         return console.log('(' + Math.abs(n) + ')');
//     } else if (n >= 0) {
//         return console.log(n);
//     }
// }

// toAccounting(0);



// select examination.student_id, examination.subject, count(examination.subject)
// from examination
// group by examination.student_id, examination.subject;


// <? php

// // DONT MODIFY ME
// // this function is used elsewhere and must return a string
// function divide($i, $j) {
//     return strval($i % $j);
// }

// function activecampaign($start) {
//     $i = $start;
//     $r = array();
//     while ($i <= 100) {
//         if (divide($i, 15) === "0") {
//             array_push($r, "ActiveCampaign");
//         } elseif(divide($i, 10) === "0") {
//             array_push($r, "Campaign");
//         } elseif(divide($i, 3) === "0") {
//             // $r[] = "Active";
//             array_push($r, "");
//         } elseif(divide($i, 5) === "0") {
//             array_push($r, "Active");
//         } else {
//             array_push($r, "");
//         }

//         $i += 1;
//     }

//     return ($r);
// }

// $fptr = fopen(getenv("OUTPUT_PATH"), "w");
