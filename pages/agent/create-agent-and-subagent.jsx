import React from "react";
import useScript from "../../commonFunction/ReloadJs";
const CreateAgentAndSubAgent = () => {
  useScript("/assets/js/app.js");
  return (
    <div>
      <div className="row">
        <div className="col-md-1 m-b-30"></div>

        <div className="col-md-10 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Create agent and sub agent</h4>
              </div>
            </div>
            <div className="card-body">
              <form id="signupForm" method="post" className="form-horizontal" encType="multipart/form-data">
                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="inputState">Select agent type</label>
                      <select id="inputState" className="form-control">
                        <option selected>Select agent type</option>
                        <option>Agent</option>
                        <option>Sub agent</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Name
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productname" placeholder="Enter agent name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Number
                      </label>
                      <div className="mb-2">
                        <input type="number" className="form-control" id="fname" name="productcode" placeholder="Enter agent number" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Email
                  </label>
                  <div className="mb-2">
                    <input type="email" className="form-control" id="fname" name="productqty" placeholder="Enter agent Email" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Present address
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="tpprice" placeholder="Enter present address" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Permanent address
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productbuyprice" placeholder="Permanent address" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select division</label>
                      <select id="inputState" className="form-control">
                        <option>Dhaka</option>
                        <option>Bogura</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select district</label>
                      <select id="inputState" className="form-control">
                        <option>Dhaka</option>
                        <option>Bogura</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select upazila</label>
                      <select id="inputState" className="form-control">
                        <option>Dhaka</option>
                        <option>Bogura</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Company name
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productcashback" placeholder="Enter company name" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Office address
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productdiscount" placeholder="Enter office address" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Nid number
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productdeliverycharge" placeholder="Enter nid number" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Picture
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" id="lname" name="picture" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Set regular Commission (%)
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="productdeliverycharge" placeholder="Enter regular Commission" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAgentAndSubAgent;
