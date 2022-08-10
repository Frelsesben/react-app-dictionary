import "./styles.css";

import Header from "./Header";
import Footer from "./Footer";
import Dictionary from "./Dictionary";

export default function Box() {
  return (
    <div className="Box">
      <Header />
      <Dictionary />
      <Footer />
    </div>
  );
}
