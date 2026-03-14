const item = {
    price:199.99,
    discount:20,
    colors:["red", "green"]
};

// Thread / Twitter post - Object literals

const post = {
    username: "@ketanmakwana30",
    content: "This is my first post ",
    likes: 150,
    reposts: 12,
    tags: ["@rv_22", "@dharmesh_2007", "@aniket_gujjar"] 
};

const obj = {
    1: "a",             //1 and 2 is string
    2: "b", 
    true: "c",          //NOT use true, null, undefined and any other Keywords.
    null: "d",
    undefined: "e" 
};

const student = {
    name: "ketan",
    age: 19,
    marks: 80,
    city: "Bhavnagar"
};
 

student.city = "Mumbai";                //update value (city)
student.marks = ["99", "87", "54"];     //Update key value with array
student.gender = "male";                //Add new key and value
delete student.age;                     //Delete key (age)


//Object of Objects

const classInfo = {
    shradha:{
        marks: 89,
        grade: "A",
        city: "Hariyana"
    },
    aman: {
        marks: 98,
        grade: "A+",
        city: "Delhi"
    },

    prashant:{
        marks: 76,
        grade: "B",
        city: "Dehradun"
    }
}

//Array of Objects

const classInfo2 = [
    {
        name: "shradha",
        marks: 89, 
        grade: "A",
        city: "Hariyana"
    },
    {
        name: "aman",
        marks: 98,
        grade: "A+",
        city: "Delhi"
    },

    {
        name: "rajat",
        marks: 76,
        grade: "B",
        city: "Dehradun"
    }
]
