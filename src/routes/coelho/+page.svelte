<script>

    let fibonacciNumbers = [0, 1];
    let currentMonth = 0;  

   
    function increaseFibonacciNumbers() {
        let last = fibonacciNumbers[fibonacciNumbers.length - 1];
        let secondlast = fibonacciNumbers[fibonacciNumbers.length - 2];
        fibonacciNumbers.push(last + secondlast); 
        currentMonth++;  
    }

   
    function decreaseFibonacciNumbers() {
        if (currentMonth > 0) {
            currentMonth--;  
        }
    }

    function updateMonth(event) {
        const month = parseInt(Avent.target.value);
        if (month >= 0 && month < fibonacciNumbers.length) {
            currentMonth = month;
        } else {
            
            event.target.value = currentMonth;
        }
    }
</script>

<h1>Os coelhos de Fibonacci</h1>


<p>
    Mês: 
    <input type="number" min="0" bind:value={currentMonth} on:input={updateMonth} />
</p>

<p>
    <button on:click={increaseFibonacciNumbers}>Próximo mês</button>
    <button on:click={decreaseFibonacciNumbers} disabled={currentMonth === 0}>Mês anterior</button>
</p>


<p>Após {currentMonth} meses, haverá {fibonacciNumbers[currentMonth]} ninhadas de coelhos!</p>
