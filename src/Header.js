import "./styles.css";

function Header() {
  return (
    <div className="Header">
      <h1>Dictionary</h1>
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_my8voqwy.json"
        background="transparent"
        speed="0.5"
        id="animation"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default Header;
