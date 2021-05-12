import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchGIF, fetchFail } from '../actions';
//use control c to stop server


const Random = (props) => {
    const { gif, isFetching, error } = props
    useEffect(() => {
        props.fetchGIF();
    }, []);

    const handleClick = () => {
        props.fetchGIF();
    }

    if (error) {
        return (
        <div className="container">
            <h2>We got an error: {error}</h2>
        </div>
        )
    }
    
    if (isFetching) {
        return (
        <div className="container">
            <h2>Fetching GIF for ya!</h2>
        </div>
        )
    }

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img src={gif} alt="Random GIF" width="500" />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        gif: state.gif,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchGIF, fetchFail })(Random);