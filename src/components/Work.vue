<template>

    <section>
        <div class="container section-content">
            <h3 class="heading">Work Experience</h3>
            <div class="row">
                <div class="col-md-3">
                   
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#seso" role="tab" aria-controls="v-pills-home" aria-selected="true">Seso Global</a>
                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#visual_insights" role="tab" aria-controls="v-pills-profile" aria-selected="false">Visual Insights</a>
                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#gtuc_software" role="tab" aria-controls="v-pills-messages" aria-selected="false">GTUC Software Unit</a>
                      </div>
                     

                    </div>

                    <div class="col-md-6">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="seso" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <h4>Full Stack Developer (Intern) @Seso</h4>
                                <p class="light-text">September 2019  - Present</p>
                                <ul>
                                   
                                    <li class="my-list">
                                        <p class="light-text"> Working with both frontend and backend teams to design and build clients and internal projects.
                                        </p>
                                    <li class="my-list">
                                        <p class="light-text"> Work with a variety of different languages, platforms and  frameworks systems such as Java, Springboot, Docker, Heroku and Angular .</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="visual_insights" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <h4>Full Stack Developer (Remote) @Visual_Insights</h4>
                                <p class="light-text">July 2019  - December 2019</p>
                                <ul>
                                    <li class="my-list">
                                        <p class="light-text">Worked with a team of engineers a video steaming web and mobile application for <a href="">donsarena</a>, a boxing company in Ghana.</p>
                                    </li>
                                    <li class="my-list">
                                        <p class="light-text">Led a team to design and  build a  comprehensive food delivery system for <a href="">foodies</a>, a local company in Ghana</p>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="gtuc_software" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <h4>Full Stack Developer (Intern) @GTUC</h4>
                                <p class="light-text">September 2018  - September 2019</p>
                                <ul>
                                    <li class="my-list">
                                        <p class="light-text">Built a project management system for the staff and also integrated a memo app to
                                        eliminate paper based memos.</p>
                                    </li>
                                    <li class="my-list">
                                        <p class="light-text">Built a hospital management system where workers could book appointments at hospitals
                                        and track their medical expenses.</p>
                                    </li>
                                    <li class="my-list">
                                        <p class="light-text"> Worked with a team to build a Human Resource Management System for <a href="">NTL</a></p>
                                    </li>
                                    <li class="my-list">
                                        <p class="light-text">Maintained the university's website using wordpress and developed a wordpress plugin. <a href="">NTL</a></p>
                                    </li>
                                    <li class="my-list">
                                        <p class="light-text">Interfaced with clients  providing technological expertise</p>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                          </div>
                    </div>
                </div>
        </div>
        <div style="margin-bottom: 500px"></div>
    </section>
    
</template>


<script>
export default {
    name: 'Work'
}
</script>

<style >
.nav-pills {
    color:#b7babd !important;
    background-color: transparent;
    transition: 0.6s;

}



.nav-pills .nav-link.active {
    background-color: transparent !important;
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    border-left: 5px #789fa5 solid;
    transition: 0.6s;
}

.nav-pills .nav-link {
    border-radius: 0px;
    color: #789fa5;
    font-weight: 600;
    letter-spacing: 1px;
}
.my-list::before {
    content: "✔";
    position: absolute;
    left: 0px;
    color: rgb(100, 255, 218);
}

</style>