const NewsletterSection = () => {
  return (
    <section className="newsletter-section py-12 bg-secondary text-white">
      <div className="container-custom text-center">
        <h2 className="section-title text-white">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className="mb-8 max-w-3xl mx-auto">
          There is no better way to be treated than with a friendly smile, efficient service and a great stock range to cover all your needs.
        </p>
        <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-3 px-4 rounded flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent/90 transition-colors text-white font-semibold py-3 px-6 rounded"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
