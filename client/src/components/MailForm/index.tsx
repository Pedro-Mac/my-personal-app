import React, { useState } from 'react';

//styles
import './styles.scss';

const MailForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const validateEmail = (emailAdress: string) => {
    const mailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailRegEx.test(String(emailAdress).toLowerCase());
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.name) {
      case 'name':
        setName(() => e.target.value);
        break;
      case 'email':
        setEmail(() => e.target.value);
        validateEmail(e.target.value)
          ? setEmailIsValid(true)
          : setEmailIsValid(false);
        break;
      default:
        setMessage(() => e.target.value);
        break;
    }
  };

  return (
    <form className="form-mail d-flex flex-column">
      <input
        type="text"
        name="name"
        className="w-25 pl-2"
        value={name}
        onChange={handleInputChange}
        placeholder="name"
      />
      <input
        type="text"
        name="email"
        className="w-25 pl-2"
        value={email}
        onChange={handleInputChange}
        placeholder="email"
        style={{
          border: email.length && !emailIsValid ? '2px #C03221 solid' : ''
        }}
      />
      <textarea
        className="pl-2"
        name="message"
        value={message}
        onChange={handleInputChange}
      ></textarea>
      <button>Send</button>
    </form>
  );
};

export default MailForm;
