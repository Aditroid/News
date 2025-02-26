// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import Loading from './Loading';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types';

// export default class News extends Component {
//     static defaultProps = {
//         country: 'us',
//         pageSize: 25,
//         category: 'general'
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//         apiKey: PropTypes.string,
//         setProgress: PropTypes.func
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: true,
//             page: 1,
//             totalResults: 0
//         };
//         document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
//     }

//     async fetchArticles(page) {
//         this.props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         this.props.setProgress(30);
//         let data = await fetch(url);
//         this.props.setProgress(70);
//         let parsedData = await data.json()
//         // this.setState({
//         //     articles: parsedData.articles,
//         //     totalResults: parsedData.totalResults,
//         //     loading: false,
//         // })
//         this.setState({ loading: false});
//         this.props.setProgress(100);

//         return parsedData;

//     }

//     async componentDidMount() {
//         const parsedData = await this.fetchArticles(this.state.page);
//         // this.fetchArticles();
//         this.setState(
//             {
//                 articles: parsedData.articles,
//                 totalResults: parsedData.totalResults,
//                 loading: false
//             }
//         );
//     }



//     // fetchMoreData = async () => {
//     //     this.setState({ page: this.state.page + 1 })

//     //     // const nextPage = await this.state.page + 1;
//     //     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.statepage}&pageSize=${this.props.pageSize}`;
//     //     let data = await fetch(url);
//     //     let parsedData = await data.json()
//     //     this.setState({
//     //         articles: this.state.articles.concat(parsedData.articles),
//     //         totalResults: parsedData.totalResults
//     //         // hasMore: this.state.articles.length + parsedData.articles.length < parsedData.totalResults
//     //     })
//     // };

//     fetchMoreData = async () => {
//         // Update the page state first, then use the updated value in the API call
//         this.setState(
//             (prevState) => ({ page: prevState.page + 1 }), // Update the page state
//             async () => {
//                 // Use the updated page value from the state
//                 const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//                 let data = await fetch(url);
//                 let parsedData = await data.json();

//                 this.setState({
//                     articles: this.state.articles.concat(parsedData.articles),
//                     totalResults: parsedData.totalResults,
//                 });
//             }
//         );
//     };

//     render() {
//         return (
//             <>
//                 <h2 className='my-3 text-center'>Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
//                 {this.state.loading && <Loading />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     // hasMore={this.state.articles.length !== this.state.totalResults}
//                     hasMore={this.state.articles.length + this.props.pageSize < this.state.totalResults}
//                     loader={<Loading />}
//                 >
//                     <div className="container">
//                         <div className="row">
//                             {this.state.articles.map((element) => {
//                                 return (
//                                     <div className="col-md-4" key={element.url}>
//                                         <NewsItem
//                                             title={element.title.slice(0, 45)}
//                                             description={element.description ? element.description.slice(0, 90) : ''}
//                                             imageUrl={element.urlToImage}
//                                             newsURL={element.url}
//                                             author={element.author ? element.author : 'Anonymous'}
//                                             date={element.publishedAt}
//                                         />
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </InfiniteScroll>
//             </>
//         );
//     }
// }

// ___________________________________________________________________________________________________________________________________________________________________________


import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Track if there are more articles to fetch

    // Destructure props to avoid lint warnings
    const { country, category, apiKey, pageSize, setProgress } = props;

    // Set document title based on category
    useEffect(() => {
        document.title = `NewsMonkey - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    }, [category]);

    // Fetch initial data when the component mounts or when relevant props change
    useEffect(() => {
        const fetchInitialData = async () => {
            setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
            // setLoading(true);
            setProgress(30);
            let data = await fetch(url);
            setProgress(70);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            // setLoading(false);
            setProgress(100);

            // Update hasMore based on the initial fetch
            if (parsedData.articles.length === 0 || parsedData.articles.length >= parsedData.totalResults) {
                setHasMore(false);
            }
        };

        fetchInitialData();
    }, [country, category, apiKey, pageSize, setProgress]);

    // Fetch more data when scrolling
    const fetchMoreData = async () => {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        // Update articles and totalResults
        setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setPage(nextPage);

        // Update hasMore based on the new fetch
        if (parsedData.articles.length === 0 || articles.length + parsedData.articles.length >= parsedData.totalResults) {
            setHasMore(false);
        }
    };

    return (
        <>
            <h2 style={{marginTop:'90px'}} className=' mb-3 text-center'>Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines</h2>
            {loading && <Loading />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={hasMore} // Use the hasMore state
                loader={<Loading />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title.slice(0, 45)}
                                    description={element.description ? element.description.slice(0, 90) : ''}
                                    imageUrl={element.urlToImage}
                                    newsURL={element.url}
                                    author={element.author ? element.author : 'Anonymous'}
                                    date={element.publishedAt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.defaultProps = {
    country: 'us',
    pageSize: 9,
    category: 'general'
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    setProgress: PropTypes.func
};

export default News;

// import React, { useState, useEffect } from 'react';
// import NewsItem from './NewsItem';
// import Loading from './Loading';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types';

// const News = (props) => {
//     const [articles, setArticles] = useState([]);
//     const [page, setPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(0);
//     const [loading, setLoading] = useState(true); // For initial loading only
//     const [hasMore, setHasMore] = useState(true); // Track if there are more articles to fetch

//     // Destructure props to avoid lint warnings
//     const { country, category, apiKey, pageSize, setProgress } = props;

//     // Set document title based on category
//     useEffect(() => {
//         document.title = `NewsMonkey - ${category.charAt(0).toUpperCase() + category.slice(1)}`;
//     }, [category]);

//     // Fetch initial data when the component mounts or when relevant props change
//     useEffect(() => {
//         const fetchInitialData = async () => {
//             setProgress(10);
//             const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
//             setLoading(true); // Set loading to true for initial fetch
//             setProgress(30);
//             let data = await fetch(url);
//             setProgress(70);
//             let parsedData = await data.json();
//             setArticles(parsedData.articles);
//             setTotalResults(parsedData.totalResults);
//             setLoading(false); // Set loading to false after initial fetch
//             setProgress(100);

//             // Update hasMore based on the initial fetch
//             if (parsedData.articles.length === 0 || parsedData.articles.length >= parsedData.totalResults) {
//                 setHasMore(false);
//             }
//         };

//         fetchInitialData();
//     }, [country, category, apiKey, pageSize, setProgress]);

//     // Fetch more data when scrolling
//     const fetchMoreData = async () => {
//         const nextPage = page + 1;
//         const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json();

//         // Update articles and totalResults
//         setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
//         setTotalResults(parsedData.totalResults);
//         setPage(nextPage);

//         // Update hasMore based on the new fetch
//         if (parsedData.articles.length === 0 || articles.length + parsedData.articles.length >= parsedData.totalResults) {
//             setHasMore(false);
//         }
//     };

//     return (
//         <>
//             <h2 className='my-3 text-center'>Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines</h2>
//             {loading && <Loading />} {/* Show loading spinner only for initial fetch */}
//             <InfiniteScroll
//                 dataLength={articles.length}
//                 next={fetchMoreData}
//                 hasMore={hasMore} // Use the hasMore state
//                 loader={<Loading />} 
//             >
//                 <div className="container">
//                     <div className="row">
//                         {articles.map((element) => (
//                             <div className="col-md-4" key={element.url}>
//                                 <NewsItem
//                                     title={element.title.slice(0, 45)}
//                                     description={element.description ? element.description.slice(0, 90) : ''}
//                                     imageUrl={element.urlToImage}
//                                     newsURL={element.url}
//                                     author={element.author ? element.author : 'Anonymous'}
//                                     date={element.publishedAt}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </InfiniteScroll>
//         </>
//     );
// };

// News.defaultProps = {
//     country: 'us',
//     pageSize: 9,
//     category: 'general'
// };

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//     apiKey: PropTypes.string,
//     setProgress: PropTypes.func
// };

// export default News;