'use client';
import React, { useState } from 'react';
import styles from './signUp.module.scss';

type Players = {
  boys: string;
  girls: string;
};

type FormData = {
  country: string;
  city: string;
  school: string;
  class: string;
  fullName: string;
  email: string;
  number: string;
  players: Players;
};

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
};

const SignUp: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<FormData>({
    country: '',
    city: '',
    school: '',
    class: '',
    fullName: '',
    email: '',
    number: '',
    players: {
      boys: '',
      girls: ''
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'boys' || name === 'girls') {
      setFormData(prev => ({
        ...prev,
        players: {
          ...prev.players,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error on change
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep1 = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.school.trim()) newErrors.school = 'School is required';
    if (!formData.class.trim()) newErrors.class = 'Class is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const phoneRegex = /^\+998\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (!phoneRegex.test(formData.number)) newErrors.number = 'Phone must be like +998XXXXXXXXX';

    if (!formData.players.boys.trim() || isNaN(Number(formData.players.boys))) {
      newErrors.boys = 'Enter a valid number';
    }

    if (!formData.players.girls.trim() || isNaN(Number(formData.players.girls))) {
      newErrors.girls = 'Enter a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleBack = () => setStep(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep2()) return;

    console.log('Submitted Data:', formData);
    // API call or routing here
  };

  return (
    <div className={`${styles.signupWrapper} min-h-screen flex items-center justify-center text-white relative`}>
      <div className="absolute inset-0 bg-[url('/images/signup-bg.jpg')] bg-cover opacity-20"></div>

      <form onSubmit={handleSubmit} className={`${styles.signupForm} relative z-10 backdrop-blur-md p-8 rounded-2xl border border-[#00E3FF]/50 w-full max-w-md`}>
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        {step === 1 && (
          <>
            <Input label="Country" name="country" value={formData.country} onChange={handleChange} error={errors.country} />
            <Input label="City" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
            <Input label="School" name="school" value={formData.school} onChange={handleChange} error={errors.school} />
            <Input label="Class" name="class" value={formData.class} onChange={handleChange} error={errors.class} />
            <button type="button" onClick={handleNext} className={styles.nextButton}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
            <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <Input label="Phone Number" name="number" value={formData.number} onChange={handleChange} error={errors.number} />
            <Input label="Number of Boys" name="boys" type="number" value={formData.players.boys} onChange={handleChange} error={errors.boys} />
            <Input label="Number of Girls" name="girls" type="number" value={formData.players.girls} onChange={handleChange} error={errors.girls} />

            <div className="flex justify-between mt-4 gap-2">
              <button type="button" onClick={handleBack} className={styles.backButton}>
                Back
              </button>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

const Input: React.FC<InputProps> = ({ label, name, value, onChange, type = 'text', error }) => (
  <div className="mb-4">
    <div className="bg-[#024061]/10 border border-[#00E3FF]/50 px-4 py-2 rounded-lg">
      <input
        type={type}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none placeholder-[#ADBECC]"
        required
        min={type === 'number' ? 0 : undefined}
      />
    </div>
    {error && <p className="text-red-400 text-sm mt-1 ml-1">{error}</p>}
  </div>
);

export default SignUp;
