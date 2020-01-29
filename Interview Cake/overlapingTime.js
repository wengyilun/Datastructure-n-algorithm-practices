

let schedule = [
  { startTime: 0,  endTime: 1 },
  
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },

  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

function findZones(arr){
    // loop through each item
    // look for gap between endTime and startTime where endTIme is smaller then startTime
    
    const sortArr = arr.sort((a,b)=>{
            return a.startTime > b.startTime
    })

    console.log(sortArr) //?
    let mergedMeetings = [sortArr[0]]//?

    for(let i=1; i< sortArr.length; i++){
        let currentMeeting = sortArr[i]
        let lastMergedMeeting = mergedMeetings[mergedMeetings.length-1]
       
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
          } else {
      
            // Add the current meeting since it doesn't overlap
            mergedMeetings.push(currentMeeting);
          }
    }



    
    // create another block after the block
    // use the start time 
    // get the smallest start time and largest end tim
    return mergedMeetings
}

function mergeRanges(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  
    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  
    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];//?
  
    for (let i = 1; i < sortedMeetings.length; i++) {
      const currentMeeting    = sortedMeetings[i];
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];//?
  
      // If the current meeting overlaps with the last merged meeting, use the
      // later end time of the two
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
        lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      } else {
  
        // Add the current meeting since it doesn't overlap
        mergedMeetings.push(currentMeeting);
      }
    }
  
    return mergedMeetings;
  }

 const expected = [{startTime:0, endTime:1},
  {startTime:3, endTime:8},
  {startTime:9, endTime:12}
]


console.log(mergeRanges(schedule)) 
console.log(findZones(schedule)) 
