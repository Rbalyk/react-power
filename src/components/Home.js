import React from 'react';

const Home = () => {
    return (
        <div className={'home'}>
            <h2>Home</h2>
            <p>React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is
                maintained by Facebook and a community of individual developers and companies.
                <br/>
                <br/>
                React can be used as a base in the development of single-page or mobile applications, as it is optimal
                for fetching rapidly changing data that needs to be recorded. However, fetching data is only the
                beginning of what happens on a web page, which is why complex React applications usually require the use
                of additional libraries for state management, routing, and interaction with an API.</p>
            <br/>
            <h3>History</h3>
            <p>
                React was created by Jordan Walke, a software engineer at Facebook. He was influenced by XHP, an HTML
                component framework for PHP. It was first deployed on Facebook's news feed in 2011 and later on
                Instagram.com in 2012. It was open-sourced at JSConf US in May 2013.
                <br/>
                <br/>
                React Native, which enables native Android, iOS, and UWP development with React, was announced at
                Facebook's React.js Conf in February 2015 and open-sourced in March 2015.
                <br/>
                <br/>
                On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React framework library for
                building user interfaces. React Fiber was to become the foundation of any future improvements and
                feature development of the React framework.
                <br/>
                <br/>
                On April 19, 2017, React 360 V1.0.0 was released to the public. This allowed developers with experience
                using react to jump into VR development.
                <br/>
                <br/>
                On September 26, 2017, React 16.0 was released to the public.
                <br/>
                <br/>
                On February 16, 2019, React 16.8 was released to the public. The release introduced React Hooks.
            </p>
        </div>
    )
};

export default Home;