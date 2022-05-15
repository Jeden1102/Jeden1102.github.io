<template>
        <div class="flex items-center justify-center relative">
            <div v-if="emailSending" class="spinner-box absolute w-screen h-screen left-0 top-0  flex items-center justify-center">
                <Loading />
            </div>
            <div class="flex flex-col md:flex-row md:space-x-20 test p-8 border border-gray-700 rounded-lg">
                <div class="flex items-center justify-center w-1/2 h:w-full mx-auto my-4">
                    <div v-if="!mailSend" >
                        <img src="/src/assets/img/contact-email.svg" alt="">
                    </div>
                    <div v-else>
                        <img src="/src/assets/img/mail-sent.svg" alt="">
                        <h2 class="text-2xl font-bold my-4">Message has been send succefully !</h2>
                    </div>

                </div>
                <div  class="flex items-center justify-center">
                    <form ref="form" @submit.prevent="sendEmail" class="flex flex-col">
                        <label for="name">Company Name / Name*</label>
                        <input required class="w-full p-2  text-black rounded-lg" type="text" placeholder="Google(hopefully)" name="from_name">
                        <label for="name">E-mail*</label>
                        <input required class="w-full p-2  text-black rounded-lg" type="text" placeholder="Sundar@Pichai.gmail.com" name="from_email">
                        <label for="content">Message</label>
                        <textarea name="message" required class="w-full p-2  text-black rounded-lg" placeholder="Hi! I'd like to...."  id="" cols="40" rows="10"></textarea>
                        <MyButton variant="red">Send</MyButton>
                    </form>
                </div>
            </div>
        </div>
</template>

<script>
import MyButton from '/src/components/MyButton.vue';
import Loading from '/src/components/Loading.vue';
import emailjs from '@emailjs/browser';
    export default {
        components:{
            MyButton,
            Loading,
        },
        data() {
            return {
                emailSending:false,
                mailSend:false,
            }
        },
          methods: {
    sendEmail(event) {
        this.emailSending=true;
      emailjs.sendForm('service_m5v42qp', 'template_fzfdqcq', this.$refs.form, '3ogchkjuNoFQFazdE')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        this.emailSending=false;
        this.mailSend = true;
        event.target.reset();
        }, (error) => {
        this.emailSending=false;
            console.log('FAILED...', error.text);
        });
    }
  }
    }
</script>

<style  scoped>
.test{
    background: #292d33;
}
.spinner-box{
background-color:rgba(0,0,0,.7);
overflow: hidden;
}
</style>