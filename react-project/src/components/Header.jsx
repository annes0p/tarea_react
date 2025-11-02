function Header({ info }) {
    return (
        <header>
            <h1>{info.artist}</h1>
            <h2>{info.tour}</h2>
            <p>{info.venue} - {info.date}</p>
        </header>
    );
}

export default Header;