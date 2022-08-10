import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      Coded by{" "}
      <a
        href="https://www.linkedin.com/in/frida-freiesleben/"
        target="_blank"
        rel="noreferrer"
      >
        Frida Freiesleben
      </a>
      <br />
      Open-sourced on{" "}
      <a
        href="https://github.com/Frelsesben/react-app-dictionary/"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <br />
      Hosted on{" "}
      <a
        href="https://frelsesben-react-dictionary.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
