import { Link } from "react-router-dom"


function Card({bg="bg-gray-100",heading,description,btnText,btnColor="bg-black"}) {
  return (
    <>
     <div className={`${bg} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="mt-2 mb-4">
              {description}
            </p>
            <Link
              to="/jobs.html"
              className={`inline-block ${btnColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
              {btnText}
            </Link>
          </div>
    </>
  )
}

export default Card