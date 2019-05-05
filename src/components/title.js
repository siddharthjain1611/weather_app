/**
 * Created by LENOVO on 20-03-2019.
 */
import React from 'react';
//importing all the required files
//defining title functional component

const Title=(props)=>{
    return (
        <div className="jumbotron">
            <div className="row">
                <h1 className="col-md-6 offset-md-4"> Weather Forecast and report</h1>

            </div>
            <div>
                <h5 className="col-md-5 offset-md-5 modal-header">Get your weather report instantly!!</h5>
            </div>
        </div>
    )
}

//exporting the title module
export default Title;