var combinationSum = function(candidates, target) {
    let sortedCandidates = candidates.sort((a, b) => a - b);
    let validInt = [];
    for(i = 0; i < sortedCandidates.length; i += 1) {
        if(sortedCandidates[i] <= target){
            validInt.push(sortedCandidates[i]);
        }else{
            break
        }
    }

    
    for(i = 0; i < sortedCandidates.length; i += 1) {
        if(target % sortedCandidates[i]){

        } else {
            let multiple = target / sortedCandidates[i]
        }
    }
};