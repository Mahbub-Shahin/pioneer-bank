const loginBtn = document.getElementById('login-btn');
const loginArea = document.getElementById('login-area');
const transectionArea = document.getElementById('transiction-area');

const depositBtn = document.getElementById('addDeposit')
const withdrawBtn = document.getElementById('addWithdraw')

const depositAmount = document.getElementById('depositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');

const currentDeposit = document.querySelector('.currentDeposit');
const currentWithdraw = document.querySelector('.currentWithdraw');
const currentBalance = document.querySelector('.currentBalance');


loginBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';
    transectionArea.style.display = 'block';
});

depositBtn.addEventListener('click', () => {
    const depositNumber = inputAmount(depositAmount);

    updateAllAmount(currentDeposit, depositNumber);
    updateAllAmount(currentBalance, depositNumber);

    depositAmount.value = '';
});

withdrawBtn.addEventListener('click', () => {
    const withdrawNumber = inputAmount(withdrawAmount);

    updateAllAmount(currentWithdraw, withdrawNumber);
    updateAllAmount(currentBalance, -1 * withdrawNumber);

    withdrawAmount.value = '';
});

function inputAmount(id){
    let amountNumber = id.value;
    let amount = parseFloat(amountNumber);
    return amount;
}

function updateAllAmount(id, number){
    let current = id.innerText;
    let currentNumber = parseFloat(current);
    let totalAmount = number + currentNumber;
    id.innerText = totalAmount;
}