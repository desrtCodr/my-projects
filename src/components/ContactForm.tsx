import React from 'react';

function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' name='name' />
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' name='email' />
      <label htmlFor='message'>Message</label>
      <textarea id='message' name='message' />
      <button type='submit'>Send</button>
    </form>
  );
}

export default ContactForm;
