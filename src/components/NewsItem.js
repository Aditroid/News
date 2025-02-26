// import React, { Component } from 'react'

// export default class NewsItem extends Component {
//     render() {
//         let { title, description, imageUrl, newsURL, author, date } = this.props;
//         return (
//             <div className="mt-3">
//                 <div className="card">
//                     <img className="card-img-top" alt='News' src={imageUrl || 'https://thumbs.dreamstime.com/b/top-news-text-stamp-concept-background-337856407.jpg'} style={{ height: '300px' }} 
//                     onError={(e) => { e.target.onerror = null; e.target.src = 'https://thumbs.dreamstime.com/b/top-news-text-stamp-concept-background-337856407.jpg'; }}
//                     />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">{description}...</p>
//                         <p className="card-text"><small className="text-muted">By {author} on {date ? new Date(date).toGMTString() : 'Unknown'}</small></p>
//                         <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

//Now its funciton based components

import React from 'react'

const NewsItem = (props) => {
    
        let { title, description, imageUrl, newsURL, author, date } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <img className="card-img-top" alt='News' src={imageUrl || 'https://thumbs.dreamstime.com/b/top-news-text-stamp-concept-background-337856407.jpg'} style={{ height: '300px' }} 
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://thumbs.dreamstime.com/b/top-news-text-stamp-concept-background-337856407.jpg'; }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {date ? new Date(date).toGMTString() : 'Unknown'}</small></p>
                        <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">More</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem;