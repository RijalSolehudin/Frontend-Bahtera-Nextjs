'use client';
import { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/shadcn/Input';
import Form from '../../components/shadcn/Form';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Register not implemented yet');
  };

  return (
    <div className="max-w-md">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Daftar</h2>
        <Form onSubmit={onSubmit}>
          <Input id="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com" />
          <Input id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••" />
          <div>
            <button className="px-4 py-2 bg-primary text-white rounded">Daftar</button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
