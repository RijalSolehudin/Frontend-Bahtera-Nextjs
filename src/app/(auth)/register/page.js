"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);

        if (formData.password !== formData.password_confirmation) {
            setErrors({ password_confirmation: "Konfirmasi password tidak cocok" });
            setIsLoading(false);
            return;
        }

        const result = await register(formData);

        if (!result.success) {
            if (typeof result.error === 'object') {
                // Flatten nested errors from Laravel (e.g., { email: ['Email already taken'] })
                const flatErrors = {};
                Object.keys(result.error).forEach(key => {
                    flatErrors[key] = result.error[key][0];
                });
                setErrors(flatErrors);
            } else {
                setErrors({ form: result.error });
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Buat Akun Baru</h1>
                <p className="text-gray-500 mt-2">Mulai buat undangan digital Anda</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {errors.form && (
                    <div className="p-4 bg-red-50 text-red-600 text-sm rounded-lg">
                        {errors.form}
                    </div>
                )}

                <Input
                    label="Nama Lengkap"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={errors.name}
                    required
                />

                <Input
                    label="Email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                    required
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    error={errors.password}
                    required
                    minLength={6}
                />

                <Input
                    label="Konfirmasi Password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password_confirmation}
                    onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                    error={errors.password_confirmation}
                    required
                />

                <div className="pt-2">
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Memproses..." : "Daftar"}
                    </Button>
                </div>

                <p className="text-center text-sm text-gray-600">
                    Sudah punya akun?{" "}
                    <Link href="/login" className="text-primary hover:underline font-medium">
                        Masuk Disini
                    </Link>
                </p>
            </form>
        </div>
    );
}
