
const isArrayEmty = (arr) => { //functional component
    if(arr !== undefined && arr !== null && arr.length > 0){
        return false;
    }
    return true;
}

const dumpLogs = (message) => {
    console.log(message);
}

export {isArrayEmty, dumpLogs}