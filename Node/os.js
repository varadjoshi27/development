const os=require("os");

//system architecture
let sytemArch=os.arch();
//cpu info
let cpuinfo=os.cpus();
//hotsname
let host=os.hostname();
//network interfaces
let networkInterfaces=os.networkInterfaces();
//print all now
console.log(sytemArch);
console.log(cpuinfo);
console.log(host);
console.log(networkInterfaces);
console.log(os.release());
console.log(os.platform());
console.log(os.type);
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());

