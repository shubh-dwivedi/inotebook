import React from 'react'

function About() {
  return (
    <div className='mt-4'>
        <h1>About iNotebook</h1>
        <div>
          <hr />
          <p><strong><i>This is a cloud based note making application and enables user to create, edit or delete your notes form anywhere. User needs to Create an account(signup) or Login to start using this application. This is a demo web application developed as a personal project for learning purpose only.</i></strong></p>

          <div className="accordion my-3" id="accordionExample">
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne" >
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                <strong>Create Notes in style</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" >
                <strong>Create</strong> or <strong>Edit</strong> notes in the way you want. To add a note simply use 'Add Note' section of home page. Just enter title, description and tag(optional) and click on 'Add Note' button. To Edit a note, click on pencil icon beside note title in the respective note and a Modal will open with editing functionality. After editing click on 'Update Note' button. To delete a note, click on delete icon beside edit(pencil) icon in respective note. Notes once deleted cannot be retrieved.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
              <strong>Usage Policy</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" >
              <strong>iNotebook</strong> is completely free to use and intended for personal use only, commercial usage of this app is not allowed. You need to login/signup to start using this app. Once you login/signup you will stay logged in from same browser until and unless you Logout yourself from the 'my account' section.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About