function calculateGrade(marks) {
  
    let studentScore;
    for(i=0; i<marks.length; i++) {
        if (marks[i] >= 90) {
          studentScore = 'A';
        } else if (marks[i] >=80 ) {
          studentScore = 'B';
        } else if (marks[i] >=70) {
          studentScoree = 'c';
        } else if (marks[i] >=60) {
          studentScore = 'D';
        } else if (marks[i] >=50) {
          studentScore = 'E';
        } else {
          studentScore = 'F';
        }
    }
    return studentScore;
  }
console.log(calculateGrade([]));


  module.exports =calculateGrade