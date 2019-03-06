import React, {Component} from 'react';
import NewYorkTimesRender from './NewYorkTimesRender'


class NewYorkTimes extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    };

    componentDidMount(){
        this.NewYorkTimesPosts();
    }

    NewYorkTimesPosts = async () => {
        const api_url =  await fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=jKjMLK9m0c30Gg2v6jnrsXl7CyDHxVO0`);
        const data =  await api_url.json();

        this.setState({
            posts: data.results,
        });

    };


    render() {
        return (
          <NewYorkTimesRender arrayPosts={this.state.posts}/>
        )
    }
};

export default NewYorkTimes;