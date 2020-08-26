function palindrome(str){
    // assign front and back pointer
    let front = 0; 
    let back = str.length - 1;
    
    // back and front pointer wont always meet in the middle so we use (back>front)
    while ( back > front ) {
        //increment the front pointer if it dosent meet criteria
        if (str[front].match(/[\W_]/)){
            front ++
            continue;
        }
        // decrement back pointer if doesent meet criteria
        if (str[back].match(/[\W_]/)) {
            back --
            continue
        }
        // finally does the comparision on the current character
        if (str[front].toLowerCase() !== str[back].toLowerCase()) return false
        front ++;
        back--;
    } 
    return true
}
palindrome("eye")