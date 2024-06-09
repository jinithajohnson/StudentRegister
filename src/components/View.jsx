import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {

    const [data, changeData] = useState(

        [

            { "name": "reemu", "age": 22 },
            { "name": "prajval", "age": 21 },
            { "name": "riya", "age": 23 }



        ]

    )

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div className="card">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpk3CKQTBBPBfwazClhc7eP-mW7mVEpESaQ&s" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text"></p>
                                                <a href="#" class="btn btn-primary">View details</a>
                                            </div>
                                        </div>

                                    </div>

                                }


                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default View