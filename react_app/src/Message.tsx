function Message() {
    const name = 'Chrissy';
    if (name)
        return <h1> hello {name} </h1>;
    return <h1>Hello world</h1>;
}

export default Message;