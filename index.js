
const addTrigger = (id)=>{
    console.log(id);
    let button = document.getElementById(id);
    button.onclick = ()=>{
        console.log("Toto");
    };
}

const calculateStudent = (pupil) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = pupil.firstName;

    const button = document.createElement("button");
    button.innerHTML="Clap!";
    button.id = pupil.id+'_clap';
    addTrigger(button.id);

    listItem.append(button);

    return listItem;
}

document.body.onload = ()=>{
    const heroesGallery = document.getElementById('heroes-gallery');
    const list = document.createElement("ul");

    for(let i=0;i<jsStudents.length;i++){
        let student = jsStudents[i];
    
        const newStudent = calculateStudent(student);

        list.append(newStudent);
    }
    heroesGallery.append(list);
}