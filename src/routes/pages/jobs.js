import React, {Component} from 'react'
import api from '../../api';
import {HOST_URL} from '../../api/constants';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: {
        _id: 0,
        title: '',
        description: '',
        author: '',
        image: '',
        author: [],
        request: []
      },
      jobs: [],
      totalJobs: 0
    };
    this.loadJobs();
  }

  loadJobs = () => {
    let self = this;
    api.get('/jobs')
      .then(function (response) {                
        self.setState({ jobs: [] });   
        self.setState({ totalJobs: response.data.jobs.length});
        self.setState({ jobs: response.data.jobs.map(x => x)});
      })
      .catch(function (error) {
        console.log(error);
      });
  };
   
  render() {
    const { jobs } = this.state;        
    let jobsComponent = jobs.map(job =>
      <div className="job">
        <h4><strong>{job.title}</strong></h4>                
        <img className="job-image" src={HOST_URL + "/" + job.image} />
        <br/>
        <p>{job.description}</p>
        <br/>
        Posted By: <a href={"mailto:"+job.author.email+""}><strong>{job.author.name}</strong></a>
        <br/> <br/>
        <hr/>
      </div>
    );

    return (
      <div className="layout">
        <div className="container">
          <div className="container-wrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="page-header">
                  <h2><strong>Job List</strong></h2>
                </div>
              </div>
              <div className="col-md-12">
                {jobsComponent}
              </div>
            </div>
          </div>
        </div>                
      </div>
    )
  }
}

export default Home;