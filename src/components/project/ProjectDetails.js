import React from 'react'

export default function ProjectDetails(props) {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet voluptas facere aliquam eum commodi quis soluta esse? Error veritatis quo possimus odit tempora magnam corrupti repellat impedit commodi ea?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by khizar</div>
          <div>Sept 3rd 2019</div>
        </div>
      </div>
    </div>
  )
}
