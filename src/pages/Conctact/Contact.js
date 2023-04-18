import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="title-contact">
          <h2> Contactanos con un email </h2>
        </div>
        <div>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>{" "}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
