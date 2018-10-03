import React from 'react';

const Pakda = pakad => (
    <div className="card pakde-card">        
        <img src="http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg" alt="cat" width={"100%"}/>
        <b className="cont-pad">{pakad.pakad.name}</b>        
        {console.log(pakad.pakad.url)}
    </div>
);

export default Pakda;