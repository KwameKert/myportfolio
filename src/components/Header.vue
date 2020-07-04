<template>
<div>

     <header id="desktop-menu">
        
             <a href="javascript:void()" class="logo">{ kc }</a>
        <ul>
            <li class="links" ><a href="#about">About</a> </li>
            <li class="links"><a href="#work">Experience</a></li>
            <li class="links"><a href="#projects">Projects</a></li>
            <li class="links"><a href="#contact">Contact</a></li>
            <li ><a href="https://drive.google.com/file/d/1Klxzquh2yiHwwskMEF_2hmWasswrkmSm/view?usp=sharing" target="blank" class="btn btn-outline-primary">Resume</a></li>
            <li class="day-night" @click="darkThemeSwitch">
                <img src="@/assets/img/moon.svg" alt="" v-if="!isDark">  <img src="@/assets/img/sun.svg" alt="" v-if="isDark"> 
            </li>
        </ul>

     </header>

     <header id="mobile-menu">
        <div id="menu-bar">
            <div class="row">
                <div class="col-3">
                <div id="menu" @click="changeMenu()" v-bind:class="{change: isActive}" ref="myBtn">
				<div id="bar1" class="bar"></div>
				<div id="bar2" class="bar"></div>
				<div id="bar3" class="bar"></div>
			</div>
                </div>
                <div class="col-9">
                      <a href="javascript:void()" class="logo" >{ kc }</a>
                </div>
            </div>


            <div class="row">
                <div class="col-12 ">
        <ul class="nav" id="nav" v-bind:class="{change: isActive}">
            <li class="links" @click="closeMenu"><a href="#about">About</a> </li>
            <li class="links" @click="closeMenu"><a href="#work">Experience</a></li>
            <li class="links" @click="closeMenu"><a href="#projects">Projects</a></li>
            <li class="links" @click="closeMenu"><a href="#contact">Contact</a></li>
            <li ><a href="https://drive.google.com/file/d/1Klxzquh2yiHwwskMEF_2hmWasswrkmSm/view?usp=sharing" target="blank" class="btn btn-outline-primary">Resume</a></li>
             <li class="day-night" @click="darkThemeSwitch">
                <img src="@/assets/img/moon.svg" alt="" v-if="!isDark">  <img src="@/assets/img/sun.svg" alt="" v-if="isDark"> 
            </li>
        </ul>
                </div>
            </div>
			
		</div>
        <div class="menu-bg" id="menu-bg" v-bind:class="{change: isActive}"></div>
    </header>
</div>

</template>


<script>


export default {
    name: 'Header',
     created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data(){
        return {
            isActive : false,

            isDark : true
        }
    },
    methods: {
            changeMenu: function(){
                this.isActive = !this.isActive;
                //console.log("closed");
            },
            handleScroll: function(){
               var header = document.querySelector("header");
               header.classList.toggle("sticky",window.scrollY > 0);
            },
            darkThemeSwitch(){
              
               this.isDark = !this.isDark;
               this.closeMenu();
              if(!this.isDark){
                  
                   let link = document.getElementById("link");
                  link.removeAttribute("href", "dark.css");
               link.setAttribute("href", "css/light.css");
               console.log("light")
              }else{
                  console.log("dark")
                   let link = document.getElementById("link");
                  link.removeAttribute("href", "css/light.css");
                  link.setAttribute("href", "css/dark.css");
              }
            },
             closeMenu() {
               const elem = this.$refs.myBtn
            elem.click()
            }
            
    }
}
</script>

<style style="scss">

#mobile-menu{
    display: none;
}




header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 120px;
    z-index: 100000;
    transition: 0.3s;
}



header ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
}
li{
    list-style: none;
}

.links {
    position: relative;
    list-style: none;
}

.day-night{
    cursor: pointer;
}


header .logo {
    text-decoration: none;
}


header .logo:hover {
    color: white;
}





@media only screen and (max-width: 600px) {
 
 .logo{
     padding-left: 20px;
 }


  #desktop-menu{
      display: none;
  }


#mobile-menu{
    display: block;
}

#menu{
	width: 35px;
	height: 30px;
	margin: 30px 0 20px 20px;
	cursor: pointer;
}
.bar{
	height: 5px;
	width: 100%;
	background-color: #789fa5 !important;
	display: block;
	border-radius: 5px;
	transition: 0.3s ease;
}
#bar1{
	transform: translateY(-4px);
}
#bar3{
	transform: translateY(4px);
}
.nav li a{
    color: #fff;
	text-decoration: none;
}
.nav li a:hover{
	font-weight: bold;
}
.nav li{
    list-style: none;
    
    text-align: center;
	padding: 16px 0;
}
.nav{
	padding: 0;
    margin: 0 20px;
	transition: 0.3s ease;
	display: none;
}
.menu-bg, #menu-bar{
	top: 0;
	left: 0;
    right: 0;
	position: absolute;
    background-color: rgb(10, 25, 47);
}
.menu-bg{
	z-index: 1;
	width: 0;
	height: 0;
	margin: 30px 0 20px 20px;
	background:  rgb(10, 25, 47) !important;
	border-radius: 50%;
	transition: 0.3s ease;
}
#menu-bar{
	z-index: 2;	
}
.change-bg{
	width: 550px;
	height: 540px;
	transform: translate(-60%,-30%);
}
.change .bar{
	background-color: white;
}
.change #bar1{
	transform: translateY(4px) rotateZ(-45deg);
}
.change #bar3{
	transform: translateY(-6px) rotate(45deg);
}
.change #bar2{
	opacity: 0;
}
.change{
	display: block;
}
 
}
</style>