import React from 'react'
import { Link } from 'react-router-dom';

const DetailPageSecondNav = () => {
    return (
        <nav className="detail-page-second-nav">
                <ul className="nav" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="content-list-tab" data-bs-toggle="tab" data-bs-target="#content-list-panel" role="tab" aria-controls="content-list-panel" aria-selected="false">Lesson</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="about-content-tab" data-bs-toggle="tab" data-bs-target="#about-content-panel"  role="tab" aria-controls="about-content-panel" aria-selected="true">About</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="content-assessment-tab" data-bs-toggle="tab" data-bs-target="#content-list-panel" role="tab" aria-controls="content-list-panel" aria-selected="false">Assesment</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="content-review-tab" data-bs-toggle="tab" data-bs-target="#content-list-panel" role="tab" aria-controls="content-list-panel" aria-selected="false">Review</a>
                    </li>
                    
                </ul>
            </nav>
    )
}

export default DetailPageSecondNav;