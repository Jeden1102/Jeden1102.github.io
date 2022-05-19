<template>
        <div class="flex items-center justify-center relative">
            <div v-if="emailSending" class="spinner-box absolute w-screen h-screen left-0 top-0  flex items-center justify-center">
                <Loading />
            </div>
            <div class="test p-8 border border-gray-700 rounded-lg">
                <div>
                    <div class="flex items-center justify-center space-x-4">
                    <h1 class="text-4xl flex">Contact 
                    </h1>
                    <img src="/src/assets/img/icons/contact.png" class="h-8" alt="">
                    </div>
                    <p>Phone : 516 525 133</p>
                    <p>E-mail : dominik.raducki@onet.pl</p>
                    <p>
                        Feel free to contact with me. I'm opened to any propositions. Use this contact form or any of ways to contact me below:
                    </p>
                </div>
                <div class="flex items-center justify-center my-4 space-x-2">
                    <div class="bg-gray-200 p-2 rounded-md cursor-pointer">
                        <a href="https://www.facebook.com/dominik.raducki.9/" target="_blank"><img src="/src/assets/img/icons/facebook.png" class="h-8" alt=""></a>
                    </div>
                    <div class="bg-gray-200 p-2 rounded-md cursor-pointer">
                        <a href="https://github.com/Jeden1102" target="_blank"><img src="/src/assets/img/icons/github.png" class="h-8" alt=""></a>
                    </div>
                    <div class="bg-gray-200 p-2 rounded-md cursor-pointer">
                        <a href="mailto:dominik.raducki@onet.pl" target="_blank"><img src="/src/assets/img/icons/gmail.png" class="h-8" alt=""></a>
                    </div>
                    <div class="bg-gray-200 p-2 rounded-md cursor-pointer">
                        <a href="tel:516525133" target="_blank"><img src="/src/assets/img/icons/phone-call.png" class="h-8" alt=""></a>
                    </div>
                    <div class="bg-gray-200 p-2 rounded-md cursor-pointer">
                        <a href="https://www.linkedin.com/in/dominik-raducki-729094207/" target="_blank"><img src="/src/assets/img/icons/linkedin.png" class="h-8" alt=""></a>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row md:space-x-20">
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