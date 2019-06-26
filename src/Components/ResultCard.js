import React from 'react';

class ResultCard extends React.Component {

    renderList() {
        return this.props.selectedData.map( data => {
            return (
                <div className="item" key={data.title} style={{margin : '20px 100px 0 100px'}}>
                    <div className="content">
                        <div className="title">
                            <h3>{data.title}</h3>
                        </div>
                        <br/>
                        <div className="description">
                           <p>{data.desc}</p>
                        </div>
                        <div className="link">
                           <a href={data.link} target="blank">{data.link}</a>
                        </div>
                        <br/>  
                        <form method="get" action={`https://en.wikipedia.org/api/rest_v1/page/pdf/${data.title}`} >
                            <button type="submit">Download PDF!</button>
                        </form>
                    </div>
                </div>
            );
        });
    }
    render() {
        console.log(this.props.selectedData);
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
}

export default ResultCard;