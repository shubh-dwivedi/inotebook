import React from 'react'

const AccountInfo = () => {
    let accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
  return (
    <div>
        <h2>Account Information</h2>
        <div className="container my-4">
            <h4>Name: <small>{accountInfo.name}</small></h4>
            <h4>Email: <small>{accountInfo.email}</small></h4>
        </div>
        <hr />
        <h3>Account Setting</h3>
        <div className="accordion my-3" id="accordionExample">
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne" >
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                <strong>Change Password</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" >
                This feature is currently under development.
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
              <strong>Danger Zone</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" >
                <p>This feature is currently under development. Once developed, this section will allow you to delete your account on this website. </p>
                <p><small><i>Warning: Once your account is deleted, you will not be able to retrieve your notes.</i></small></p>
                <button disabled type="button" className="btn btn-danger">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
            <h2>Change Password</h2>
            <button type="button" className="btn btn-secondary">Change Password</button>
        </div> */}
        {/* <div className="container">
            <h3>Danger Section</h3>
            <button disabled type="button" className="btn btn-danger">Delete Account</button>
        </div> */}
    </div>
  )
}

export default AccountInfo