import React, {PureComponent} from 'react';
import ArticleItem from "./ArticleItem";

class ArticleList extends PureComponent {


    render() {
        const {articles} = this.props;
        return (
            <div className={'newYorkTimes'}>
                <h2>NewYorkTimes</h2>
                {articles.map((item,index) => <ArticleItem item={item} key={index}/> )}
            </div>
        )
    }

};

export default ArticleList;
