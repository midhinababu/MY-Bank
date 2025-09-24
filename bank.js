function register(event){
    event.preventDefault();
    acno=regAcno.value;
    uname=regName.value;
    pswd=regPswd.value;

accountDeatils={
    acno,
    uname,
    pswd,
    balance:0
}

if(acno in localStorage){
    alert ("user already registered")
}
else{
    localStorage.setItem(acno,JSON.stringify(accountDeatils))
    alert("Registered successfully")
    window.location="/login.html"
}
const form = document.querySelector("form");
form.addEventListener("submit", register);
}


function login(event){
    event.preventDefault();
    acno=login_acno.value;
    pswd=login_pswd.value;
    if(acno in localStorage){
    accountDeatils=JSON.parse(localStorage.getItem(acno));
    if(pswd==accountDeatils.pswd){
        alert("Login successful")
        window.location='/home.html';
    }else{
        alert("incorrect password")
    }
}else{
    alert("invalid Account Number")
}
const form = document.querySelector("form");
form.addEventListener("submit", login);
}

let amt=0;
let withdraw=0;
let total_balance=0;

function deposite(event){
    event.preventDefault();
    amnt=depositeAmt.value;
    acno=depositeAcno.value;
    amnt=Math.floor(amnt);
    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno))
        if(acno==accountDetails.acno && amnt<=0){
            console.log("Invalid Value");
        }
        else{
            accountDetails.balance+=amnt;
            localStorage.setItem(acno,JSON.stringify(accountDetails))
            alert("your amount is successfully added")
           //balance amount show
            document.getElementById().innerHTML=``
        }
    }else{
        alert("Incorrect account number")
    }
    const form = document.querySelector("form");
form.addEventListener("submit", deposite);
}


function withdrawdeposite(event){
    event.preventDefault();
    witdraw=withdrawAmnt.value;
    acno=withdrawAcno.value;
    witdraw=Math.floor(witdraw)
    if (acno in localStorage){
        accountDeatils=JSON.parse(localStorage.getItem(acno))
        if(acno==accountDeatils.acno && witdraw<=0 ){
           alert("please enter the amount")
        }else if(witdraw>accountDeatils.balance){
           alert("insufficient fund")
        }else{
            alert(`Bank balance before withdrawal : ${accountDeatils.balance} Withdrawal amount:${witdraw}`)
            // alert("Bank balance before withdrawal :", accountDeatils.balance ,"Withdrawal amount:",witdraw)
            accountDeatils.balance-=witdraw;
            localStorage.setItem(acno,JSON.stringify(accountDeatils))
            alert("Your amount is successfully withdrawn. After withdrawal balance :"+accountDeatils.balance)
        }
    }else{
        alert("Incorrect Password")
    }
    const form = document.querySelector("form");
    form.addEventListener("submit", withdrawdeposite);
}

function logout(){
localStorage.clear()
window.location="./index.html"
}