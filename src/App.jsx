import React from 'react';
import Card from './Components/Card/Card'

const App = () => {
  let data = [
    
    {
        planName:"Free",
        price:"$0/month",
        userLimit:"Single User",
        storage:"50GB Storage",
        publicProjects:"Unlimited Public Projects",
        access:"Community Access",
        privateProjects:"Unlimited Private Projects",
        support:"Detailed Phone Support",
        subDomain:"Free Sub Domain",
        reports:"Monthly Status Reports"
    }
];
  return (
    <div className='container d-flex flex-wrap'>
      
      
      <Card
      plan = {{planName:"FREE", price:"$0/month"}}
      data = {data[0]}
      classes={{userLimit:"fa fa-check",storage:"fa fa-check", publicProjects:"fa fa-check", access:"fa fa-check", privateProjects:"fa fa-times", support:"fa fa-times",subDomain:"fa fa-times", reports:"fa fa-times"}}
      color={{userLimit:"text-dark",storage:"text-dark", publicProjects:"text-dark", access:"text-dark", privateProjects:"text-muted", support:"text-muted",subDomain:"text-muted", reports:"text-muted"}}

      />
      <Card
      plan = {{planName:"PLUS", price:"$9/month"}}
      data = {data[0]}
      classes={{userLimit:"fa fa-check",storage:"fa fa-check", publicProjects:"fa fa-check", access:"fa fa-check", privateProjects:"fa fa-check", support:"fa fa-check",subDomain:"fa fa-check", reports:"fa fa-times"}}
      color={{userLimit:"text-dark",storage:"text-dark", publicProjects:"text-dark", access:"text-dark", privateProjects:"text-dark", support:"text-dark",subDomain:"text-dark", reports:"text-muted"}}

      />
      <Card
      plan = {{planName:"PRO", price:"$49/month"}}
      data = {data[0]}
      classes={{userLimit:"fa fa-check",storage:"fa fa-check", publicProjects:"fa fa-check", access:"fa fa-check", privateProjects:"fa fa-check", support:"fa fa-check",subDomain:"fa fa-check", reports:"fa fa-check"}}
      color={{userLimit:"text-dark",storage:"text-dark", publicProjects:"text-dark", access:"text-dark", privateProjects:"text-dark", support:"text-dark",subDomain:"text-dark", reports:"text-dark"}}

      />
    </div>
  );
};

export default App;