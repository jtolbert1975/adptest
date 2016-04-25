function adptestscript(){

    //Sets up the Array
var nums = [];
nums = [1, 2, 3, 4, 5, 6, 8, 9, 11, 12, 14, 15, 20, 22, 23, 25, 28, 31, 32, 34, 37, 40, 42, 45, 57, 59, 60, 62, 64, 62, 76, 79, 89, 90, 95, 96, 97, 99, 100];



var evennums = nums.filter(function(nums) {
    return (nums & 1) === 0;
});

var maincontent = "<span>" + evennums + "</span>";


document.getElementById('test').innerHTML = maincontent;

    return false;

}