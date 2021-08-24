import React from 'react';
import './Services.css';


function Services({ content }) {



    return (
        <div className='Services'>
            <h3 className='Services__index' >{content.title}</h3>

            <div className="Services__container  bd-grid">
                {content.items.map((item, index) => (
                    <div key={index} className="Services__content">
                        <h4 className="Services__title">{item.title}</h4>
                        <p className="Services__description">{item.description}</p>
                    </div>
                ))}
            </div>

        </div>


    );
}

export default Services;