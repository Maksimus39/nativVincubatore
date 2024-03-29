const mentors = [
    {"id": "id100", "title": "Dimych", "my salary": 10},
    {"id": "id20222", "title": "Victor", "my salary": 100},
    {"id": "id100", "title": "Valera", "my salary": 10},
    {"id": "id100", "title": "Artem", "my salary": 100}
]

const artemId = "id100"

const mentor1 = mentors.find(m => m.id === artemId)
const mentor2 = mentors[3]


// let keys = Object.keys(mentor1)
console.log(mentor1["my salary"])
mentor1["my salary"] = 50






const students = [
    {id: "id100", title: "Andrew"},
    {id: "id2", title: "Anna"},
    {id: "id4", title: "Sasha"},
    // ...
    {id: "10000", title: "Marina"}
]