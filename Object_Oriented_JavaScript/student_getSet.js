class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }
  get level(){
    if(this.credits > 90){
      return 'Senior';
       } else if(this.credits>= 61 && this.credits <90){
       	return 'Junior';
       } else if(this.credits >=31 && this.credits <61){
       	return 'Sophomore';
       } else if(this.credits <=30){
       	return 'Freshman';
       }
  
  
  }
    set major(major){
    
      if (this.level === 'Senior' || this.level === 'Junior') {
        this._major = major;
      } else {
        this._major = 'none';
      }
    
    
  }

    stringGPA() {
        return this.gpa.toString();
    }
}

const student = new Student(3.9,88);

console.log(student.level);