function calculateStudentGrade(score) {
  let grade;
  // if score 90-100, student gets an A
  if (score >= 90 && score <= 100) {
    grade = "A";
  }
  // if score 80-89, student gets a B
  else if (score >= 80 && score <= 89) {
    grade = "B";
  }
  // if score 70-79, student gets a C
  else if (score >= 70 && score <= 79) {
    grade = "C";
  }
  // if score 60-69, student gets a D
  else if (score >= 60 && score <= 69) {
    grade = "D";
  }
  // if score 0-59, student gets a F
  else if (score >= 0 && score <= 59) {
    grade = "F";
  }
  else {
    grade = "F";
  }

  return grade;
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
