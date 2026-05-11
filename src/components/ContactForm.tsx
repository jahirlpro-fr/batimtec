"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Send, Loader2, AlertCircle } from "lucide-react";

const services = [
  "Travaux — Électricité",
  "Travaux — Plomberie",
  "Travaux — Menuiserie",
  "Travaux — Dépannage urgent",
  "Travaux — Multiservices",
  "Rénovation — Sols & revêtements",
  "Rénovation — Peinture",
  "Rénovation — Cuisine",
  "Rénovation — Salle de bain",
  "Rénovation — Agrandissement",
  "Maintenance — Contrat",
  "Maintenance — Contrôle technique",
  "Maintenance — Commission de sécurité",
  "Autre",
];

interface FormState {
  nom: string;
  email: string;
  telephone: string;
  service: string;
  message: string;
}

const empty: FormState = { nom: "", email: "", telephone: "", service: "", message: "" };

function validate(form: FormState): string | null {
  if (form.nom.trim().length < 2) return "Le nom doit faire au moins 2 caractères.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "L'adresse email n'est pas valide.";
  if (form.message.trim().length < 20) return "Le message doit faire au moins 20 caractères.";
  return null;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validate(form);
    if (validationError) {
      setErrorMsg(validationError);
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur serveur");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue. Réessayez.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Card className="border-0 shadow-sm">
        <CardContent className="p-8 flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-black text-[#1B3A6B] mb-2">Message envoyé !</h3>
          <p className="text-gray-500 max-w-md mb-8">
            Merci pour votre demande. Notre équipe vous contactera sous 24h ouvrées.
          </p>
          <Button
            variant="outline"
            onClick={() => { setStatus("idle"); setForm(empty); }}
          >
            Envoyer une nouvelle demande
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-2xl font-black text-[#1B3A6B] mb-2">Demande de devis gratuit</h2>
        <p className="text-sm text-gray-500 mb-7">Réponse garantie sous 24h ouvrées.</p>

        {status === "error" && errorMsg && (
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-6 text-sm text-red-700">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="nom" className="block text-sm font-semibold text-[#1B3A6B] mb-1.5">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                value={form.nom}
                onChange={handleChange}
                placeholder="Jean Dupont"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1B3A6B] mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jean@exemple.fr"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="telephone" className="block text-sm font-semibold text-[#1B3A6B] mb-1.5">
                Téléphone
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                value={form.telephone}
                onChange={handleChange}
                placeholder="06 00 00 00 00"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B]"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-[#1B3A6B] mb-1.5">
                Service concerné
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B]"
              >
                <option value="">Sélectionner…</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#1B3A6B] mb-1.5">
              Décrivez votre projet <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Nature des travaux, surface concernée, localisation, délai souhaité…"
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3A6B]/30 focus:border-[#1B3A6B] resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <p className="text-xs text-gray-400">
              <span className="text-red-500">*</span> Champs obligatoires
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="bg-[#C9A84C] text-[#1B3A6B] hover:bg-[#E8D08A] font-bold"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
