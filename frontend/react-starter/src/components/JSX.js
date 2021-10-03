import React from "react";

export default class JSX extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {formatName({firstName: 'Jens', lastName: 'Reiner'})}</h1>
                {intro(true)}
            </div>
        )
    }
}

function formatName(user) {
    return `${user.firstName} ${user.lastName}`
}

function intro(short) {
    if (short) {
        return <a href="https://www.linkedin.com/in/jens-reiner/">My LinkedIn</a>
    } else {
        return (
            <div>
                <a href="https://www.linkedin.com/in/jens-reiner/">My LinkedIn</a>
                <a href="https://github.com/wasdJens">My Github</a>
            </div>
        )
    }
}