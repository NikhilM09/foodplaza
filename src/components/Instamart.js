import { useState } from 'react';

const Section = ({ title, description, showData, handleClick }) => {

    return (
        <div className="container mb-4">
            <h1
                className="text-danger border border-dark p-2" onClick={handleClick}>{title}</h1>
            {showData && <h6>{description}</h6>}
        </div>
    )
}


const Instamart = () => {
    const [activeIndex, setActiveIndex] = useState(4);

    return (
        <>
            <Section
                title="About Instamart"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                showData={activeIndex === 1}
                handleClick={()=>setActiveIndex(activeIndex===1 ? 0 : 1 )
                }
            />
            <Section
                title="Team Instamart"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                showData={activeIndex === 2}
                handleClick={()=>setActiveIndex(activeIndex===2 ? 0 : 2 )}
            />
            <Section
                title="Career at Instamart"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                showData={activeIndex === 3}
                handleClick={()=>setActiveIndex(activeIndex===3 ? 0 : 3 )}
            />
            <Section
                title="Testimonials"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                showData={activeIndex === 4}
                handleClick={()=>setActiveIndex(activeIndex===4 ? 0 : 4 )}
            />
        </>

    )
}

export default Instamart;