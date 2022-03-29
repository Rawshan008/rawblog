import React from "react"

const SectionTitle = props => {
  return (
    <div className="container mx-auto my-10">
      <div className="w-full lg:w-6/12 m-auto">
        <h2 className="text-2xl text-center mb-4">{props.title}</h2>
        <p className="text-center">{props.description}</p>
      </div>
    </div>
  )
}

export default SectionTitle
