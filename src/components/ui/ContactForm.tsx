import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { ImSpinner2 } from 'react-icons/im';
import { IoClose } from 'react-icons/io5';

interface Props {
  form: FormType;
}

const ContactForm = ({ form }: Props) => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    user_name?: string;
    user_email?: string;
    message?: string;
  }>({
    user_name: '',
    user_email: '',
    message: '',
  });

  useEffect(() => {
    setFormErrors({
      user_name: '',
      user_email: '',
      message: '',
    });
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const submitFormAndShowCaptcha = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: {
      user_name?: string;
      user_email?: string;
      message?: string;
    } = {};

    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (!formData.user_name.trim()) {
      errors.user_name = form.errorMessages.name.empty;
    } else if (!nameRegex.test(formData.user_name.trim())) {
      errors.user_name = form.errorMessages.name.format;
    } else if (
      formData.user_name.trim().length < 3 ||
      formData.user_name.trim().length > 50
    ) {
      errors.user_name = form.errorMessages.name.length;
    }

    if (!formData.user_email.trim()) {
      errors.user_email = form.errorMessages.email.empty;
    } else if (!emailRegex.test(formData.user_email.trim())) {
      errors.user_email = form.errorMessages.email.format;
    }

    if (!formData.message.trim()) {
      errors.message = form.errorMessages.message.empty;
    } else if (
      formData.message.trim().length < 5 ||
      formData.message.trim().length > 1000
    ) {
      errors.message = form.errorMessages.message.length;
    }

    if (Object.keys(errors).length === 0) {
      setShowCaptcha(true);
    } else {
      setFormErrors(errors);
    }
  };

  const sendEmail = async (captchaValue: string | null) => {
    const data = {
      ...formData,
      'g-recaptcha-response': captchaValue,
    };

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        },
      );

      if (res.status === 200) {
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 7000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 7000);
    }

    setShowCaptcha(false);
  };

  return (
    <form
      className='flex-1 bg-dark-blue-color px-4 py-8 rounded-lg'
      onSubmit={submitFormAndShowCaptcha}
    >
      <div className='relative mb-6'>
        <input
          type='text'
          id='user_name'
          name='user_name'
          className='peer block h-[58px] w-full border-b-2 border-gray-color bg-transparent px-3 py-4 text-base font-normal leading-tight text-white-color text-opacity-80 transition duration-200 ease-linear placeholder:text-transparent focus:border-yellow-color focus:pb-[0.625rem] focus:pt-[2rem] focus:text-white-color focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[2rem] disabled:opacity-50'
          placeholder='User Name'
          value={formData.user_name}
          onChange={handleChange}
          disabled={showCaptcha}
          required
        />
        <label
          htmlFor='user_name'
          className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-gray-color transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-yellow-color peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85]'
        >
          {form.labels.name}
        </label>

        {formErrors.user_name && (
          <p className='text-red-600 px-3 mt-2 text-sm'>
            {formErrors.user_name}
          </p>
        )}
      </div>
      <div className='relative mb-6'>
        <input
          type='email'
          id='user_email'
          name='user_email'
          className='peer block h-[58px] w-full border-b-2 border-gray-color bg-transparent px-3 py-4 text-base font-normal leading-tight text-white-color text-opacity-80 transition duration-200 ease-linear placeholder:text-transparent focus:border-yellow-color focus:pb-[0.625rem] focus:pt-[2rem] focus:text-white-color focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[2rem] disabled:opacity-50'
          placeholder='example@gmail.com'
          value={formData.user_email}
          onChange={handleChange}
          disabled={showCaptcha}
          required
        />
        <label
          htmlFor='user_email'
          className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-gray-color transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-yellow-color peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85]'
        >
          {form.labels.email}
        </label>
        {formErrors.user_email && (
          <p className='text-red-600 px-3 mt-2 text-sm'>
            {formErrors.user_email}
          </p>
        )}
      </div>

      <div className='relative mb-8'>
        <textarea
          id='message'
          name='message'
          className='peer resize-none block w-full min-h-[120px] border-b-2 border-gray-color bg-transparent px-3 py-4 text-base font-normal leading-tight text-white-color text-opacity-80 transition duration-200 ease-linear placeholder:text-transparent focus:border-yellow-color focus:pb-[0.625rem] focus:pt-[2rem] focus:text-white-color focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[2rem] disabled:opacity-50'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          disabled={showCaptcha}
          required
        />
        <div className='absolute top-0 h-7 w-[calc(100%-18px)] bg-dark-blue-color'></div>
        <label
          htmlFor='message'
          className='pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 pt-4 text-gray-color transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-yellow-color peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85]'
        >
          {form.labels.message}
        </label>
        {formErrors.message && (
          <p className='text-red-600 px-3 mt-2 text-sm'>{formErrors.message}</p>
        )}
      </div>
      {showCaptcha && (
        <div className='relative border border-gray-color rounded-lg py-4 pt-14 mx-auto my-4'>
          <button
            className='bg-dark-gray-color p-1 rounded-full absolute top-2 right-2'
            onClick={() => setShowCaptcha(false)}
          >
            <IoClose size={24} />
          </button>
          <div className='overflow-auto max-w-max mx-auto'>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
              onChange={sendEmail}
              theme='dark'
            />
          </div>
        </div>
      )}
      <button
        type='submit'
        className='w-full bg-dark-gray-color hover:bg-opacity-80 text-white-color hover:text-yellow-color transition-colors duration-500 py-4 rounded-full text-base focus:outline-none disabled:opacity-50 disabled:hover:text-white-color disabled:hover:bg-opacity-100 flex justify-center items-center gap-4'
        disabled={showCaptcha}
      >
        {form.labels.send}
        {showCaptcha && <ImSpinner2 size={24} className='spinner' />}
      </button>
      {success && !showCaptcha && (
        <p className='text-center mx-auto mt-8 py-6 text-light-blue-color'>
          {form.success}
        </p>
      )}
      {error && !showCaptcha && (
        <p className='text-center mx-auto mt-8 py-6 text-red-600'>
          {form.error}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
