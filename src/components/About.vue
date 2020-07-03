<template >
       <section>
        <div class="container section-content" id="about">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <h3 class="heading">About me</h3>
                    <p class="light-text">Hello! I am Kertice, a software engineer based in Accra, Ghana</p>
                     <p class="light-text">I love building things, most of them work on computers. Im very passionate about quality software and open source projects. I believe technology is one of the best things that happened to humanity and it can be improved upon. </p>
                     <p class="light-text">During my third and senior year in the university, I did full-time internships with Ghana Technology University College (GTUC) software unit and Seso Global. I have worked on challenging projects with different teams during my internships. </p>
                     <p class="light-text">Here are a few technologies I've been working with recently:</p>
                 
                </div>
                <div class="col-md-6 text-center ">
                    <img src="@/assets/img/profile.jpg" alt=""  class="mt-4 img-thumbnail profile-image" >
                </div>
            </div>

                <div class="row mt-3">
                         <div class="col-md-6 col-sm-12">

                              <div class="tech-stack">
                        <ul>
                            <li class="stack-heading">Languages</li>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>PHP</li>
                            <li>Node.js</li>
                        </ul>
                        <ul>
                            <li class="stack-heading">Frameworks</li>
                            <li>Spring boot</li>
                            <li>Angular</li>
                            <li>Vue</li>
                            <li>Flask</li>
                            <li>Laravel </li>
                            <li>Wordpress</li>
                        </ul>

                        <ul>
                            <li class="stack-heading">Tools</li>
                            <li>Git</li>
                            <li>Heroku</li>
                            <li>Firebase</li>
                            <li>Docker</li>
                            <li>Postman</li>
                            <li>Chrome Dev tools</li>
                        </ul>
                        
                        <ul>
                            <li class="stack-heading">Databases</li>
                            <li>Mongo DB</li>
                            <li>MySQL</li>
                        </ul>
                     </div>
                         </div>
                     </div>
          
        </div>
    </section>
    
</template>

<script>
export default {
    name: 'About'
}
</script>

<style>


.heading {
    font-weight: 700;
    color: rgb(204, 194, 194);
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    font-size: 32px;
    margin: 10px 0px 40px;
}

.heading::after {
    content: "";
    display: block;
    height: 1px;
    width: 300px;
    background-color: rgb(48, 60, 85);
    position: relative;
    top: -2px;
    margin-left: 20px;
}

.light-text{
    color: #b7babd;
    text-align: justify;
}

.profile-image{
    height: 350px;
     width: 350px;
     opacity: 0.3;
     transition: 0.3s;
   
}
.profile-image{
    opacity: 1;
}

.tech-stack{
    display: flex;
    position: relative;
    justify-content: space-between;
    
}

.tech-stack li{
    color: #b7babd;
}
.stack-heading{
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 2px;
    color:#fff !important;
}

</style>