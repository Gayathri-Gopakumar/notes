// add
const addNote=()=>{
    // noteArray=[]
    if(note.value){
        const notes=document.getElementById('note').value
        // localStorage.setItem("notes",notes)
    //    noteArray+=notes
       document.getElementById('notecard').innerHTML+=`<div class="card" style="width:300px; height:100px; margin-left:42%; margin-top:2%">
            <h5 class="card-header">TO DO</h5>
            <div class="card-body">
              
              <p class="card-text">${note.value}<a onclick="deleteNote(this)" class="ms-5 fw-bolder text-success" style="text-decoration:none";>DONE</a></p>
             
            </div>
          </div>`
        
    }
    else{
        alert("Please enter a note!!!")
    }
  document.getElementById('note').value=""
}

// delete
const deleteNote=(element)=>{
    const noteCard = element.closest('.card');
    noteCard.remove();
}

