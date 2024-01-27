class Calculator {
    constructor() {
      this.display = document.getElementById('display');
      this.num1 = '';
      this.num2 = '';
      this.operation = '';
      this.isResultDisplayed = false;
    }

    numberClicked(number) {
      if (this.isResultDisplayed) {
        this.clear();
      }
      if (this.operation === '') {
        this.num1 += number;
      } else {
        this.num2 += number;
      }
      this.display.value += number;
    }

    operationClicked(operation) {
      if (this.isResultDisplayed) {
        this.isResultDisplayed = false;
        this.num1 = this.display.value;
        this.display.value = '';
      }
      this.operation = operation;
      this.display.value += operation;
    }

    calculate() {
      let result;
      switch (this.operation) {
        case '+':
          result = parseFloat(this.num1) + parseFloat(this.num2);
          break;
        case '-':
          result = parseFloat(this.num1) - parseFloat(this.num2);
          break;
        case '*':
          result = parseFloat(this.num1) * parseFloat(this.num2);
          break;
        case '/':
          result = parseFloat(this.num1) / parseFloat(this.num2);
          break;
        default:
          break;
      }
      this.display.value = result;
      this.num1 = result;
      this.num2 = '';
      this.operation = '';
      this.isResultDisplayed = true;
    }

    clear() {
      this.num1 = '';
      this.num2 = '';
      this.operation = '';
      this.display.value = '';
      this.isResultDisplayed = false;
    }
  }

  const calc = new Calculator();