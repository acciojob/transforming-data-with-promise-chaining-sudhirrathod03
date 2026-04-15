//your JS code here. If required.
let userInput = document.getElementById("ip")
let btn = document.getElementById("btn")
let displayOutput = document.getElementById("output")

function makePromise(){
	let value = new Promise((resolve)=>{
		let num = parseInt(userInput.value);
		resolve(num);
	})
	value.then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				displayOutput.textContent = "Result: "+ num;
				resolve(num)
			},2000)
		})
	}).then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				num = num * 2
				displayOutput.textContent = "Result: "+ num;
				resolve(num)
			},1000)
		})
	}).then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				num = num-3
				displayOutput.textContent = "Result: "+ num;
				resolve(num)
			},1000)
		})
	}).then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				num = num / 2
				displayOutput.textContent = "Result: "+ num;
				resolve(num)
			},1000)
		})
	}).then((num)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				num = num + 10
				displayOutput.textContent = "Result: "+ num;
				resolve(num)
			},1000)
		})
	})
}



btn.addEventListener("click",makePromise)



