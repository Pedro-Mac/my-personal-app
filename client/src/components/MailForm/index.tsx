import React, {useState} from 'react'

//styles
import './styles.scss'

const MailForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch(e.target.name) {
      case 'name':
        setName(()=> e.target.value)
        break;
      case 'email':
        setEmail(()=> e.target.value)
        break;
      default:
        setMessage(()=> e.target.value)
        break;
    }

    
  }

  return (
    <form className="form-mail d-flex flex-column">
      <input type="text" name="name" className="w-25" value={name} onChange={handleInputChange}/>
      <input type="email" name="email" className="w-25" value={email} onChange={handleInputChange}/>
      <textarea name="message" value={message} onChange={handleInputChange}></textarea>
      <button>Send</button>
    </form>
  )
}

export default MailForm;
