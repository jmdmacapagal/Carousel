import React from 'react'
import Axios from 'axios';

export default class App extends React.Component {

    state = {
        photos: [],
        count: 0
    }

    componentDidMount() {
        Axios.get('https://api.unsplash.com/photos/random', {
            params: {
                count: 10
            },
            headers: {
                Authorization: 'Client-ID e0eda079b0e1af60a9adfd942026a4ead007ca0cdc5a3a185ff5c0da37dc72d0'
            }
        })
        .then(response => {
            this.setState({ photos: response.data })
            console.log(response.data)
        })
    }

    onClickPrevious = e => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    onClickNext = e => {
        if (this.state.count < this.state.photos.length - 1) {
            this.setState({ count: this.state.count + 1 })
        }
    }

    render() {
        if (!this.state.photos[0]) {
            return <div>loading.</div>
        }
        return (
            <div>
                <div>
                    <img src={this.state.photos[this.state.count].urls.small} alt="img"/>
                </div>
                <div>
                    <button onClick={this.onClickPrevious}>Previous</button>
                    <button onClick={this.onClickNext}>Next</button>
                </div>
            </div>
        )
    }
}