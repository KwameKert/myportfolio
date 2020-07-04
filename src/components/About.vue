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

                    <div class="col-md-10 col-sm-12 stack pl-0">
                        <ul class="nav stack-pills mb-1" id="pills-tab" role="tablist">

                            <li class="nav-item">
                                <a class="stack-link " id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true" @click.prevent="setActive('languages')" :class="{ active: isActive('languages') }" >Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="stack-link "  id="pills-profile-tab" data-toggle="pill"  role="tab" aria-controls="pills-profile" aria-selected="false"  @click.prevent="setActive('frameworks')" :class="{ active: isActive('frameworks') }" >Frameworks</a>
                            </li>

                            <li class="nav-item">
                                <a class="stack-link" id="pills-contact-tab" data-toggle="pill" @click.prevent="setActive('tools')" :class="{ active: isActive('tools') }" role="tab" aria-controls="pills-contact" aria-selected="false">Tools</a>
                            </li>

                            <li class="nav-item">
                                <a class="stack-link" id="pills-contact-tab" data-toggle="pill" @click.prevent="setActive('databases')" :class="{ active: isActive('databases') }" role="tab" aria-controls="pills-contact" aria-selected="false">Databases</a>
                            </li>
                        </ul>


                <div class="tab-content pl-3 " id="pills-tabContent">

                    <div class="tab-pane fade"  role="tabpanel" aria-labelledby="pills-home-tab" :class="{ 'active show': isActive('languages') }"> 
                        <div class="stacks">
                            <ul>
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>Python</li>
                         </ul>
                         <ul class="ml-5">
                            <li>PHP</li>
                            <li>Node.js</li>
                        </ul>
                        </div>
                         
                    </div>

                    <div class="tab-pane fade "  role="tabpanel" aria-labelledby="pills-profile-tab"    :class="{ 'active show': isActive('frameworks') }">
                        <div class="stacks">
                        <ul>
                            <li>Spring boot</li>
                            <li>Angular</li>
                            <li>Vue</li>
                         </ul>
                         <ul class="ml-5"> 
                            <li>Flask</li>
                            <li>Laravel </li>
                            <li>Wordpress</li>
                        </ul>
                        </div>
                        
                    </div>

                    <div class="tab-pane fade" :class="{ 'active show': isActive('tools') }" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <div class="stacks">
                         <ul>
                            <li>Git</li>
                            <li>Heroku</li>
                            <li>Firebase</li>
                         </ul>
                         <ul class="ml-5">
                            <li>Docker</li>
                            <li>Postman</li>
                            <li>Chrome Dev tools</li>
                        </ul>
                        </div>
                         
                    </div>

                    <div class="tab-pane fade stacks" :class="{ 'active show': isActive('databases') }" role="tabpanel" aria-labelledby="pills-contact-tab">

                        <ul>
                            <li>Mongo DB</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                    </div>
            
                     </div>
          
        </div>
    </section>
    
</template>

<script>
export default {
    name: 'About',
     data(){
        return {
            activeItem: 'languages'
        }
    },
    methods: {
            changeMenu: function(){
                this.isActive = !this.isActive;
            },
            isActive : function(menuItem) {
                return this.activeItem === menuItem
            },
            setActive (menuItem) {
                this.activeItem = menuItem
            
            }

    }
}
</script>

<style >

.stacks{

    display: flex !important;
}

.stack-link{
    cursor: pointer;
}

 .stack-pills {
    color:#b7babd !important;
    background-color: transparent;
    transition: 0.6s;

}

.stack-pills .stack-link.active {
    background-color: transparent !important;
}

.stack-pills .stack-link.active, .stack-pills .show>.stack-link {
    color: #fff;
    border-bottom: 5px #789fa5 solid;
    transition: 0.6s;
}


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

.stacks>ul>li:before{
    content: "♦  ";
    padding-right: 10px;
    color: #789fa5;
}

</style>