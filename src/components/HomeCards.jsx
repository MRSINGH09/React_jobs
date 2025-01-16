
import Card from './Card'

function HomeCards() {
  return (
    <>
     <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card heading="For Developers" description="Browse our React jobs to start your career today" btnText="Browse Jobs" />
            <Card bg="bg-indigo-100" heading="For Employers"  description="List your job to find the perfect developer for the role" btnText="Add Job" btnColor="bg-indigo-500"/>
        </div>
      </div>
    </section>

    </>
  )
}

export default HomeCards