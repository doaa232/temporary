/* event  //  v-model  //  v-cloak */

setTimeout(() => {
    
}, 5000);
    new Vue({
        el:'#app',
        data:{
            timeIntrval:null,
            timePomoMin:2,
            timeSic:0,
            off:true,
            timeIsNotOver:true,
            inputMinutes:25,
            chooseTime:true,
            shortBreak:20,
            longBreak:35,
            timeComplete:false,
            eternalTime:1,
            specialInStop:true,



        },
        /* created() {
            this.btnRet()
        }, */
        methods: {
            btnStar(){
                if (this.timePomoMin >0 && this.timeSic == 0) {
                    this.timePomoMin--; 
                    this.timeSic=59;

                };

                if (this.timeSic > 0) {
                    this.timeIntrval = setInterval(() => {

                        if (this.timeIsNotOver) {
                            this.timeSic--
                        }
                    }, 1000);   
                };
                this.off=false;
            },

            btnPause(){
                clearInterval(this.timeIntrval);
                this.off=true;
                
            },
            addTime(){
                this.timePomoMin +=5; 
                this.eternalTime +=5;
            },
            pomodoro(){
                this.chooseTime=true;
                this.timeSic=0;
                clearInterval(this.timeIntrval);
                this.off=true;
                this.specialInStop=true;
                this.timeComplete=false;
            },
            ShortBreak(){
                this.timePomoMin = this.shortBreak;
                this.eternalTime = this.shortBreak;
                this.timeSic=0;
                clearInterval(this.timeIntrval);
                this.off=true;
                this.chooseTime=false;
                this.specialInStop=true;
                this.timeComplete=false;
            },
            LongBreak(){
                this.timePomoMin = this.longBreak;
                this.eternalTime = this.longBreak;
                this.timeSic=0;
                clearInterval(this.timeIntrval);
                this.off=true;
                this.chooseTime=false;
                this.specialInStop=true;
                this.timeComplete=false;
            },
            btnStarpomo(){

                if (this.inputMinutes<=0) {
                    alert("Please enter a valid value");
                }
                else{
                    this.chooseTime=false;
                    this.timePomoMin = this.inputMinutes;
                    this.eternalTime = this.inputMinutes;
                    clearInterval(this.timeIntrval);
                    this.timeSic=0;

                }
            },
            shutdown(){
                this.timeComplete=false;
                this.specialInStop=false;
                
                
            },
            restart(){
                this.timePomoMin=this.eternalTime;
                this.timeComplete=false;
                
            }
        },
        watch: {
            timeSic(){
                if (this.timePomoMin == 0 && this.timeSic == 0){
                    clearInterval(this.timeIntrval);
                    this.timeComplete=true;
                    this.off=true;
                    
                };
                if (this.timePomoMin != 0 && this.timeSic == 0) {
                    this.timePomoMin--;
                    this.timeSic=59;
                };
                

            }
        },
    });