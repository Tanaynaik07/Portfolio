// Education.js
import React from "react";

const Education = () => {
    return (
        <div id="education">
            <div className="cover "></div>
            <div className="">
                <h2>Education</h2>
                <div className="invisible">
                    <div className="education-entry">
                        <h3>Bachelor of Science in Computer Science</h3>
                        <p>
                            <strong>University:</strong> Vellore institute of technology
                        </p>
                        <p>
                            <strong>Location:</strong> Vellore, Tamil Nadu
                        </p>
                        <p>
                            <strong>Dates:</strong> September 2022 - 2026
                        </p>
                        {/* <p>
                            <strong>GPA:</strong> 3.8/4.0
                        </p> */}
                        <p>
                            <strong>Relevant Coursework:</strong> Algorithms and Data Structures, Database Management Systems, Software Engineering, Computer Networks
                        </p>
                        <p>
                            <strong>Thesis:</strong> "Analysis of Machine Learning Algorithms for Sentiment Analysis"
                        </p>
                    </div>
                    <div className="education-entry">
                        <h3>High School Diploma</h3>
                        <p>
                            <strong>School:</strong> XYZ High School
                        </p>
                        <p>
                            <strong>Location:</strong> City, State
                        </p>
                        <p>
                            <strong>Dates:</strong> September 2015 - May 2019
                        </p>
                        <p>
                            <strong>GPA:</strong> 4.0/4.0
                        </p>
                        <p>
                            <strong>Activities:</strong> President of Computer Science Club, Science Fair Participant
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
