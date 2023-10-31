let bar=document.getElementById("bar");
let loading=document.getElementById("loading");


let barWidth=0;

let down=()=>{
	barWidth++;
	bar.style.width=`${barWidth}%`;
	setTimeout(()=>{
	loading.innerHTML=(barWidth===100)?`${barWidth}%completed`:`${barWidth}%progress`
		
	},1000)
	
}
down()

setTimeout(()=>{
	let interId=setInterval(()=>{
	if(barWidth===100){
		clearInterval(interId)
	}
	else{
		down()
	}
	},100)
	
},1000)