import React, { useState, useEffect } from 'react';

import { fetchTag } from '../actions';
import { connect } from 'react-redux';

const Tag = (props) => {
    const { tagGif, isFetching, error } = props;
    const [tag, setTag] = useState('random');

    useEffect(() => {
        props.fetchTag(tag);
    }, []);

    const handleClick = () => {
        props.fetchTag(tag);
    }

    const onChange = e => {
        setTag(e.target.value);
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
            <h1>Random {tag} Gif</h1>
            <img src={tagGif} alt="Random GIF" width="500" />
            <input value={tag} onChange={onChange}/>
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tagGif: state.tagGif,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchTag })(Tag);