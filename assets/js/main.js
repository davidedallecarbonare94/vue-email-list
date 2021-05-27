let root = new Vue({
    el: "#root",
    data: {
        emailList: "",
        emailArray: [],
    },
    methods: {
    },
    mounted() {
        for (i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(result => {
                console.log(result);
                this.emailList = result.data.response;
                console.log(this.emailList);
                this.emailArray.push(this.emailList)
        })
        }
    }
})