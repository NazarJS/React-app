import React, { Component } from "react";

export default class Componentzxc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],

        }
    }

    componentDidMount() {
        const key = 'df35a6ee4e1e444389141627b7b22cf6';
        const URL = `https://newsapi.org/v2/everything?q=Apple&from=2021-08-16&sortBy=popularity&apiKey=${key}`;

        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.articles
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: true
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>No data</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            console.log(items)
            return (
                <div className="Lattest__News">
                    <h2>Latests News</h2>
                    <div className='Lattest__News__List'>
                        <div className="blocks__news"><p>{items[0].author}</p></div>
                        <div className="blocks__news">{items[0].author}</div>
                        <div className="blocks__news">{items[0].author}</div>
                        <div className="blocks__news">{items[0].author}</div>
                        <div className="blocks__news">{items[0].author}</div>
                        <div className="blocks__news">{items.author}</div>
                    </div>
                </div>
                // <ul>
                //     {items.map(item => (
                //         <li>
                //             {item.author}
                //         </li>
                //     ))}
                // </ul>
            )
        }
    }
}