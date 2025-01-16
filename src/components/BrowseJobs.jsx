import JobListCard from "./JobListCard"
import { useEffect,useState } from "react";
import Spinner from "./Spinner";



function BrowseJobs({isHome=false}) {
    const [jobsList,setJobList]=useState([])
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
        try{
        async function FetchJobs(){
            const response=await fetch('/api/jobs')
            const data= await response.json()
            setJobList(data)
        }
        FetchJobs()
    }
    catch(err){
        throw new Error("Error in fetching data",err)
    }
    finally{
        setLoading(false)
    }
    },[])


    const jobs=isHome?jobsList.slice(0,3):jobsList;
  return (
    <>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome?"Recent Jobs":"Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {
            loading?
            <><div></div>
            <Spinner/>
            </>
            :jobs.map((job,index)=>{
                console.log(job)
               return <JobListCard job={job} key={index}/>
            })}
        </div>
      </div>
    </section>
    </>
  )
}

export default BrowseJobs