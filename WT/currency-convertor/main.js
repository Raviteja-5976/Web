function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = document.getElementById("amount").value;
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    document.getElementById("spinner").style.display = "block";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const conversionRate = data.rates[toCurrency];
        const convertedAmount = amount * conversionRate;
        document.getElementById("convertedAmount").value = convertedAmount.toFixed(2);
        
        document.getElementById("spinner").style.display = "none";
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById("spinner").style.display = "none";
      });
  }