/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
*/

/*

1) Iterate through height, finding the largest value of [height] 

*/

const maxArea = function(height){

    let largestArea = 0;
    let leftPoint = 0;
    let rightPoint = height.length -1;

    while (leftPoint < rightPoint){
        let leftWall = height[leftPoint];
        let rightWall = height[rightPoint];
        let currentArea = (rightPoint - leftPoint)*Math.min(leftWall, rightWall);

        if(currentArea > largestArea){
            largestArea = currentArea;
        }

        rightWall > leftWall ? leftPoint += 1 : rightPoint -= 1;

    } 

    return largestArea;

}

console.log(maxArea([1,2,1]))

