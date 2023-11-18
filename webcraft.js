let txt="";
let i;
let l=0;
let h;
let flag;
let len;
document.getElementById("pal").onclick = function()
{
    flag=0
    txt = document.getElementById("inp").value
    console.log(txt)
    len=txt.length;
    console.log(len)
    for (i = 0; i < len/2; i+=1) 
    {
        if (txt[i] != txt[len-i-1]) 
        {
            flag = 1;
        }
    }
    if(flag==0)
    {
        document.getElementById("lab").innerHTML="YES! IT IS A PALINDROME"
    }
    else
    {
        document.getElementById("lab").innerHTML="UH OH! NOT A PALINDROME"
    }
}
