/**
 * Created by LENOVO on 20-03-2019.
 */
import React from 'react';
const Weather=(props)=>{
    return(
        <div>

            <div>{props.error && <p>{props.error}</p>}</div>
            <br />
            <div className="col-md-10 offset-md-2">
                <div>{props.desc && <p><b>{props.desc}</b></p>}</div>
                <div class="row">
                    <div class="col-md-4">
                        {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
                    </div>
                    <div class="col-md-4">
                        <p>{props.temperature && <p>Temperature: {props.temperature} (in Celsius)</p>}</p>
                    </div>
                    <div class="col-md-4">
                        <p>{props.humidity && <p>Humidity: {props.humidity}</p>}</p>
                    </div>

                </div>
                <br />
                <div>{props.desc2 && <p><b>{props.desc2}</b></p>}</div>
                <div class="row">
                    <div class="col-md-4">
                        {props.forecast_date[0] && <p>Date: {props.forecast_date[0]}</p>}
                    </div>
                    <div class="col-md-4">
                        <p>{props.forecast_temp[0] && <p>Temperature: {props.forecast_temp[0]} (in Celsius)</p>}</p>
                    </div>
                    <div class="col-md-4">
                        <p>{props.forecast_humidity[0] && <p>Humidity: {props.forecast_humidity[0]}</p>}</p>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-4">
                        {props.forecast_date[1] && <p>Date: {props.forecast_date[1]}</p>}
                    </div>
                    <div class="col-md-4">
                        <p>{props.forecast_temp[1] && <p>Temperature: {props.forecast_temp[1]} (in Celsius)</p>}</p>
                    </div>
                    <div class="col-md-4">
                        <p>{props.forecast_humidity[1] && <p>Humidity: {props.forecast_humidity[1]}</p>}</p>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-4">
                        {props.forecast_date[2] && <p>Date: {props.forecast_date[2]}</p>}
                    </div>
                    <div class="col-md-4">
                        <p>{props.forecast_temp[2] && <p>Temperature: {props.forecast_temp[2]} (in Celsius)</p>}</p>
                    </div>
                    <div class="col-md-4">
                        <p>{props.forecast_humidity[2] && <p>Humidity: {props.forecast_humidity[2]}</p>}</p>
                    </div>

                </div>

            </div>
        <br />
        </div>

    )
}

export default Weather;