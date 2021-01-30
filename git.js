const { exec } = require("child_process");

let args = process.argv;
args.splice(0, 2);
const message = args.join(" ");
exec("git add .", cbadd);

function cbadd(err, strout, sdtin) {
	if (err) {
		console.log(err);
		return;
	}
	//worked
	exec(`git commit -m "${message}"`, cbcommit);
}

function cbcommit(err, strout, sdtin) {
	if (err) {
		console.log(err);
		return;
	}
	//worked
	console.log("committed");
}
