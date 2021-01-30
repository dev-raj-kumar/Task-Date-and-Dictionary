// Required fuction to do the task
function solution(D){
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];    // An array for getting the key efficiently without using switch or if else blocks
   
   let dayPresentInD = [false,false,false,false,false,false,false]; // An array for recording whether a specific week day is present in given dictionary or not
   
   let newD = {'Mon':0,'Tue':0,'Wed':0,'Thu':0,'Fri':0,'Sat':0,'Sun':0}; // The new Dictionary to be returned
   
   //looping through all keys in the given dictionary
   for(var date in D){
       
       let parts = date.split('-'); // Splitting the String date int parts to efficiently convert into Date type.
       
       let newDate =  new Date(parts[0],parts[1]-1,parts[2]); // returns the new Date type 
       
       let day = newDate.getDay(); // A JavaScript inbuilt function which returns the index of weeek day in range 0-6. 0 for Sunday
       
       dayPresentInD[day]=true; // marking the day present in the given dictionary
       
       newD[days[day]] += D[date]; // adding the value of the current date string key into the new Dictionary
   }
   
   // loop for updating the value of those week days which were not present in the given dictionary
   // starting from index 2 as Sunday and Monday would be atleast present
   for(let i=2;i<7;i++){
       // if cuurent index day is not Present
       if(dayPresentInD[i] === false){
           
           //If it's any of previous or next day is not present then take the mean of value of 'Sun' and 'Mon'
           if(dayPresentInD[i-1]===false || dayPresentInD[(i+1)%7]===false){
               
               dayPresentInD[i]=true; // Marking as now updated
               newD[days[i]] = (newD[days[0]]+newD[days[1]])/2; // updating it's value as desired mean
           }
           else{
               dayPresentInD[i]=true;   // Marking as now updated
               newD[days[i]] = (newD[days[i-1]] + newD[days[(i+1)%7]])/2; //updating it's value as mean of previous and next day value
           }
       }
   }
   return newD; // return the new dictionary
}


let unitTest1 = {'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8, '2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2};
let unitOutput1 = {'Mon': -6, 'Tue': 2, 'Wed' : 2 , 'Thu' : 4, 'Fri' :6, 'Sat': 8, 'Sun' : 2};
if(JSON.stringify(solution(unitTest1)) === JSON.stringify(unitOutput1)){
    print("true for Unit Test 1");
}
else
print("false for Unit Test 1");

let unitTest2 = {'2020-01-01':6, '2020-01-04':12, '2020-01-05':14,'2020-01-06':2,'2020-01-07':4};
let unitOutput2 = {'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri':10, 'Sat': 12, 'Sun': 14};
if(JSON.stringify(solution(unitTest2)) === JSON.stringify(unitOutput2)){
    print("true for Unit Test 2");
}
else
print("false for Unit Test 2");

let unitTest3 = {'2020-01-01':4,'2020-01-02':4,'2020-01-08':6,'2020-01-04':-8, '2020-01-05':2,'2020-01-06':-6,'2019-12-29':2,'2019-12-30':-2};
let unitOutput3 = {'Mon': -8, 'Tue': 1, 'Wed' : 10 , 'Thu' : 4, 'Fri' :-2, 'Sat': -8, 'Sun' : 4};
if(JSON.stringify(solution(unitTest3)) === JSON.stringify(unitOutput3)){
    print("true for Unit Test 3");
}
else
print("false for Unit Test 3");

// For printing the returned Object from the solution function
/*let returnedDictionary = solution(unitTest3);
for(var date in returnedDictionary){
    print(date + " : " + returnedDictionary[date]);
}*/
