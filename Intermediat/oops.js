class Student {

    constructor(first_name, last_name, mobile_number, batch,tech_skills){
        this.fname = first_name,
        this.lname = last_name,
        this.contact = mobile_number,
        this.batch = batch,
        this.skills = tech_skills
    }

    UpdateName(UserName){
        this.fname = UserName;
    }


}

// object creating using new

const shubham = new Student("shubham", "maske", "5498974554", "TP_RP_06",["HTML","Css","Js"])

shubham.UpdateName("Omkar")
console.log(shubham)
