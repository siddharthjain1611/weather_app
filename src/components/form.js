/**
 * Created by LENOVO on 20-03-2019.
 */
import React from 'react';
//importing all the required files
//defining form functional component

const Form=(props)=>{
    return(
        <form onSubmit={props.loadWeather} className="col-md-8 offset-2">
        <div className="form-row">
            <div className="col">
                <input type="text" name="city" className="form-control" placeholder="Enter your city here"/>
            </div>
            <div className="col">
                <input type="text" name="country" className="form-control" placeholder="Enter your country here"/>
            </div>

            <button className="btn btn-success">Get weather information</button>
    </div>
    </form>
    )
}

//exporting the form module
export default Form;