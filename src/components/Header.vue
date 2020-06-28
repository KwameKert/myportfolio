<template>
<div>

     <header id="desktop-menu">
        
             <a href="javascript:void()" class="logo">{ kc }</a>
        <ul>
            <li class="links" ><a href="#about">About</a> </li>
            <li class="links"><a href="#work">Experience</a></li>
            <li class="links"><a href="#projects">Projects</a></li>
            <li class="links"><a href="#contact">Contact</a></li>
            <li ><a  href="../../../assets/cv.pdf" class="btn btn-outline-primary">Resume</a></li>
        </ul>

     </header>

     <header id="mobile-menu">
        <div id="menu-bar">
            <div class="row">
                <div class="col-2">
                    <div id="menu" @click="changeMenu()" v-bind:class="{change: isActive}">
				<div id="bar1" class="bar"></div>
				<div id="bar2" class="bar"></div>
				<div id="bar3" class="bar"></div>
			</div>


            
        <ul class="nav" id="nav" v-bind:class="{change: isActive}">
            <li class="links"><a href="#about">About</a> </li>
            <li class="links"><a href="#work">Experience</a></li>
            <li class="links"><a href="#projects">Projects</a></li>
            <li class="links"><a href="#contact">Contact</a></li>
            <li ><button  class="btn btn-outline-primary">Resume</button></li>
        </ul>
                </div>
                <div class="col-9">
                    <a href="javascript:void()" class="logo" style="padding-top: 10px">{ kc }</a>
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
            isActive: false
        }
    },
    methods: {
            changeMenu: function(){
                this.isActive = !this.isActive;
            },
            handleScroll: function(){
               var header = document.querySelector("header");
               header.classList.toggle("sticky",window.scrollY > 0);
            },
            darkThemeSwitch(){
               
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
    transition: 0.5s;
}

header .logo {
    position: relative;
    font-weight: 700;
    color: #fff;
    font-size: 2em;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.6s;
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

.links a{
    position: relative;
    margin: 0 15px;
    text-decoration: none !important;
    letter-spacing: 2px;
    color: #6c7fc5;
    font-weight: 600;
    transition: 0.6s;
}

.links a:hover{
    color: #fff;
}

.links:after {
    content: '';
    display: block;
    margin: auto;
    height: 3px;
    color:#b6bedc;
    width: 0px;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
  }
  .links:hover:after {
    width: 75%;
    background: #fff;
  }




    .btn-outline-primary:hover {
    color: #fff;
    background-color: #789fa5;
    border-color:  #789fa5;
}
  .btn-outline-primary{
    color: #789fa5;
    border-color:   #789fa5;
}

  header.sticky{
      padding: 5px 120px;
      background-color: rgb(10, 25, 47);;
      -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  }

  header.sticky ul{
    padding-top: 20px;
  }

@media only screen and (max-width: 600px) {
  /* body {
    background-color: lightblue;
  } */


  header .logo {
    position: absolute;
    font-weight: 700;
    color: #fff;
    font-size: 2em;
    text-decoration: none;
    letter-spacing: 2px;
    transition: 0.6s;
    margin-top: 5px;
}
 
    header.sticky{
      padding: 5px 120px;
      background-color: rgb(10, 25, 47);;
      -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  }

  header.sticky ul{
    padding-top: 20px;
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
	background-color: #789fa5;
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
    background-color: rgb(10, 25, 47);;
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