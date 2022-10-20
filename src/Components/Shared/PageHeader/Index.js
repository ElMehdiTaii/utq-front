import React from 'react'

export default function Index(props) {
    return (
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>{props.pageHeader}</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">{props.pageHeader}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}