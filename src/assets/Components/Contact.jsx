import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 md:mr-6 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Get in touch</h3>
            <p className="text-gray-700 leading-relaxed">
              Have a question or want to work together? Feel free to reach out to
              me using the contact information below or by filling out the contact
              form. I'll get back to you as soon as possible.
            </p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 3a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1H2z"
                    clipRule="evenodd"
                  />
                  <path d="M2 3h16v1H2V3zm0 2h16v1H2V5zm0 2h16v1H2V7zm0 2h16v1H2V9zm0 2h16v1H2v-1zm0 2h16v1H2v-1zm0 2h16v1H2v-1z" />
                </svg>
                San Francisco, CA 97987, USA
              </li>
              <li className="flex items-center text-gray-700 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a2 2 0 00-2 2v10a2 2 0 11-4 0V2a2 2 0 00-4 0v16a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-4 0v10a2 2 0 11-4 0V2a2 2 0 00-2-2z"
                    clipRule="evenodd"
                  />
                </svg>
                ronaldo@gmail.com
              </li>
              <li className="flex items-center text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.999 0C4.477 0 0 4.477 0 9.999c0 5.522 4.477 9.999 9.999 9.999 5.522 0 9.999-4.477 9.999-9.999C19.998 4.477 15.521 0 9.999 0zm4.946 7.38l-6.603 5.744a.715.715 0 01-1.006 0L5.056 9.83a6.276 6.276 0 009.889-2.593zm-6.234-.42L14.943 4.17a.715.715 0 111.006 1.007L10.716 8.967a6.276 6.276 0 00-2.605 9.875l-.17-.162-3.13-2.728a.715.715 0 111.006-1.007l2.513 2.194a6.277 6.277 0 009.87-2.64l.168-.324-3.13-2.728a.715.715 0 011.006-1.006l2.763 2.403c.165-.42.277-.857.327-1.303L9.75 3.694a6.276 6.276 0 00-6.258 1.266L3.38 4.25l1.345-.674a.715.715 0 11.642 1.29l-1.345.674a4.828 4.828 0 011.64 1.735zm-2.12 6.995a.715.715 0 11-.89-1.122l.09-.066 1.345-.674a4.828 4.828 0 01-1.636-1.739l-.17-.324L2.057 9.79a.715.715 0 01-.004-1.009l2.513-2.194a6.277 6.277 0 009.888 2.594l2.06 1.796a.715.715 0 11-.892 1.116l-1.675-1.458a4.833 4.833 0 01-2.048.75l.15.029-1.345.674a.715.715 0 01-.638-1.292l1.345-.674a3.403 3.403 0 00-1.15-1.222l-.09-.065-1.675 1.458z"
                    clipRule="evenodd"
                  />
                </svg>
                +1-2234-5678-9-0
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-2">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
