<template>
      <section  class="nice">
        <div class="container ">
            <h5>Hi, my name is</h5>
            <h2 class="name">Kertice Asante</h2>
            <h4 class="headline">I create things for the web</h4>
            <p class=" intro  mb-3" >I'm a software engineer living in Accra, Ghana. I build applications to solve  problems with  the aim of making the world a better place.</p>
            
            <a  href="https://www.linkedin.com/in/kertice-asante-aa4224173/" target="blank" class="btn btn-outline-primary" style="margin-left: 0px;">Connect with me</a>
        </div>
    </section>
</template>


<script>
export default {
    name: 'Homepage'
}
</script>


<style >
  .nice{
      margin-top: 200px;
  }

  .name{
      font-size:5em;
      font-weight: 900;
      letter-spacing: 4px;
      padding-left: 0px;
  }

  .headline{
    font-size:4em;
    font-weight: 700;
    color: #97b0ca;
    padding-left: 0px;
  }

  .intro{
    margin-top: 50px;
    width: 50%;
    text-align: justify;
 

  }

  @media only screen and (max-width: 600px) {

 .nice{
      margin-top: 100px;
  }

   .name{
      font-size:4em;
      font-weight: 800;
      letter-spacing: 2px;
      padding-left: 0px;
  }

  .headline{
    font-size:2em;
    font-weight: 500;
    color: #97b0ca;
    padding-left: 0px;
  }
  .intro, .headline{
        width: 100%;
      }

     

  }

</style>