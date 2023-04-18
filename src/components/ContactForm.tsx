import React from 'react';
import EmailJS from 'emailjs-com';

const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userID = process.env.NEXT_PUBLIC_USER_ID;

function ContactForm() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [alertContent, setAlertContent] = React.useState({
    heading: '',
    message: '',
  });
  const [showAlert, setShowAlert] = React.useState(false);

  if (showAlert) {
    return (
      <section className='bg-white dark:bg-gray-900'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
            {alertContent.heading}
          </h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
            {alertContent.message}
          </p>
          <button
            className='py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:text-white dark:focus:ring-primary-800'
            onClick={() => setShowAlert(false)}
          >
            Close
          </button>
        </div>
      </section>
    );
  }

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceID || !templateID || !userID) {
      console.log('Missing env variables');
      return;
    }

    EmailJS.send(serviceID, templateID, formData, userID).then(
      (result) => {
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: '',
        });
        setAlertContent({
          heading: 'Thank you for contacting me.',
          message: 'I will respond to your message as soon as I can.',
        });
        setShowAlert(true);
      },
      (error) => {
        setAlertContent({
          heading: 'Something went wrong.',
          message: error.text,
        });
        setShowAlert(true);
      }
    );
  };

  return (
    <section id='contact' className='pt-8 bg-white dark:bg-gray-900'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
          Contact Me!
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          Send me a message and I&apos;ll get back to you as soon as
          possible!
        </p>
        <form
          action='#'
          className='space-y-8'
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor='fullName'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Name
            </label>
            <input
              type='fullName'
              id='fullName'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Full Name'
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='yourName@yourCompany.com'
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='Enter a subject'
              required
              onChange={handleChange}
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              Your message
            </label>
            <textarea
              id='message'
              rows={6}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Enter your message here...'
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:text-white dark:focus:ring-primary-800'
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
