import React from 'react';
import './Card.css'

const Card = ({plan,data,classes="fa fa-check",color}) => {
    
    return (
        <div className='priceCard col-sm-12 col-md-5 col-lg-3'>
            <header className='header'>
                <p>{plan.planName}</p>
                <h3>{plan.price}</h3>
            </header>
            <hr />
            <main>
                <ul>
                    <li class={color.userLimit}><span><i class={classes.userLimit} aria-hidden="true"></i></span>{data.userLimit}</li>
                    <li class={color.storage}><span><i class={classes.storage} aria-hidden="true"></i></span>{data.storage}</li>
                    <li class={color.publicProjects}><span><i class={classes.publicProjects} aria-hidden="true"></i></span>{data.publicProjects}</li>
                    <li class={color.access}><span><i class={classes.access} aria-hidden="true"></i></span>{data.access}</li>
                    <li class={color.privateProjects}><span><i class={classes.privateProjects} aria-hidden="true"></i></span>{data.privateProjects}</li>
                    <li class={color.support}><span><i class={classes.support} aria-hidden="true"></i></span>{data.support}</li>
                    <li class={color.subDomain}><span><i class={classes.subDomain} aria-hidden="true"></i></span>{data.subDomain}</li>
                    <li class={color.reports}><span><i class={classes.reports} aria-hidden="true"></i></span>{data.reports}</li>
                </ul>
            </main>
            <footer className='footer'>
                <button class="btn btn-primary">BUTTON</button>
            </footer>
            
        </div>
    );
};

export default Card;