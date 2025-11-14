import quotesPng from "../assets/quotes.png";

const Testimonial = ({ profilePng, quote, author, role }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-card">
        <div className="testimonial-photo">
          <img src={profilePng} alt={author} />
        </div>
        <div className="testimonial-text">
          <div className="quote-icon">
            <img src={quotesPng} alt="Quote" />
          </div>
          <p className="quote">{quote}</p>
          <p className="author">{author}</p>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
