import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsPage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const res = await axios.get('/api/news');
            setNews(res.data);
        };
        fetchNews();
    }, []);

    return (
        <div className="container">
            <h1>Noticias</h1>
            <div className="row">
                {news.map((item) => (
                    <div className="col-md-4" key={item._id}>
                        <div className="card">
                            <img src={item.mainImage} alt={item.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.body.substring(0, 100)}...</p>
                                <p className="card-text"><small>{new Date(item.date).toLocaleDateString()}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewsPage;
