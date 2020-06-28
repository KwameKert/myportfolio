<template>
    <section >
        <div class="container  section-content" id="projects">
            <h3 class="heading"> Featured Projects</h3>
            <div class="row">
               
                <div class="col-md-9">
                    <img src="@/assets/img/property.png" class="img-fluid project-image" alt="">
                </div>
                <div class="col-md-3">
                     <h4>Property Management System</h4>
                     <p class="light-text">
                         This system will help property managers manage their properties efficienty.
                        
                     </p>
                   
                    <div>
                        <span class="languages">Angular</span>   
                        <span class="languages">Spring Boot</span>  
                        <span class="languages">MySQL</span>  
                    </div>

                    <div class="mt-2">
                         <span class="languages">Java</span>  
                            <span class="languages">Javascript</span>
                            <span class="languages">Firebase</span>
                            <span class="languages">Heroku</span>

                    </div>
                    <div class="mt-3">
                         <a href="https://github.com/KwameKert/propertymanagement-client" target="blank"> <img src="@/assets/img/github.svg" class="external-links" alt=""></a>
                        <a   href="https://property-a6b8b.web.app/"  target="blank"> 
                     <img src="@/assets/img/sign.svg" class="external-links" alt="">
                        </a>
                    </div>
                   
                     
                </div>
            </div>


                <div class="row mt-5">
            
                    <div class="col-md-5">
                        <h4>Admission  System</h4>
                        <p class="light-text">
                            This system will help universities manage the status of applications, applicants will also be able to keep track of their applications. 
                        </p>
                    
                        <div >
                            <span class="languages">Angular</span>   
                            <span class="languages">Nodejs</span>  
                            <span class="languages">Express</span>  

                            <span class="languages">Mongo</span>   
                                
                        </div>

                        <div class="mt-2">
                            <span class="languages">Javascript</span>
                                <span class="languages">Netlify</span>
                                <span class="languages">Heroku</span>

                        </div>
                        <div class="mt-3">
                            <a href="https://github.com/KwameKert/admissionportal-client" target="blank"> <img src="@/assets/img/github.svg" class="external-links" alt=""></a>
                            <a   href="https://admissionportal-client.netlify.app/"  target="blank"> 
                        <img src="@/assets/img/sign.svg" class="external-links" alt="">
                            </a>
                        </div>
                    
                        
                    </div>
                    <div class="col-md-7">
                        <img src="@/assets/img/admission.png" class="img-fluid project-image" alt="">
                    </div>
            </div>


                <div class="row mt-5">
               
                <div class="col-md-7">
                    <img src="@/assets/img/ned.png" class="img-fluid project-image" alt="">
                </div>
                <div class="col-md-5">
                     <h4>Property  System (Proposal)</h4>
                     <p class="light-text">
                         This system will help property managers manage property documents efficienty.
                     </p>
                   
                    <div>
                        <span class="languages">Angular</span>  
                         <span class="languages">Javascript</span>
                            <span class="languages">Netlify</span>
                    </div>
                    <div class="mt-3">
                         <a href="https://github.com/KwameKert/nedbank-proposal" target="blank"> <img src="@/assets/img/github.svg" class="external-links" alt=""></a>
                        <a   href="https://nebank-proposal.web.app/"  target="blank"> 
                     <img src="@/assets/img/sign.svg" class="external-links" alt="">
                        </a>
                    </div>
                   
                     
                </div>
            </div>

        </div>
        <div style="margin-top: 300px"></div>
    </section>
</template>


<script>
export default {
    name: 'Projects'
}
</script>


<style >
.project-image{
     opacity: 0.3;
     transition: 0.4s;
}

.languages{
    border: 1px solid #789fa5;
    padding: 4px;
    font-size: 12px;
    background-color: #789fa56b;
    border-radius: 3px;
    font-weight: 900 !important;
    margin: 10px;
    cursor: pointer;
}

.external-links{
    margin: 10px;
}

.striped-border { border: 1px dashed #000; width: 50%; margin: auto; margin-top: 5%; margin-bottom: 5%; }


.project-image:hover{
     opacity: 1;
}
</style>