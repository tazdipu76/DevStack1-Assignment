// import React from 'react';

const Banner = () => {
    return (
       <div className="border border-amber-200">
         <div>
            {/* left side  */}
            <h2>Welcome to website</h2>
            <button className="px-4 py-2 bg-amber-300">Explore Technologies</button>
            <button className="px=4 py-2 bg-amber-50">Learn More</button>
        </div>
        <div>
            {/* right  side */}
            <h3>right side</h3>
        </div>
       </div>
        
    );
};

export default Banner;