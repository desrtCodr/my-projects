import React from 'react';

function ContacthtmlForm() {
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    if (id === 'email') {
      setEmail(value);
    } else if (id === 'subject') {
      setSubject(value);
    } else if (id === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      subject,
      message,
    };
    console.log(data);
  };

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
          Contact Me!
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          Are you blown away by my coding abilities and want to hire
          me? Send me a message and I&apos;ll get back to you as soon
          as possible!
        </p>
        <form
          action='#'
          className='space-y-8'
          onSubmit={handleSubmit}
        >
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
              placeholder='What position are you offering?'
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
              placeholder='Tell me a little about the role and responsiblities...'
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

export default ContacthtmlForm;
