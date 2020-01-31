const CounterComponent = {
  template: `
  <div class="counter">
    <div class="counter-value">
      Count: {{ count }}
    </div>
    
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button></br>
    <button @click="zero">Zero</button></br>
    <button @click="plus100">+100</button>
    <button @click="minus100">-100</button></br>
    <button @click="tick">Tick Up</button>
    <button @click="tick2">Tick Down & Up</button>
    <button @click="stop">Stop</button>
  </div>
  `,
  
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    this.increment(),
    this.decrement(),
    this.zero(),
    this.plus100(),
    this.minus100(),
    this.tick(),
    this.tick2(),
    this.stop()
  },
  methods: {
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1;
    },
    zero() {
      this.count = 0;
    },
    plus100() {
      this.count += 100;
    }, 
    minus100() {
      this.count -= 100;      
    },
    tick() {
     t = setInterval(()=>{
      if(Math.abs(this.count) < 10) {
         this.count += 1;
      } else if(Math.abs(this.count > 10 && this.count < 100)) {
         this.count += 5;
      } else {
         this.count += 10;
      }
     }, 1000);
    },
    tick2() {
      t2 = setInterval(() => {
        if(this.count < 10 && this.count >= 0) {
          this.count += 1;
        } else if(this.count > -10 && this.count < 0) {
          this.count -= 1;
        } else if(this.count > 9 && this.count < 100) {
          this.count += 5;
        } else if(this.count < -9 && this.count > -100) {
          this.count -= 5;
        } else if(this.count < -101) {
          //this.count -= Math.random() * 10 + 2;
          this.count -= 10;
        } else {
          this.count += 10;
        }
      }, 1000);
    },
    stop() {
      clearInterval(t);
       clearInterval(t2);
    }
  }
}
