// Step 1: Declare variable
const internName ="Inya Precious";
let taskOne = 10;
var taskTwo = 8;
const taskThree = 6;



// Step 2: Calculate total and average
const totalScore = taskOne + taskTwo + taskThree;
const averageScore = totalScore / 3;
const roundedAverage = 
averageScore. toFixed(2);

// Step 3: Determine Grade
let grade;
if (averageScore >= 9) {
    grade = 'A';
} else if (averageScore >= 8) {
    grade = 'B';
} else if (averageScore >= 7) {
    grade = 'C';
} else if (averageScore >= 6) {
    grade = 'D';
} else {
    grade = 'E';
}

// Step 4:Display Output
const outputText = `
  Name: ${internName}  
  Task 1 Score: ${taskOne}  
  Task 2 Score: ${taskTwo}  
  Task 3 Score: ${taskThree}  
  
  Total Score: ${totalScore}  
  Average Score: ${roundedAverage}  
  
  Final Grade: ${grade}
`;
document.getElementById("output").innerText = outputText;

    // Step 5: Feedback Message
    let feedback;
    switch(grade) {
        case 'A':
            feedback = "Excellent performance!";
            break;
            case 'B':
                feedback = "Great job! keep amining high.";
                case 'C':
                    feedback ="Good effort.Try to improve";
                    break;
                    case 'D':
                        feedback = "You are close. keep working at it.";
                        break;
                        case 'E':
                            feedback = "Don't give up. you can do better next time.";
                            break;
                            default:
                                feedback = "No feedback available";
    }
    console.log(`feedback:  ${feedback}`
);