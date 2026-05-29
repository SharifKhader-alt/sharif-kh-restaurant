export default function Contact() {
  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">Contact Us</h2>

      <p className="text-center">
        📞 +961 76 079 057 <br />
        📧 SharifKhrestaurant@gmail.com <br />
        📍 Tyre, Burj Al Shamali
      </p>

      <div className="contact-box">

        <input className="form-control contact-input" placeholder="Name" />

        <input className="form-control contact-input" placeholder="Email" />

        <textarea
          className="form-control contact-textarea"
          rows="5"
          placeholder="Message"
        ></textarea>

        <button className="btn btn-primary contact-btn">
          Send
        </button>

      </div>

    </div>
  );
}