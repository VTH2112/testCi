function  isPalindrome(str) {
    str = prompt("Nhập vào 1 chuỗi kiểm tra xem có đối xứng");
    if (str == str.split('').reverse().join('')) {
        console.log('Input : '+str +  '\t Output: true');
    }
    else {
        console.log('Input : '+str +  '\t Output: false');
    }
}
isPalindrome();