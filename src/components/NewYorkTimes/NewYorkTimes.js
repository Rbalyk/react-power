import React, {Component} from 'react';
import ArticleList from './ArticlesList/ArticleList'
import './style.scss'
import {fetchNewYorkTimesData} from "../../actions/newYorkTimes";
import {connect} from "react-redux";

class NewYorkTimes extends Component {

    componentDidMount(){
        const { fetchArticlesData } = this.props;
        fetchArticlesData();
    };


    render() {
        const {articles} = this.props;

        if ( !articles ) {
            return <div>Loading...</div>;
        }

        return (
          <ArticleList articles={articles}/>
        )
    }
}
const mapStateToProps = state => {
    return {
        articles: state.articles.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchArticlesData: response => dispatch(fetchNewYorkTimesData(response))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(NewYorkTimes);
