webpackJsonp([0],{"4f54":function(t,e,n){"use strict";var a=n("7+uW"),r=n("/ocq"),s=n("bm7V"),i=n.n(s);a.a.use(r.a),a.a.use(i.a);var o={name:"vue-anchor-router-link",props:{to:Object,scrollOptions:{type:[Object,Number],default:1}},data:function(){return{previousRoute:this.$route}},methods:{routeToAnchor:function(){this.$route.fullPath===this.previousRoute.fullPath&&this.$scrollTo(this.to.hash,this.scrollOptions)}},watch:{$route:function(t,e){this.previousRoute=t}}},c={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-link",{attrs:{to:t.to},nativeOn:{click:function(e){return t.routeToAnchor(e)}}},[t._t("default")],2)},staticRenderFns:[]};var l=n("VU/8")(o,c,!1,function(t){n("8JoR")},null,null);e.a=l.exports},"7IGl":function(t,e){},"8JoR":function(t,e){},ApU9:function(t,e){},B7iu:function(t,e){},DQDF:function(t,e){t.exports={0:{title:"Custom Battery Management PCB",url:"../../static/images/BMS_1.pdf",date:"Spring 2019",src:"../../static/images/BMS_1_3D.png",type:"hardware",desc:"I researched battery management systems this semester for my student project design team SPARK, and helped design a custom pcb for monitoring and balancing lithium ion battery cell voltages on our electric motorcycle. This BMS connects with up to 6 cells, uses SPI communications written in C with its to efficiently communicate with its peripherals, and is daisy chainable with up to 32 other battery management pcbs. The intended purpose for this pcb is to monitor roughly 100 lithium ion battery cells during our bike's races next season.",hash:"BMS_1_PCB"},1:{title:"Collegiate Electric Racing Team Telemetry System",url:"../../static/images/Telemetry.pdf",date:"Fall 2018",src:"../../static/images/telemetry.png",type:"hardware",desc:"I built a telemetry system for my collegiate electric motorcycle racing team (SPARK) to help us analyze our motorcycle performance after races. I used an Arduino Uno and various sensors (GPS, IMU, temperature) to collect the data on the motorcycle and clean it using sensor fusion algorithms before saving it to an sd card. This data collected can be viewed on the telemetry dashboard (shown above). The dashboard supports a playback feature that allows users to view how the data changes by the second.",hash:"TelemetrySpark"},2:{title:"Mr.MarketWatch",url:"https://github.com/KingArthurZ3/Mr.MarketWatch",date:"Summer 2018",src:"../../static/images/Stock Display Site.png",type:"software",desc:"Mr. Stock Market is an intelligent trading advisor that analyzes numeric financial data and market sentiment using a gradient boosting machine learning model and predicts weekly stock prices. The frontend and backend parts of this project continuously update and display current financial predictions and graph data. The machine learning models used are built using Tensorflow and Sci-kit learn and the graphical display gui is built on top of the Vue.js framework.",hash:"Mr.MarketWatch"},3:{title:"In Hub Electric Longboard",url:"../../static/images/ElectricLongboard.pdf",date:"Fall 2018",src:"../../static/images/Hub_Motor_Assembly.png",type:"hardware",desc:"I’m designing and manufacturing an electric longboard, opting to increase the complexity by designing an in hub motor. The main challenges for this project are cost-effectively sourcing the materials used and performing calculations on optimizing motor performance. After testing the motor design, I plan on designing a custom battery management system and speed controllers as well (the current electrical system consists of store bought speed controllers and battery system). CAD renders of the current hub motor design are available below.",hash:"ElectricLongboard"},4:{title:"Clothing Classifier",url:"https://github.com/KingArthurZ3/Clothing-Classifier",date:"Fall 2017",src:"../../static/images/clothing-classifier.png",type:"software",desc:"I created this Tensorflow algorithm and trained it to recognize clothing from images provided by Zalando (a fashion company). I used a dataset of over 55,000 training examples and 10,000 test examples. It classifies clothing into ten categories, ranging from t-shirts, trousers, pullovers, dresses, coats, sandals, shirts, sneakers, bags, and ankle boots.",hash:"ClothingClassifier"},5:{title:"Breast Cancer Classifier",url:"https://github.com/KingArthurZ3/breastcancer-detector",date:"Winter 2017",src:"../../static/images/feature-comparison.png",type:"software",desc:"Doctors frequently have to diagnose breast cancer and determine if it is malignant or benign. I trained this model to help doctors quickly determine the condition of a patient's breast cancer. I used a Wisconsin breast cancer dataset from UCI's machine learning repository. After creating and tuning several machine learning models, I found that a Random Forest Classification model acheived the highest accuracy at 94.552% and also the highest cross validation scores.",hash:"BreastCancer"},6:{title:"Linear Algebra Library",url:"https://github.com/KingArthurZ3/linear-algebra",date:"Winter 2018",src:"../../static/images/linsystems.png",type:"software",desc:"This library provides implementations of vectors, lines, planes of nth dimensions, and also a linear systems of equations class. At a high level, the linear systems class can be used to solve for intersections and returns the intersection (if one exists), both as a unique point or as a parametrized equation. The library used a gaussian elimination algorithm to solve for a system of equations.",hash:"LinearAlgebra"},7:{title:"Yelp Sentiment Analysis",url:"https://github.com/KingArthurZ3/sentiment-reviewer",date:"Spring 2018",src:"../../static/images/yelp-review.png",type:"software",desc:"I trained this neural network to determine whether a user likes or dislikes a business based on their review. To do this, I used Natural Language Processing (NLP) to process their reviews. I used this dataset with 10,000 yelp reviews and classified them based on these 10 entries. I used Pandas, NLTK, and Scikit-learn libraries to help me analyze this dataset.",hash:"SentimentAnalysis"},8:{title:"FIRST Robotics Climber System",url:"../../static/images/ClimberDocumentation.pdf",date:"Winter 2017",src:"../../static/images/ClimberFullSystem.png",type:"hardware",desc:"In six weeks, I led a team of six students to design, manufacture, and test a climber system from scratch using Solidworks and Autodesk Inventor for the 2018 FIRST robotics competition. This is a highly adjustable system capable of lifting two other 150 lb robots, one on either side, in three seconds or lifting the attached robot in a second. It is comprised of three distinct mechanical assemblies: the gearbox, swing arm, and lifting forks.",hash:"FIRST2018"},9:{title:"Constant Torque Spring Motor",url:"../../static/images/SpringMotor.pdf",date:"Spring 2018",src:"../../static/images/Negator Spring Motor.png",type:"hardware",desc:"I designed and machined a torque spring motor, which converts potential energy in constant torque springs to pulling force. I 3D printed custom ABS spools to wind two constant torque springs on. By adjusting the radius of the spool that the counterbalancing cable winds on, I can tune the motor to provide the exact amount of force produced. In 2018, I used this assembly to counterbalance a lift elevator on my team’s FIRST robot, which allowed us to rapidly move the entire 15 lb lift elevator with only one 775 pro motor.",hash:"TorqueSpring"}}},"F8+k":function(t,e,n){t.exports=n.p+"static/img/profile.dbed72f.jpg"},"KmG/":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("qf9G")},null,null).exports,i=n("/ocq"),o=n("ZUBm"),c=n("lIH3"),l=n.n(c),u={name:"NavBar",props:{description:{type:String,required:!0}},data:function(){return{currentRoute:B.currentRoute.name}},methods:{navigate:function(t){B.push({name:t})},isOnPage:function(t){return this.currentRoute==t}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[n("button",{staticClass:"title-btn",on:{click:function(e){t.navigate("Dashboard")}}},[n("h1",[t._v("\n\t\t\t\tArthur K. Zhang \n\t\t\t")]),t._v(" "),n("h4",[t._v("\n\t\t\t\t"+t._s(t.description)+"\n\t\t\t")])])]),t._v(" "),n("div",[n("div",{staticClass:"nav-bar"},[n("li",[n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("About")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("About")}},[t._v("About Me")])])]),t._v(" "),n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("Projects")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("Projects")}},[t._v("Projects")])])]),t._v(" "),n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("Musings")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("Musings")}},[t._v("Musings")])])]),t._v(" "),n("button",{staticClass:"button-m",on:{click:function(e){t.navigate("Contact")}}},[n("h4",[n("span",{class:{"current-page":t.isOnPage("Contact")}},[t._v("Contact")])])])])]),t._v(" "),n("hr")])])},staticRenderFns:[]};var d=n("VU/8")(u,h,!1,function(t){n("KmG/")},"data-v-42ab5fb9",null).exports,m={name:"HelloWorld",components:{"nav-bar":d,"anchor-router-link":o.a},data:function(){return{navMsg:"Discover more about me below!",projects:null,previousProject:"",total_cols:[1,2,3,4],total_rows:[1,2],usedProjects:[]}},methods:{loadProjects:function(){for(var t in this.projects=[],l.a)this.projects.push({title:l.a[t].title,image:l.a[t].image,hash:l.a[t].hash})},generateRange:function(t,e,n){for(var a,r=e<n?e:n,s=n>e?n:e,i=[];t>0;)a=Math.round(r+Math.random()*(s-r)),-1==i.indexOf(a)&&(i.push(a),t--);for(var o=[],c=0;c<4;c++)o.push(i[c]);this.usedProjects.push(o),o=[];for(var l=4;l<8;l++)o.push(i[l]);this.usedProjects.push(o)},redirectToProjects:function(){B.push({name:"Projects"})}},created:function(){this.loadProjects(),this.generateRange(8,0,this.projects.length-1)}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{description:t.navMsg}}),t._v(" "),n("div",{staticClass:"picture-grid"},t._l(t.total_rows,function(e){return n("div",{key:e,staticClass:"row"},t._l(t.total_cols,function(a){return n("div",{key:a,staticClass:"col"},[n("anchor-router-link",{attrs:{to:{name:"Projects",hash:t.projects[t.usedProjects[e-1][a-1]].hash},scrollOptions:{container:"body",duration:700,easing:"ease",offset:0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}}},[n("img",{staticClass:"picture-grid-detail",attrs:{src:t.projects[t.usedProjects[e-1][a-1]].image}}),t._v(" "),n("span",{staticClass:"picture-grid-description"},[t._v(t._s(t.projects[t.usedProjects[e-1][a-1]].title))])])],1)}),0)}),0)],1)},staticRenderFns:[]};var g=n("VU/8")(m,p,!1,function(t){n("ApU9")},null,null).exports,f={name:"About",components:{"nav-bar":d},data:function(){return{navMsg:"Resourceful Learner | Passionate Engineer | Easygoing Friend"}},methods:{openUrl:function(t){window.open(t)}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{description:t.navMsg}}),t._v(" "),n("div",{staticClass:"main-content"},[n("div",{staticClass:"info-container"},[t._m(0),t._v(" "),n("div",{staticClass:"pf-img-description"},[n("p",[n("b",[t._v("Location:")]),t._v(" San Jose, CA\n\t\t\t\t\t"),n("br"),n("br"),t._v(" "),n("b",[t._v("School:")]),t._v(" University of Michigan, Ann Arbor\n\t\t\t\t\t"),n("br"),n("br"),t._v(" "),n("b",[t._v("Major:")]),t._v(" B.S.E in Computer Engineering\n\t\t\t\t\t"),n("br"),n("br"),t._v(" "),n("b",[t._v("Email:")]),t._v(" arthurzh@umich.edu\n\t\t\t\t\t"),n("br"),n("br"),t._v(" "),n("b",[t._v("Github:")]),t._v(" @kingarthurz3\n\t\t\t\t\t"),n("br"),n("br"),t._v(" "),n("b",[t._v("Instagram:")]),t._v(" @kingarthurz3\n\t\t\t\t\t"),n("br"),n("br"),t._v(" "),n("b",{staticClass:"link-button",on:{click:function(e){t.openUrl("https://www.linkedin.com/in/arthur-k-zhang/")}}},[t._v("View My Linkedin")])])])]),t._v(" "),t._m(1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pf-picture"},[e("img",{staticClass:"pf-img",attrs:{src:n("F8+k"),alt:"Arthur Zhang",height:"100%",width:"100%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pf-description"},[n("h3",{staticClass:"pf-greeting"},[t._v("\n\t\t\t\tHi! My name is Arthur.\n\t\t\t")]),t._v(" "),n("div",{staticClass:"pf-details"},[t._v("\n\t\t\t\tI'm currently a freshmen at the Univeristy of Michigan. I grew up in San Jose, CA and spent my early years playing club basketball, running track, and gaming a bit too much.\n\t\t\t\t"),n("br"),n("br"),t._v("\n\t\t\t\tI attended Lynbrook High School, where I first discovered my love for engineering after joining the school's FIRST robotics team, the Funky Monkeys. As Vice President, I led multiple mechanical subteams, delivering ambitious products under time crunches. I also learned to love learning, and an ability to apply my knowledge to produce awesome robotic assemblies. \n\t\t\t\t"),n("br"),n("br"),t._v("\n\t\t\t\tAside from robotics, I've built plenty of software for fun, such as a machine learning model that classifies breast cancer, to a web platform that attempts to predict the stock market.\n\t\t\t\t"),n("br"),n("br"),t._v("\n\t\t\t\tCurrently, I'm helping to design a custom BMS system and telemetry system from scratch for SPARK, an electric motorcycle student project team at Michigan!\n\t\t\t\t"),n("br"),n("br"),t._v("\n\t\t\t\tIf you're interested at learning more about some of the cool things I've worked on, feel free to check out my projects section!\n\t\t\t\t"),n("br"),n("br"),t._v("\n\t\t\t\tInterests: building awesomeness, boarding, and enjoying being young.\n\n\t\t\t")])])}]};var b=n("VU/8")(f,v,!1,function(t){n("OMKs")},"data-v-f996a486",null).exports,y=n("DQDF"),_=n.n(y),w={name:"Project",props:{project:{type:Object,required:!0}},data:function(){return{currentRoute:B.currentRoute.name}},methods:{redirectUrl:function(t){"software"==this.project.type?window.open(t):(console.log("for hardware"),window.open(t))}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"project-img"},[n("div",{staticClass:"pf-picture",on:{click:function(e){t.redirectUrl(t.project.url)}}},[n("img",{staticClass:"pf-img",attrs:{src:t.project.imageSrc,alt:"Arthur Zhang",height:"100%",width:"100%"}})])]),t._v(" "),n("div",{staticClass:"project-desc"},[n("h2",{on:{click:function(e){t.redirectUrl(t.project.url)}}},[t._v("\n\t\t\t"+t._s(t.project.title)+"\n\t\t")]),t._v(" "),n("div",{staticClass:"date"},[n("b",[t._v(t._s(t.project.date))])]),t._v(" "),n("span",[t._v("\n\t\t\t"+t._s(t.project.description)+"\n\t\t")]),t._v(" "),n("button",{staticClass:"info-btn",attrs:{type:"submit"},on:{click:function(e){t.redirectUrl(t.project.url)}}},["software"==t.project.type?n("span",[t._v("Github")]):n("span",[t._v("Paper")])])])])},staticRenderFns:[]};var C={name:"Projects",components:{"nav-bar":d,"project-card":n("VU/8")(w,k,!1,function(t){n("hmJP")},null,null).exports},data:function(){return{projectContainer:[],searchQuery:"",navMsg:"Just a kid trying to build big things."}},computed:{filteredProjects:function(){var t=this;return this.projectContainer.filter(function(e){return e.title.toUpperCase().match(t.searchQuery.toUpperCase())})}},methods:{loadProjectData:function(){for(var t in _.a)this.projectContainer.push({title:_.a[t].title,url:_.a[t].url,date:_.a[t].date,imageSrc:_.a[t].src,description:_.a[t].desc,type:_.a[t].type,hash:_.a[t].hash})},removeSearchQuery:function(){this.searchQuery="",this.isProject=!1},submitSearch:function(){return this.isResult=!0,this.filteredProjects},projectId:function(t){return"#"+t}},created:function(){this.loadProjectData()}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{description:t.navMsg}}),t._v(" "),n("div",{staticClass:"project-content"},[n("div",{staticClass:"table-contents table-contents-small"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{id:"search-bar",type:"text",placeholder:"Search for project..."},domProps:{value:t.searchQuery},on:{keyup:t.submitSearch,input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t._l(t.filteredProjects,function(e,a){return n("li",{key:a,staticClass:"list-links"},[n("span",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:t.projectId(e.title),expression:"projectId(project.title)"}]},[t._v(t._s(e.title))])])})],2)]),t._v(" "),n("div",{staticClass:"projects-container"},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.filteredProjects.length<=0,expression:"filteredProjects.length <= 0"}]},[t._v("No projects found with that name :'(")]),t._v(" "),t._l(t.filteredProjects,function(t,e){return n("transition-group",{key:e,staticClass:"main-content",attrs:{name:"staggered-fade",tag:"div",id:t.hash}},[n("project-card",{key:e,staticClass:"project-container",attrs:{project:t}})],1)})],2)])],1)},staticRenderFns:[]};var S=n("VU/8")(C,j,!1,function(t){n("B7iu")},"data-v-59939f6f",null).exports,M={name:"Musings",components:{"nav-bar":d},data:function(){return{navMsg:"Just speaking some thoughts on my mind"}},methods:{}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-bar",{attrs:{description:this.navMsg}}),this._v(" "),e("h2",[this._v("Under construction, thoughts to come")])],1)},staticRenderFns:[]};var I=n("VU/8")(M,P,!1,function(t){n("qbwM")},"data-v-3381eb5d",null).exports,A={name:"Contact",components:{"nav-bar":d},data:function(){return{navMsg:"Always looking for an job to build awesome things."}},methods:{redirectToLink:function(t){window.open(t)},openResume:function(){window.open("/../../static/images/Arthur_Zhang_Resume.pdf")}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{description:t.navMsg}}),t._v(" "),n("h4",[t._v("\n\t\tFeel free to contact me about anything! I usually try to respond within a day or two.\n\t")]),t._v(" "),n("div",[n("b",[t._v("Email: ")]),t._v(" "),n("span",{staticClass:"link"},[t._v("arthurzh@umich.edu")]),t._v(" "),n("br"),n("br"),t._v(" "),n("b",[t._v(" Linkedin: ")]),t._v(" "),n("span",{staticClass:"link",on:{click:function(e){t.redirectToLink("https://www.linkedin.com/in/arthur-k-zhang/")}}},[t._v("https://www.linkedin.com/in/arthur-k-zhang/")]),t._v(" "),n("br"),n("br"),t._v(" "),n("b",[t._v(" Github: ")]),t._v(" "),n("span",{staticClass:"link",on:{click:function(e){t.redirectToLink("https://github.com/KingArthurZ3")}}},[t._v("https://github.com/KingArthurZ3")]),t._v(" "),n("br"),n("br")]),t._v(" "),n("div",[n("b",{staticClass:"link",attrs:{href:"/../../static/images/Arthur_Zhang_Resume.pdf"},on:{click:function(e){t.openResume()}}},[t._v("View Resume")])])],1)},staticRenderFns:[]};var T=n("VU/8")(A,R,!1,function(t){n("W3VO")},"data-v-2fee26cb",null).exports,x={name:"ProjectDetail",components:{"nav-bar":d},data:function(){return{title:B.currentRoute.path}},methods:{},created:function(){}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav-bar"),this._v(" "),e("h1",[this._v("\n\t\t"+this._s(this.title)+"\n\t")])],1)},staticRenderFns:[]};var q=n("VU/8")(x,F,!1,function(t){n("7IGl")},"data-v-74c4b297",null).exports;a.a.use(i.a);var B=new i.a({scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:{x:0,y:0}},routes:[{path:"/",name:"Dashboard",component:g},{path:"/about",name:"About",component:b},{path:"/projects",name:"Projects",component:S},{path:"/musings",name:"Musings",component:I},{path:"/contact",name:"Contact",component:T},{path:"/projects/:type/:project_name",name:"Project_Detail",component:q}]}),U=n("bm7V"),E=n.n(U);a.a.config.productionTip=!1,a.a.use(E.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),new a.a({el:"#app",router:B,components:{App:s},template:"<App/>"})},OMKs:function(t,e){},W3VO:function(t,e){},hmJP:function(t,e){},lIH3:function(t,e){t.exports={0:{title:"In Hub Electric Longboard Motor",image:"../../static/images/square/Hub_Motor_Assembly_Open.png",hash:"#ElectricLongboard"},1:{title:"Stock Market Prediction Algorithm",image:"../../static/images/square/StockDisplaySite.png",hash:"#Mr.MarketWatch"},2:{title:"Telemetry Dashboard Gui",image:"../../static/images/square/telemetry.png",hash:"#TelemetrySpark"},3:{title:"Breast Cancer Classification Algorithm",image:"../../static/images/square/feature-comparison.png",hash:"#BreastCancer"},4:{title:"Telemetry Sensor PCB",image:"../../static/images/square/TelemetryPCB.PNG",hash:"#TelemetrySpark"},5:{title:"FIRST Robotics Climbing System",image:"../../static/images/ClimberFullSystem.png",hash:"#FIRST2018"},6:{title:"Yelp Review Sentiment Classifier Algorithm",image:"../../static/images/yelp-review.png",hash:"#SentimentAnalysis"},7:{title:"Custom Linear Algebra Equation Solving Library",image:"../../static/images/linsystemsbg.png",hash:"#LinearAlgebra"},8:{title:"Clothing Image Recognition ML Model",image:"../../static/images/clothing-classifier.png",hash:"#ClothingClassifier"},9:{title:"Torque Spring Motor",image:"../../static/images/Negator Spring Motor.png",hash:"#TorqueSpring"},10:{title:"Battery Management System PCB",image:"../../static/images/BMS_1_3D.png",hash:"#BMS_1_PCB"}}},qbwM:function(t,e){},qf9G:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1a2cc08dc12c0e35f0de.js.map