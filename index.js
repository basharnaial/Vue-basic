const { createApp } = Vue

// create A First Components In Vue js #1
const newComp = {
    props:{
        num:{
            type:Number,
            required:true
        }
    },
    template:`
    <button :class="getErrorstyle(num)" :title="num" @click="fireNum">{{num}}</button>
    `,
    methods:{
      fireNum(){
        // console.log("fired")
        this.$emit('Fire', {num:this.num, name:"Bashar"});
      },
        getErrorstyle(num) {
            if(this.isEven(num)){
            return 'red'
            } 
            return 'green'
        },
        isEven(num) {
            return num % 2 === 0;
      },
    },
}

const app = createApp({
    components:{
    newComp
    },
    template: `

    <!-- -----------------------LOOP IN FIRST WE ADD DATA NUMBER THEN-------- -->
    <div>
  <newComp v-for="num in numbers"  :num="num" @fire="parentFired" />  
  </div>
  <div>
  <newComp v-for="num in firedNumber"  :num="num" />  
    </div>



    `,   

    data() {
    return {
      num:0,
      message: 'Hello Vue!',
      person:{
        name:"bashar",
        age:20,
        family:"Naial"
    },
    count: 0,
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    inputVal: '',
    inputCheck: ['Yes'] ,
    error:'',
    firedNumber:[]
    }
  },
  methods:{
    parentFired(vars){
      console.log('parentFired', vars.num);
      this.firedNumber.push(vars.num)
    },
    input($val){
      console.log($val.target.value);
      var value = $val.target.value;
      this.inputVal = value;
      if(value.length > 5){
        this.error = ""
      }else{
      this.error = "value Must Be More than 5 chars "

      }
     },
    increamant(){
        this.count += 3;
     },
    isEven(number) {
     return number % 2 === 0;
      },
    getErrorstyle() {
     return 'text-red-500 bg-red-100 p-2 fixed'
     }
},
computed:{
     compNum(){
      return this.numbers.filter(number =>this.isEven(number));
     }
}
}).mount('#app')

window.app = app;