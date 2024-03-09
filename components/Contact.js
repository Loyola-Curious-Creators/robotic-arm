const ContactUsPage = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 md:w-1/2 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl lg:text-4xl font-medium title-font mb-4">
              Connect With Us
            </h2>
            <p className="leading-relaxed text-base">
              Feel free to reach out to us for any inquiries or information.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="text-center mb-8">
              <h3 className="text-white text-xl font-medium mb-2">School Address</h3>
              <p className="text-gray-400">123 Main Street</p>
              <p className="text-gray-400">City, State 12345</p>
            </div>
            <div className="text-center">
              <h3 className="text-white text-xl font-medium mb-2">Contact Information</h3>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@school.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPage;
