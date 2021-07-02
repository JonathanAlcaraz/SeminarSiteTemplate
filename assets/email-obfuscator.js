/*
 *  USE THIS WEBSITE TO GENERATE THE JAVASCRIPT FOR A OBFUSCATED EMAIL: 
 *
 *     http://rot13.florianbersier.com/
 *
 *  ENTER THE EMAIL ADDRESS AND ANCHOR TEXT. COPY EVERYTHING WITHIN THE SCRIPT
 *  TAG AND PASTE BELOW. EDIT THE ELEMENT ID APPROPRIATELY. THE SCRIPT USES 
 *  SUBSTITUTION CYPHER ENCRYPTION VIA ROT13. IT'S NOT HARD TO FIGURE OUT HOW
 *  IT WORKS AND YOU CAN EDIT THE SCRIPTS MANUALLY ONCE YOU NOTICE THE PATTERN.
 *
 */

window.onload = function () {

    // Janet Michaels
    document.getElementById("Janet-email").innerHTML="<n uers=\"znvygb:wnarg@snxrrznvy.pbz\" gnetrg=\"_oynax\">Rznvy Wnarg</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

    // Doug Forcett
    document.getElementById("firstname-email").innerHTML="<n uers=\"znvygb:qbht@snxrrznvy.pbz\" gnetrg=\"_oynax\">Rznvy Qbht</n>".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);});

};

