import React from "react";


import "./Wrapper.css"

const Wrapper = props => (
    <div className="container">
        <div className="row">
            {props.data.map(x => (
                <div className="col s6 m3">
                    <div className="card z-depth-3">
                        <div className="card-image">
                            <img src={x.image}  key={x.id} onClick={() => {props.onClick(x.id)}}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default Wrapper;
