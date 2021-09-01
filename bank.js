
 let totalId=document.getElementById("total");
 let totalAmount=parseFloat(totalId.innerText);
 let depositMoney= document.getElementById("deposit-money");
 let withdrawMoney= document.getElementById("withdraw-money")
 let  totalMoney=totalAmount;



    document.getElementById("deposit-btn").addEventListener("click", ()=>{

        const depositId=document.getElementById("deposit");
        const depositAmount=depositId.value;
        const previousDeposit= parseFloat(depositMoney.innerText);
        const currentDeposit= parseFloat(depositAmount);
        const totalDeposit= previousDeposit+currentDeposit;
        depositMoney.innerText= totalDeposit;
        console.log(totalAmount)
        totalMoney=totalMoney+currentDeposit;
        totalId.innerText= totalMoney;
        depositId.value=" " 
        console.log(totalMoney) 
  })
   
 document.getElementById("withdraw-btn").addEventListener("click", ()=>{
      const withdrawId= document.getElementById("withdraw");
      const withdrawAmount= withdrawId.value;
      const previousWithdraw=parseFloat(withdrawMoney.innerText);
      const currentWithdraw= parseFloat(withdrawAmount)
      const totalWithdraw= previousWithdraw+currentWithdraw;
      withdrawMoney.innerText= totalWithdraw;
      totalMoney=totalMoney-currentWithdraw;
      totalId.innerText= totalMoney;
      withdrawId.value=" ";
 })



    
