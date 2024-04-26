/*encrypt*/
function encrypt(){
    const inputText = document.getElementById("input-text").value;
    const key = parseInt(document.getElementById("key").value);
    
    let encryptedText = "";
    for(let i=0; i<inputText.length; i++){
        const charCode = inputText.charCodeAt(i);
        
        if(charCode >= 65 && charCode <=90){
            //Encrypt uppercase characters
            encryptedText += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
        }
        else if(charCode >= 97 && charCode <= 122){
            //Encrypt lowercase characters
            encryptedText += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
        }
        else {
            //keep non-alphabetic character as they are
            encryptedText += inputText[i];
        }

    }
    document.getElementById("output-text").value = encryptedText; 
}
/*encrypt*/

/*decrypt*/
function decrypt(){
    const inputText = document.getElementById("input-text").value;
    const key = parseInt(document.getElementById("key").value);
    
    let decryptedText = "";
    for(let i=0; i<inputText.length; i++){
        const charCode = inputText.charCodeAt(i);
        
        if(charCode >= 65 && charCode <=90){
            //Decrypt uppercase characters
            decryptedText += String.fromCharCode(((charCode - 65 - key + 26) % 26) + 65);
        }
        else if(charCode >= 97 && charCode <= 122){
            //Decrypt lowercase characters
            decryptedText += String.fromCharCode(((charCode - 97 - key + 26) % 26) + 97);
        }
        else {
            //keep non-alphabetic character as they are
            decryptedText += inputText[i];
        }

    }
    document.getElementById("output-text").value = decryptedText; 
}
/*decrypt*/