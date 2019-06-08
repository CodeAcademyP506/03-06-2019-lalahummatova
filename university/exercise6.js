
        var University = {
            name: "ADNSU",
            Teacher:
            {
                tname: "Eli",
                tsurname: "Eliyev",
                Groups: [
                    {
                        gname: "645.6",
                        Students: [
                            {
                                sname: "Ekber",
                                ssurname: "Amanov",
                                score: 70,
                                getinfo: function () {
                                    return this.sname + " " + this.ssurname
                                },
                                getTeacherName: function () {
                                    return University.Teacher.tname
                                }
                            },
                            {
                                sname: "Elnur",
                                ssurname: "Veliyev",
                                score: 80,
                                getinfo: function () {
                                    return this.sname + " " + this.ssurname
                                },
                                getTeacherName: function () {
                                    return University.Teacher.tname
                                }
                            },
                        ],
                        CountOfStudents: function () {
                            return this.Students.length
                        },
                        teacherOfGroup: function () {
                            return University.Teacher.tname
                        },
                        getAvarageScore: function () {
                            let sum = 0;
                            for (let i = 0; i < this.Students.length; i++) {
                                sum += this.Students[i].score
                            }
                            return sum / this.Students.length;
                        },
                        countOfGroups: function () {
                            return University.Teacher.Groups.length
                        }
                    },
                    
                ]
            },
            bestOfAll:function(){
               
                for(let i = 0; i<University.Teacher.Groups.length ; i++){
                    let maxScore = University.Teacher.Groups[0].Students[0].score;
                    for(let j = 0; j<University.Teacher.Groups[i].Students.length; j++){
                        if(maxScore < University.Teacher.Groups[i].Students[j].score){
                            maxScore =  University.Teacher.Groups[i].Students[j].score;
                            return maxScore;
                        }
                    }
                }
            }
        }
        console.log(University.bestOfAll())