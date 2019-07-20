import React, { PureComponent } from 'react';
import './style.scss'


class Home extends PureComponent {

    render() {
        return (
            <div className={"home"}>
                <iframe src="https://www.youtube.com/embed/QgpnREngitA?autoplay=1&loop=10" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen title={'Home Video'}></iframe>


            </div>
        );
    }
}

export default (Home);
