import Card from './components/Card'
import jobs from './data/jobs'

const App = () => {
  return (
    <div className='parent'> 
        {jobs.map((job,idx) => {
       return <div key={idx}>
         <Card logo={job.logo} company={job.company} time={job.postedAgo} job={job.jobTitle} salary={job.salary} location={job.location}/>
       </div>
        })}
    </div>
  )
}

export default App