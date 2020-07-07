function solution(D){

    function withinTwoDate (D){
        const dates = Object.keys(D);
        const start = new Date(dates[0]);
        const end = new Date(dates[1]);

        const daysWithin = (end.getTime() - start.getTime())/(24*60*60*1000) - 1;
        if(!daysWithin) return D;

        let commonDiff = (D[dates[1]] - D[dates[0]]) / (daysWithin + 1);
        const startVal = D[dates[0]];
        const endVal = D[dates[1]];
    
        const newDates = {};
        newDates[start.toJSON().slice(0,10)] = startVal;    
        let nextDate = start;
        
        for(let i = 0; i<daysWithin; i++){
            nextDate = new Date(nextDate.getTime() + 24*60*60*1000);
            newDates[nextDate.toJSON().slice(0,10)] = startVal + (i+1)*commonDiff;
        }
        
        newDates[end.toJSON().slice(0,10)] = endVal;
    
        return newDates;
    }

    const allDates = Object.keys(D)
    let result = {};


    for(let i = 0; i< allDates.length - 1; i++){
        const start = allDates[i];
        const end = allDates[i+1];
        const newObj = {};
        newObj[start] = D[start]
        newObj[end] = D[end]
        result = {...result,...withinTwoDate(newObj)};
    }

    return result;
}

module.exports = { solution };