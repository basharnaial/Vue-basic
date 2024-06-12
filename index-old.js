const { createApp } = Vue

// create A First Components In Vue js #1
const newComp = {
    template:`
    <h1 class="text-green-500">Hi From a new First Components</h1>
    `
}

const app = createApp({
  // Let vue Know The components #2
    components:{
    newComp
    },
    template: `

    <!-- Show First Components #3 -->
    <newComp/>
    <!-- -----------------------------SHOW DATA BY USE TEMPLATE---------------------------- -->

    <div>
    <span>  {{ message }} </span>
    </div>
    <div>
    <span>  {{ person }} </span>
    </div>


    <div>
    <span>  {{ count }} </span>
    </div>
    

    <!-- -----------------------------SHOW DATA WITH METHOD THEN  CREATE BUTTON WHEN CLICK ITS GO UP---------------------------- -->

    <div>
    <button v-on:click="increamant">Click </button>
    </div>
    <div>
    <button v-on:mouseover="increamant">increamant When Over</button>
    </div>



<div>
<p> ----------------------------------------------------------------------</p>   

<!-- -----------------------------IF CONDATION & ELSE & FUNCTION WITH COND With v-model---------------------------- -->
<p>input مع تطبيق الشروط</p>
<!-- اذا كان لا يساوي صفر اطبعه -->
<span>{{num}}</span>
    <input v-model="num" @keydown.enter="num=0" type="text">
</div>
<!-- تم استخدام فانكشن في الميتثود للرقم الزوجي ووضع الشرط بها isEven(num) -->
    <div v-if="num % 2 === 0"> رقم زوجي</div>
    <div v-else> رقم فردي</div>

    <span v-if="num == 0 || num.length < 1">الرقم يساوي صفر او اصغر</span>
    <span v-else>هناك خطأ لا يمكن ان يكون سالب</span>
    <p> ----------------------------------------------------------------------</p>   
    <!-- -----------------------LOOP IN FIRST WE ADD DATA NUMBER THEN-------- -->
  <div v-for="nums in numbers">
  <div v-if="nums % 2 === 0">{{nums}}</diV>
  </div>

<p> ----------------------------------------------------------------------------</p>
<!-- -----------------------------vue js 3 use computed--------------------------- -->
  <div v-for="number in compNum">
  <p style="color:red;">{{number}}</p>
  </div>




  <p> ----------------------------------------------------------------------------</p>
<!-- -----------------------------vue js 3 input validation--------------------------- -->
<p> vue js 3 input validation</p>
  <div>
  <input @input="input" :value="inputVal" />
  <div>
  <span :class="getErrorstyle()" v-if="error">{{error}} </span>
   </div>
  </div>


  <p> ----------------------------------------------------------------------------</p>
  <!-- -----------------------------vue js 3 V-model--------------------------- -->
  <p> V-model</p>

  <input type="checkbox" v-model="inputCheck" value="Yes" />
  <input type="checkbox" v-model="inputCheck" value="No" />
  <span>{{inputCheck}} </span>

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
    error:''
    }
  },
  methods:{
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