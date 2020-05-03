// function Calculator () {
  //   let a, b;
  //   this.read = () => {
  //     a = +prompt('a?'), 
  //     b = +prompt('b?');
  //   };
  //   this.sum = () => a + b;
  //   this.mul = () => a * b;
  // }
  
  // let calculator = new Calculator();
  // calculator.read();
  
  // alert( "Sum=" + calculator.sum() );
  // alert( "Mul=" + calculator.mul() );
  
  // function Accumulator (startingValue) {
  //   this.value = startingValue;
  //   this.read = () => {
  //    let a = +prompt('Введите число:', 0);
  //    this.value = this.value + a;
  //   };
  // }
  
  // let accumulator  = new Accumulator(1);
  
  // accumulator.read();
  // accumulator.read();
  
  // alert(accumulator.value);
  
  // ЧАСЫ!!!
  //-----------------------------------------------
  class Clock {
    constructor({template}) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) {
        hours = '0' + hours;
      }
  
      let mins = date.getMinutes();
      if (mins < 10) {
        mins = '0' + mins;
      }
  
      let secs = date.getSeconds();
      if (secs < 10) {
        secs = '0' + secs;
      }
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);  
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  class ExtendedClock extends Clock {
    constructor ({template}, precision = 1000){
      super({template});
      this.precision = precision;
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  }
  
  let clock = new ExtendedClock({template: 'h:m:s'}, 2000);
  clock.start();
  //----------------------------------------------------------