"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const workspaceOptions = [
  "Open Desk / Day Pass",
  "Dedicated Desk",
  "Private Cabin",
  "Meeting Room",
  "Virtual Office",
  "Just exploring",
];

const teamSizes = ["Just me (1)", "2–5 people", "6–10 people", "11–20 people", "20+ people"];

export default function BookTourForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    teamSize: "",
    preferredDate: "",
    workspaceInterest: [] as string[],
    notes: "",
  });

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      workspaceInterest: prev.workspaceInterest.includes(value)
        ? prev.workspaceInterest.filter((v) => v !== value)
        : [...prev.workspaceInterest, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#1E3A5F" }}>
          Tour Request Received!
        </h3>
        <p className="text-gray-600 max-w-sm">
          Thank you! We&apos;ll reach out within a few hours to confirm your tour at Brigade IRV, Whitefield.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm hover:underline"
          style={{ color: "#FF6B35" }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Arun Kumar"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2"
            style={{ outlineColor: "#FF6B35" }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="arun@example.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Team Size</label>
          <select
            value={form.teamSize}
            onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none bg-white"
          >
            <option value="">Select team size</option>
            {teamSizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date / Time</label>
        <input
          type="text"
          value={form.preferredDate}
          onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
          placeholder="e.g. March 20, afternoon"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none"
        />
      </div>

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Workspace Interest (select all that apply)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {workspaceOptions.map((opt) => (
              <label
                key={opt}
                className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-sm transition-colors ${
                  form.workspaceInterest.includes(opt)
                    ? "bg-orange-50 text-orange-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                style={
                  form.workspaceInterest.includes(opt)
                    ? { borderColor: "#FF6B35" }
                    : {}
                }
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={form.workspaceInterest.includes(opt)}
                  onChange={() => handleCheckbox(opt)}
                />
                <span
                  className="w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center"
                  style={
                    form.workspaceInterest.includes(opt)
                      ? { backgroundColor: "#FF6B35", borderColor: "#FF6B35" }
                      : { borderColor: "#d1d5db" }
                  }
                >
                  {form.workspaceInterest.includes(opt) && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                {opt}
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Anything specific you'd like to see or ask about?"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-lg font-semibold text-white text-sm transition-opacity flex items-center justify-center gap-2 disabled:opacity-70"
        style={{ backgroundColor: "#FF6B35" }}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Book a Tour at Brigade IRV"
        )}
      </button>
      <p className="text-xs text-gray-500 text-center">
        We typically respond within 2–4 hours on working days.
      </p>
    </form>
  );
}
