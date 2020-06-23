<template>
       <section class="text-center" >
        <div class="container section-content" id="contact"  style="margin-bottom: 300px">
            <div class="row">
                <div class="col-12 text-center">

            <h3 class="heading">Connect With Me</h3>
                </div>
            </div>
            <p>
                Feel free to contact me on the following plaforms.
            </p>
            <a href="mailto:kwamekert@gmail.com" class="btn btn-outline-primary"><img src="@/assets/img/simplemail.svg" width="30px" height="30px" alt=""> &nbsp;&nbsp;<p class="m-2">Send me a hi.</p></a>

            <a href="https://github.com/KwameKert" target="blank" class="btn btn-outline-primary"> 
            <img src="@/assets/img/github.svg" width="30px" height="30px" alt="">
            &nbsp;&nbsp;<p class="m-2"> Follow me </p></a>
            <a href="https://www.linkedin.com/in/kertice-asante-aa4224173/" target="blank" class="btn btn-outline-primary"> <img src="@/assets/img/linkedin.svg" alt="">  &nbsp;&nbsp; <p class="m-2">Add Connection</p></a>

        </div>
        </section>
</template>

<script>
export default {
   name: 'Contact'
}
</script>

<style >

.btn-outline-primary:hover {
    color: #fff;
    background-color: #0a192f ;
    border-color: #789fa5;
}
/* span{
    margin-top: 10px;
} */
 a{
        margin: 20px;
        display: inline-flex !important;
    }

   p{
    color: #b7babd;
}
    
</style>