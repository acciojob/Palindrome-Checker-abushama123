// complete the given function

function palindrome(str){
    var ans ="";
    for(var i = str.length; i >=0; i--){
        var c = str.charAt(i);
        ans = ans + c;
    }
    let result = ans.toLowerCase();
    if(result === str.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}
module.exports = palindrome
