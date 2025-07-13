const students = [
    { id: 1, name: "Alice Johnson", age: 19, courses: [{ name: "Calculus I", grade: 88 }, { name: "Intro to CS", grade: 90 }] },
    { id: 2, name: "Benjamin Lee", age: 20, courses: [{ name: "Calculus I", grade: 76 }, { name: "Physics I", grade: 82 }] },
    { id: 3, name: "Chloe Martinez", age: 18, courses: [{ name: "English Lit.", grade: 91 }, { name: "Calculus II", grade: 85 }] },
    { id: 4, name: "David Kim", age: 21, courses: [{ name: "Data Structures", grade: 79 }, { name: "Physics I", grade: 74 }] },
    { id: 5, name: "Ella Thompson", age: 19, courses: [{ name: "Intro to CS", grade: 92 }, { name: "Calculus II", grade: 87 }] },
    { id: 6, name: "Frank Wright", age: 22, courses: [{ name: "English Lit.", grade: 68 }, { name: "Calculus I", grade: 74 }] },
    { id: 7, name: "Grace Liu", age: 20, courses: [{ name: "Physics I", grade: 95 }, { name: "Data Structures", grade: 81 }] },
    { id: 8, name: "Henry Patel", age: 21, courses: [{ name: "Calculus II", grade: 66 }, { name: "Intro to CS", grade: 70 }] },
    { id: 9, name: "Isla Rivera", age: 18, courses: [{ name: "Data Structures", grade: 88 }, { name: "Calculus I", grade: 83 }] },
    { id: 10, name: "Jack Nguyen", age: 19, courses: [{ name: "English Lit.", grade: 77 }, { name: "Physics I", grade: 85 }] },
    { id: 11, name: "Katie Adams", age: 20, courses: [{ name: "Intro to CS", grade: 94 }, { name: "Calculus II", grade: 89 }] },
    { id: 12, name: "Leo Park", age: 17, courses: [{ name: "Data Structures", grade: 72 }, { name: "English Lit.", grade: 80 }] },
    { id: 13, name: "Mia Hassan", age: 18, courses: [{ name: "Physics I", grade: 69 }, { name: "Calculus I", grade: 71 }] },
    { id: 14, name: "Noah Cooper", age: 21, courses: [{ name: "Calculus II", grade: 84 }, { name: "Data Structures", grade: 86 }] },
    { id: 15, name: "Olivia Brooks", age: 19, courses: [{ name: "Intro to CS", grade: 91 }, { name: "Physics I", grade: 88 }] },
    { id: 16, name: "Paul Singh", age: 20, courses: [{ name: "English Lit.", grade: 73 }, { name: "Calculus I", grade: 79 }] },
    { id: 17, name: "Quinn Bailey", age: 22, courses: [{ name: "Calculus II", grade: 93 }, { name: "Intro to CS", grade: 85 }] },
    { id: 18, name: "Riley Zhang", age: 19, courses: [{ name: "Physics I", grade: 90 }, { name: "Data Structures", grade: 89 }] },
    { id: 19, name: "Sofia Hernandez", age: 18, courses: [{ name: "Calculus I", grade: 77 }, { name: "English Lit.", grade: 83 }] },
    { id: 20, name: "Tyler Moore", age: 21, courses: [{ name: "Intro to CS", grade: 74 }, { name: "Calculus II", grade: 81 }] }
];


const courses = [
    { code: 'CS101', title: 'Intro to CS', credits: 4, instructorId: 100 },
    { code: 'CS102', title: 'Data Structures', credits: 3, instructorId: 101 },
    { code: 'MATH201', title: 'Calculus I', credits: 4, instructorId: 102 },
    { code: 'MATH202', title: 'Calculus II', credits: 4, instructorId: 103 },
    { code: 'PHYS101', title: 'Physics I', credits: 4, instructorId: 104 },
    { code: 'ENG301', title: 'English Lit.', credits: 3, instructorId: 105 }
];


const instructors = [
    { id: 100, name: 'Dr. Smith', dept: 'Computer Science' },
    { id: 101, name: 'Prof. Lee', dept: 'Computer Science' },
    { id: 102, name: 'Dr. Gupta', dept: 'Mathematics' },
    { id: 103, name: 'Dr. RD Sharma', dept: 'Mathematics' },
    { id: 104, name: 'Dr. O’Brien', dept: 'Physics' },
    { id: 105, name: 'Prof. Davis', dept: 'English' }
];


const studentMatrix = [
    [1, "Alice Johnson", 19],
    [2, "Benjamin Lee", 20],
    [3, "Chloe Martinez", 18],
    [4, "David Kim", 21],
    [5, "Ella Thompson", 19],
    [6, "Frank Wright", 22],
    [7, "Grace Liu", 20],
    [8, "Henry Patel", 21],
    [9, "Isla Rivera", 18],
    [10, "Jack Nguyen", 19],
    [11, "Katie Adams", 20],
    [12, "Leo Park", 22],
    [13, "Mia Hassan", 18],
    [14, "Noah Cooper", 21],
    [15, "Olivia Brooks", 19],
    [16, "Paul Singh", 20],
    [17, "Quinn Bailey", 22],
    [18, "Riley Zhang", 19],
    [19, "Sofia Hernandez", 18],
    [20, "Tyler Moore", 21]
];

const newStudent = {
    id: 21,
    name: "Mayank Johnson",
    age: 45,
    courses: [
        { name: "Calculus I", grade: 88 },
        { name: "Intro to CS", grade: 90 }]
}



//<================= Add Student =================>


function addStudent(students, newStudent) {

    const requiredFields = ["id", "name", "age", "courses"]

    if (!Array.isArray(students)) {
        console.error("Students data must be in the form of an array..")
        return [];
    }

    if (typeof newStudent !== "object" || newStudent === null) {
        console.error("New Student must be a valid object")
        return students;
    }
    for (let field of requiredFields) {
        if (!(newStudent.hasOwnProperty(field))) {
            console.error(`Missing required field: ${field}`);
            return students;
        }
    }

    if (typeof newStudent.id !== "number") {
        console.error("ID must be a number for new student")
        return students;
    }


    return [...students, newStudent]
}
console.log(addStudent(students, newStudent));


//<================= RemoveStudentById =================>


function removeStudentById(students, id) {
    const requiredFields = ["id", "name", "age", "courses"]

    if (!Array.isArray(students)) {
        console.error("Students data must be in the form of an array..")
        return [];
    }

    if (typeof id !== "number") {
        console.error("ID must be a valid number");
        return students;
    }

    for (let student of students) {
        for (let field of requiredFields) {
            if (!student.hasOwnProperty(field)) {
                console.error(`Missing required field: ${field}`);
                return students;
            }
        }
    }

    if (!students.find((student) => student.id === id)) {
        console.error(`No student found with this : ${id}`);
        return students;
    }

    return students.filter((s) => s.id !== id)
}
console.log(removeStudentById(students, 5));


//<================= Update Student Name =================>


function updateStudentName(students, id, newName) {

    const requiredFields = ["id", "name", "age", "courses"]

    if (!Array.isArray(students)) {
        console.error("Students data must be in the form of an array..")
        return [];
    }

    if (typeof id !== "number") {
        console.error("ID must be a valid number");
        return students;
    }

    if (typeof newName !== "string" || newName.trim() === "") {
        console.error("Name must be a non-empty string..");
        return students;
    }

    for (let student of students) {
        for (let field of requiredFields) {
            if (!student.hasOwnProperty(field)) {
                console.error(`Missing required field: ${field}`);
                return students;
            }
        }
    }

    if (!students.find((student) => student.id === id)) {
        console.error(`No student found with this : ${id}`);
        return students;
    }


    return students.map(
        (student) => student.id === id ?
            { ...student, name: newName } : student
    )
}

console.log(updateStudentName(students, 5, "Mayank"));


//<================= Get Student =================>


function getStudentById(students, id) {

    const requiredFields = ["id", "name", "age", "courses"]

    if (!Array.isArray(students)) {
        console.error("Students data must be in the form of an array..")
        return null;
    }

    if (typeof id !== "number" || isNaN(id)) {
        console.error("ID must be a valid number");
        return null;
    }

    for (let student of students) {
        for (let field of requiredFields) {
            if (!student.hasOwnProperty(field)) {
                console.error(`Missing required field: ${field}`);
                return null;
            }
        }
        if (student.id === id) {
            return student;
        }
    }

    return null;
}

console.log(getStudentById(students, -19));


//<================= Calculate Average Grade =================>


function calculateAverageGrade(student) {

    if (typeof student !== "object" || student === null) {
        console.error("Invalid student data.");
        return 0;
    }
    if (!Array.isArray(student.courses)) {
        console.error("Courses must be an array.");
        return 0;
    }

    for (let course of student.courses) {
        if (typeof course.grade !== "number" || isNaN(course.grade)) {
            console.error("Invalid grade found in:", course);
            return 0;
        }
    }

    let n = student.courses.length;

    let average = student.courses.reduce((acc, course) => {
        // console.log(course.grade)
        return acc += course.grade
    }, 0)
    return n ? (average / n) : 0;
}
console.log(calculateAverageGrade(students[0]))


//<================= Get Honor Roll -> students with avg ≥ threshold =================>


function getHonorRoll(students, threshold) {
    if (!Array.isArray(students)) {
        console.error("Students must be an array.");
        return null;
    }
    if (typeof threshold !== "number" || isNaN(threshold)) {
        console.error("Threshold must be a valid number.");
        return null;
    }

    return students
        .filter((student) => {
            const average = calculateAverageGrade(student)
            return average >= threshold
        })
}
console.log(getHonorRoll(students, 90))


//<================= Get Course Roster(students, courseName) =================>


function getCourseRoster(students, courseName) {
    const result = []

    if (!Array.isArray(students)) {
        console.error("Students must be an array.");
        return null;
    }
    if (typeof courseName !== "string" || courseName.trim() === "") {
        console.error("CourseName must be a non-empty string.");
        return [];
    }

    for (let student of students) {
        for (let course of student.courses) {
            if (course.name === courseName) {
                result.push({ id: student.id, name: student.name, grade: course.grade })
            }
        }
    }
    return result;
}
console.log(getCourseRoster(students, "Physics I"))


//<================= Print student Summaries =================>

/*
function printStudentSummaries(students) {
    return students.map((student) => {
        return ({
            name: student.name,
            id: student.id,
            age: student.age
        })
    })
}
console.table(printStudentSummaries(students))
*/

//<================= Find first underAge =================>

/*
function findFirstUnderage(students, ageLimit) {

for (let student of students) {
    if (student.age < ageLimit) {
        return student;
        }
        }
        return null
        }

        console.log(findFirstUnderage(students, 16));
        */


//<================= countFailingCourses =================>

/*
function countFailingCourses(students, passMark) {
    let count = 0;
    for (let student of students) {
        for (let course of student.courses) {
            if (course.grade < passMark) {
                count++;
            }
        }
    }
    return count;
}

console.log(countFailingCourses(students, 75))
*/

//<================= Create Grade Filter =================>

/*
function createGradeFilter(min, max) {

    return function (student) {
        return student.courses.map((course) => {
            return ({
                studentName: student.name,
                name: course.name,
                grade: course.grade,
                inRange: course.grade >= min && course.grade < max
            })
        })
    }

}
const gradeFilter = createGradeFilter(60, 85)
console.log(gradeFilter(students[1]))
*/

//<================= Get Courses By Instructor =================>

/*
function getCoursesByInstructor(courses, instructorId) {
const courseByInstuctor = []

for (let course of courses) {
    if (course.instructorId === instructorId) {
        courseByInstuctor.push({ code: course.code, title: course.title })
    }
}

return courseByInstuctor;
}

console.log(getCoursesByInstructor(courses, 101))
*/

//<================= Total Credits per Student =================>

/*
function totalCreditsPerStudent(students, courses) {

return students.map((student) => {
    let totalCredits = 0;
    for (let course of student.courses) {
        for (let c of courses) {
            if (c.title === course.name) {
                totalCredits += c.credits;
            }
        }
    }
    return ({
        name: student.name,
        id: student.id,
        credits: totalCredits
    })

})


}
console.log(totalCreditsPerStudent(students, courses));
*/

//<================= Student Transcript =================>

/*
function studentTranscript(students, courses, instructors) {
    const result = []

    for (let student of students) {
        const transcript = []
        for (let course of student.courses) {
            for (let c of courses) {
                for (let instructor of instructors) {
                    if (course.name === c.title) {
                        if (c.instructorId === instructor.id) {
                            transcript.push({
                                course: c.title,
                                grade: course.grade,
                                instructorName: instructor.name
                            })
                        }
                    }
                }
            }
        }
        result.push({
            name: student.name,
            id: student.id,
            transcript: transcript
        })
    }
    return result;
}
console.dir(studentTranscript(students, courses, instructors), { depth: null })
*/


//<================= Top Students By Course =================>

/*
function topStudentsByCourse(students, courseName, n) {
    const result = []

    for (let student of students) {
        for (let course of student.courses) {
            if (course.name === courseName) {
                result.push({
                    name: student.name,
                    course: courseName,
                    grade: course.grade
                });
            }
        }
    }
    result.sort((a, b) => b.grade - a.grade);

    return result.slice(0, n);
}
console.table(topStudentsByCourse(students, courses[1].title, 5))
*/

//console.table(students);

