"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";

interface AdminData {
    id: string;
    email: string;
    name: string;
}

export default function ProfilePage() {
    const router = useRouter();
    const [admin, setAdmin] = useState<AdminData | null>(null);
    const [loading, setLoading] = useState(true);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [saving, setSaving] = useState(false);
    const [profileMsg, setProfileMsg] = useState({ type: "", text: "" });

    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newAdminPassword, setNewAdminPassword] = useState("");
    const [creating, setCreating] = useState(false);
    const [createMsg, setCreateMsg] = useState({ type: "", text: "" });

    useEffect(() => {
        fetchAdmin();
    }, []);

    const fetchAdmin = async () => {
        try {
            const response = await fetch("/api/auth/me");
            if (!response.ok) {
                router.push("/login");
                return;
            }
            const data = await response.json();
            setAdmin(data.admin);
            setEmail(data.admin.email);
            setName(data.admin.name);
        } catch (error) {
            console.error("Error fetching admin:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleProfileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setProfileMsg({ type: "", text: "" });

        if (newPassword && newPassword !== confirmPassword) {
            setProfileMsg({ type: "error", text: "Passwords do not match" });
            return;
        }

        if (newPassword && newPassword.length < 6) {
            setProfileMsg({ type: "error", text: "Password must be at least 6 characters" });
            return;
        }

        setSaving(true);

        try {
            const body: Record<string, string> = { email, name };
            if (newPassword) {
                body.currentPassword = currentPassword;
                body.newPassword = newPassword;
            }

            const response = await fetch("/api/auth/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                setProfileMsg({ type: "error", text: data.error || "Failed to update profile" });
                return;
            }

            setAdmin(data.admin);
            setEmail(data.admin.email);
            setName(data.admin.name);
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setProfileMsg({ type: "success", text: "Profile updated successfully" });
        } catch (error) {
            setProfileMsg({ type: "error", text: "An error occurred" });
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    const handleCreateAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreateMsg({ type: "", text: "" });

        if (newAdminPassword.length < 6) {
            setCreateMsg({ type: "error", text: "Password must be at least 6 characters" });
            return;
        }

        setCreating(true);

        try {
            const response = await fetch("/api/auth/admins", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newName,
                    email: newEmail,
                    password: newAdminPassword,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setCreateMsg({ type: "error", text: data.error || "Failed to create admin" });
                return;
            }

            setNewName("");
            setNewEmail("");
            setNewAdminPassword("");
            setCreateMsg({ type: "success", text: "Super admin created successfully" });
        } catch (error) {
            setCreateMsg({ type: "error", text: "An error occurred" });
            console.error(error);
        } finally {
            setCreating(false);
        }
    };

    if (loading) {
        return (
            <div className="p-8">
                <div className="text-center py-12 text-muted-foreground">Loading...</div>
            </div>
        );
    }

    return (
        <div className="p-8 space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-foreground">Profile</h1>
                <p className="text-muted-foreground mt-2">Manage your account settings</p>
            </div>

            <Card className="border-border bg-card/50 max-w-2xl">
                <form onSubmit={handleProfileSubmit} className="p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Edit Your Profile</h2>

                    {profileMsg.text && (
                        <div
                            className={`p-3 rounded-md text-sm ${
                                profileMsg.type === "success"
                                    ? "bg-green-500/10 border border-green-500 text-green-500"
                                    : "bg-destructive/10 border border-destructive text-destructive"
                            }`}
                        >
                            {profileMsg.text}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="border-t border-border pt-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                            Change Password
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Leave blank to keep your current password
                        </p>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <PasswordInput
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <PasswordInput
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <PasswordInput
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <Button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                            disabled={saving}
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.push("/dashboard")}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>

            {/* Demo form field to create new super admins  --------------------- */}

            {/* <Card className="border-border bg-card/50 max-w-2xl">
                <form onSubmit={handleCreateAdmin} className="p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Create Super Admin</h2>

                    {createMsg.text && (
                        <div
                            className={`p-3 rounded-md text-sm ${
                                createMsg.type === 'success'
                                    ? 'bg-green-500/10 border border-green-500 text-green-500'
                                    : 'bg-destructive/10 border border-destructive text-destructive'
                            }`}
                        >
                            {createMsg.text}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="newName">Name</Label>
                        <Input
                            id="newName"
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="newEmail">Email</Label>
                        <Input
                            id="newEmail"
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="newAdminPassword">Password</Label>
                        <PasswordInput
                            id="newAdminPassword"
                            value={newAdminPassword}
                            onChange={(e) => setNewAdminPassword(e.target.value)}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={creating}
                    >
                        {creating ? 'Creating...' : 'Create Super Admin'}
                    </Button>
                </form>
            </Card> */}
        </div>
    );
}
