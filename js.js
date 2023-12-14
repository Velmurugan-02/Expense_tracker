let income = document.getElementById('income');
let income_btn = document.getElementById('btn_cal');
let ans_div = document.getElementById("ans_div");

let reason = document.getElementById("reason");
let amount = document.getElementById("amount");
let btn_amount = document.getElementById("btn_amount");
let reason_div = document.getElementById("reason_div");
let sum=0;

let add=()=>{
    let reason_value=reason.value;
    let amount_value=Number(amount.value);
    if(reason_value=="")return alert("Enter Reason");
    if(amount_value=="")return alert("Enter Amount");
    let h1_reason = document.createElement("h1");
    h1_reason.classList.add("reasons");
    h1_reason.innerHTML=`Reason:${reason_value} Expense:${amount_value}`;
    reason_div.append(h1_reason);
    sum+=amount_value;
    reason.value="";
    amount.value="";
}

// let enter_add=(event)=>{
//     if(event.key=== "Enter")btn_amount.click();
// }

// btn_amount.addEventListener('click',add);

let main=()=>{
    let income_value=income.value;
    if(income_value==="")return alert("Enter Income");
    let expenses = sum;
    let savings = income_value-sum;
    let expenses_ans = document.createElement("h1");
    let income_ans = document.createElement("h1");
    expenses_ans.innerHTML=`Expanses:${expenses}`;
    income_ans.innerHTML=`Savings:${savings}`;
    ans_div.append(expenses_ans);
    ans_div.append(income_ans);
    income_value="";
}
