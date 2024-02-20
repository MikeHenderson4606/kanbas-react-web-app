import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import './index.css';


function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module:any) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
        <div className="wd-module-button-container">
            <button className="btn btn-danger">Collapse All</button>
            <button className="btn btn-danger">View Progress</button>
            <button className="btn btn-danger">Publish All</button>
            <button className="btn btn-danger">+ Module</button>
        </div>
        <ul className="list-group wd-modules">
            {modulesList.map((module:any, index:any) => (
            <li key={index}
                className="list-group-item"
                onClick={() => setSelectedModule(module)}>
                <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                </span>
                </div>
                {selectedModule._id === module._id && (
                <ul className="list-group">
                    {module.lessons?.map((lesson:any, index:any) => (
                    <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                        </span>
                    </li>
                    ))}
                </ul>
                )}
            </li>
            ))}
        </ul>
        </>
    );
}
export default ModuleList;