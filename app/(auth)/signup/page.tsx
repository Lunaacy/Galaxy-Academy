'use client';
import React, { useState, useRef } from 'react';
import styles from './signUp.module.scss';
import { AiOutlineArrowRight, AiOutlineDownload } from 'react-icons/ai';
import Button from '@/src/components/button/Button';

type Players = { boys: string; girls: string };
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
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [students, setStudents] = useState<{ username: string; password: string }[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const resultRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    country: '',
    city: '',
    school: '',
    class: '',
    fullName: '',
    email: '',
    number: '',
    players: { boys: '', girls: '' }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'boys' || name === 'girls') {
      setFormData(prev => ({ ...prev, players: { ...prev.players, [name]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateStep1 = () => {
    const newErrors: any = {};
    if (!formData.country) newErrors.country = 'Required';
    if (!formData.city) newErrors.city = 'Required';
    if (!formData.school) newErrors.school = 'Required';
    if (!formData.class) newErrors.class = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: any = {};
    const phoneRegex = /^\+998\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName) newErrors.fullName = 'Required';
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Invalid email';
    if (!phoneRegex.test(formData.number)) newErrors.number = 'Format: +998XXXXXXXXX';
    if (!formData.players.boys || isNaN(+formData.players.boys)) newErrors.boys = 'Enter a number';
    if (!formData.players.girls || isNaN(+formData.players.girls)) newErrors.girls = 'Enter a number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    const count = +formData.players.boys + +formData.players.girls;
    const generated = Array.from({ length: count }, (_, i) => ({
      username: `student${i + 1}`,
      password: Math.random().toString(36).slice(-8)
    }));

    setStudents(generated);
    setSubmitted(true);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const downloadCSV = () => {
    const csv = students.map(s => `${s.username},${s.password}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'student-credentials.csv';
    link.click();
  };

  return (
    <div className={`${styles.signupWrapper} min-h-screen flex items-center justify-center text-white relative`}>
      <div className="absolute inset-0 bg-[url('/images/signup-bg.jpg')] bg-cover opacity-20"></div>

      <form onSubmit={handleSubmit} className={`${styles.signupForm} relative z-10 backdrop-blur-md p-8 rounded-xl border border-[#00E3FF]/40 w-full max-w-md`}>
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        {!submitted && step === 1 && (
          <>
            <Input label="Country" name="country" value={formData.country} onChange={handleChange} error={errors.country} />
            <Input label="City" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
            <Input label="School" name="school" value={formData.school} onChange={handleChange} error={errors.school} />
            <Input label="Class" name="class" value={formData.class} onChange={handleChange} error={errors.class} />
            <div className="flex justify-end mt-8">
              <Button text="Next" onClick={() => validateStep1() && setStep(2)} icon={<AiOutlineArrowRight />} />
            </div>
          </>
        )}

        {!submitted && step === 2 && (
          <>
            <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
            <Input label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <Input label="Phone Number" name="number" value={formData.number} onChange={handleChange} error={errors.number} />
            <Input label="Number of Boys" name="boys" type="number" value={formData.players.boys} onChange={handleChange} error={errors.boys} />
            <Input label="Number of Girls" name="girls" type="number" value={formData.players.girls} onChange={handleChange} error={errors.girls} />
            <div className="flex justify-between mt-4 gap-2">
              <Button text="Back" onClick={() => setStep(1)} />
              <Button type="submit" text="Submit" />
            </div>
          </>
        )}

        {submitted && (
          <div ref={resultRef} className="mt-6">
            <h2 className="text-xl text-center font-bold text-green-400 mb-4">🎉 Students Generated</h2>
            <div className="overflow-auto max-h-60 border rounded border-[#00E3FF]/20">
              <table className="w-full text-sm text-white">
                <thead className="bg-[#00E3FF]/10 text-[#00E3FF]">
                  <tr>
                    <th className="p-2">Username</th>
                    <th className="p-2">Password</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr key={i} className="border-t border-[#00E3FF]/20">
                      <td className="p-2">{s.username}</td>
                      <td className="p-2">{s.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <Button text="Download CSV" onClick={downloadCSV} icon={<AiOutlineDownload />} />
            </div>
          </div>
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
