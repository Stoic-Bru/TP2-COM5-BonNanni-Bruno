const Header = ({ titulo, subtitulo }) => {
    return (
        <header style={{ marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid rgba(128,128,128,0.2)' }}>
            <h1 style={{ fontSize: '1.8rem' }}>{titulo}</h1>
            {subtitulo && <p style={{ opacity: 0.8, marginTop: '5px' }}>{subtitulo}</p>}
        </header>
    );
}

export default Header;