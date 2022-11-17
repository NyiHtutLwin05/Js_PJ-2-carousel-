let myArr = [
    {name:"Kelvin",
     job: "Content Writer",
     text:   "Gloria is an out-of-work party girl who leaves New York and moves back to her hometown after getting kicked out of her apartment by her boyfriend. When news reports surface that a giant creature is destroying Seoul ",   
      Image:"/Randomly_pratice/img/fine.jpg"},

    {name:"Eddy",
     job: "Graphic Designer",
     text:   "  Youre looking for something to rent this week, theres a decent variety of choices to pick from, even if the best choices are the smaller films. Regardless, if you were waiting for the elderly heist movie starring",  
     Image:"/Randomly_pratice/img/getle.jpg"},

    {name:"Michael",
     job: "UI/UX",
     text:   "Cole Kidman, Reese Witherspoon, and Shailene Woodley star in this HBO drama centering on three mothers living in a Monterrey community where a shocking murder takes place.",  
     Image:"/Randomly_pratice/img/soft.jpg"},
    
];
// let [x,y,z] = myArr;

let myImg = document.getElementsByTagName("img")[0];
let myBtnAll =document.querySelectorAll(".myBtn");
let myBtnOne=document.querySelector(".Btn-2");

let myName = document.querySelector(".myPara");
let myNameSrc = myName.innerHTML;

let jobName = document.querySelector(".job");
let myOriJob = jobName.innerHTML;

let myPara = document.querySelector(".paragraph");
let myOriPara= myPara.innerHTML;

let originalImg = myImg.src;
let counter = 0;
let counterImg;


myBtnAll.forEach((x) =>{
    x.addEventListener("click",(e)=>{
     let myStyle = e.currentTarget.classList;
       if(counter===3){
        myImg.src = originalImg;
        myName.innerHTML = myNameSrc;   
        jobName.innerHTML= myOriJob;
        myPara.innerHTML =myOriPara;
        counter =0;
        return;
       }
        if(myStyle.contains("Btn-2")){
            let myArrImg = myArr[counter].Image;
             myImg.src = myArrImg;
             myName.innerHTML = myArr[counter].name;
             jobName.innerHTML =myArr[counter].job;
             myPara.innerHTML = myArr[counter].text;
             counter ++; 
                   
        }
     
    })
});
