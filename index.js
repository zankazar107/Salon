/* console.log("test");

var org = "organized";
var nOrg = "not organized";
var cle = "clean";
var nCle = "not clean";
var object = [
	{
	"home": {
		"terrace": {
			"garden": nOrg,
			"backyard": nOrg,
			"pool": org,
			"garage": nOrg,
			"door step": org
		},
		"indoor": {
			"living room": cle,
			"kitchen": nCle,
			"bathroom": cle,
			"bedroom": nCle,
			"hallway": nCle
			}
		}
	},
	{
	"farm": {
		"shed": {
			"tools": "new"
		},
		"field": {
			"tractor": "old",
			"four wheeler": "new"
			}
		}
	},
	{
	"old house": "not used"
	}
];

 // return the value of a property depending on the argument.
 
 function myFun(obj,prop1,prop2,prop3) {
	 for (let i = 0; i < obj.length; i++) {
		 if (obj[i][prop1] && !obj[i][prop1][prop2]) {
			 return obj[i][prop1];
		 } else if (obj[i][prop1] && obj[i][prop1][prop2] && !obj[i][prop1][prop2][prop3]) {
			 return obj[i][prop1][prop2]
		 } else if (obj[i][prop1] && obj[i][prop1][prop2] && obj[i][prop1][prop2][prop3]) {
			 return obj[i][prop1][prop2][prop3]
		 }
	 }
 }

/* function func(obj,prop1,prop2,prop3) {
	for (let i = 0; i < obj.length; i++) {
		let value = obj[i][prop1][prop2][prop3];
		return value
	}
	return "Not found"
} 

 console.log(myFun(object, "old house"));


var mathProb = [
	{
	"1": {
		"times": {
			"1": "1",
			"2": "2",
			"3": "3",
			"4": "4",
			"5": "5"
		},
		"plus": {
			"1": "2",
			"2": "3",
			"3": "4",
			"4": "5",
			"5": "6"
			}
		}
	},
	{
	"2": {
		"times": {
			"2": "4"
		},
		"plus": {
			"2": "4",
			"4": "6"
			}
		}
	}
];


function math(obj,prop1,prop2,prop3) {
	for (let i = 0; i < obj.length; i++) {
		if (obj[i][prop1] && obj[i][prop1][prop2] && obj[i][prop1][prop2][prop3]) {
			let value = obj[i][prop1][prop2][prop3];
			return value
		}
	}
	return "Something went wrong"
};

console.log(math(mathProb,"2","times","2")); 

const myArrays = [1,2,3,4,5,6,7,8];
var total = 0;
function arrs(arr) {
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total
}

console.log(arrs(myArrays));

const sum = myArrays.reduce(
	(x,y) =>  x += y
);

console.log(sum); 

function findLongestWordLength(str) {
	const space = " ";
	const newArr = str.split(space);
	const length = []
	for (i = 0; i < newArr.length; i++) {
		length.push(newArr[i].length)
	}
	const result = Math.max(...length)
	return result
}
 
console.log(findLongestWordLength("When I wsa just a young boy I knew I wanted to be a bird.")) */


