'use client';
import { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/shadcn/Input';
import Form from '../../components/shadcn/Form';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    // placeholder: implement login integration later
    alert('Login not implemented yet');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      <div className="hidden md:flex h-full items-center justify-center bg-slate-100 rounded">Placeholder Photo</div>
      <Card>
        <h2 className="text-xl font-semibold mb-4">Masuk</h2>
        <Form onSubmit={onSubmit}>
          <Input id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com" />
          <Input id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••" />

          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-primary text-white rounded">Masuk</button>
            <a href="/register" className="text-sm text-primary">Buat akun</a>
          </div>
        </Form>
      </Card>
    </div>
  );
}
