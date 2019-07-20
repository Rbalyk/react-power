import React, {PureComponent} from "react";

class ArticleItem extends PureComponent {
    render(){
        const {item,index} = this.props;
        const {section, title, byline, short_url} = item;
        return (
            <div key={index}>
                <a href={short_url} target={'_blank'}>
                    {/*<img src={multimedia[4].url} alt="ReactJS"/>*/}
                    <p className={'category-name'}>{section}</p>
                    <p className={'title'}>{title}</p>
                    <p className={'author'}>{byline}</p>
                </a>
            </div>
        )
    }

};
export default ArticleItem;
