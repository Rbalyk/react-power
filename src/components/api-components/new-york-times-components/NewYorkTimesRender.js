import React from 'react';

const NewYorkTimesRender = (props) => {
    const {arrayPosts} = props;
    return (
        <div className={'newYorkTimes'}>
            <h2>NewYorkTimes</h2>
            {arrayPosts.map((item, index) => {
                const {section, title, byline, short_url} = item;
                return (
                    <div key={index}>
                        <a href={short_url} target={'_blank'}>
                            <p className={'category-name'}>{section}</p>
                            <p className={'title'}>{title}</p>
                            <p className={'author'}>{byline}</p>
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

export default NewYorkTimesRender;