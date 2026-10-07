"use client";

import { useState, type FormEvent } from "react";
import { faqs, phones, services, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [fallback, setFallback] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Hello Al-Rehman Traders,",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Job: ${service}`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappLink(text);
    setFallback(url);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setBlocked(!opened);
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required autoComplete="name" placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="03xx-xxxxxxx"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Job</Label>
        <select
          id="service"
          name="service"
          defaultValue="Not sure yet"
          className="h-12 w-full appearance-none border-b border-ink/25 bg-transparent font-serif text-lg text-ink outline-none focus:border-espresso"
        >
          <option>Not sure yet</option>
          <option>A custom product</option>
          {services.map((service) => (
            <option key={service.id}>{service.name}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">The job</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Size, quantity, and the day it has to be up."
        />
      </div>
      <Button type="submit">Send on WhatsApp</Button>
      <p className="font-serif text-sm leading-relaxed text-muted">
        This opens WhatsApp with your note. Nothing is stored on a server.
      </p>
      {sent ? (
        <p className="font-serif text-base leading-relaxed text-ink" role="status">
          {blocked
            ? "The window was blocked. Use the link below, or call the desk."
            : "WhatsApp should be open with your message. If it is not, use the link or call."}
        </p>
      ) : null}
      {blocked && fallback ? (
        <a
          href={fallback}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-espresso"
        >
          Open WhatsApp →
        </a>
      ) : null}
    </form>
  );
}

export function PhoneStack() {
  return (
    <div>
      <a href={`tel:${phones.desk.tel}`} className="block">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {phones.desk.label}
        </span>
        <span className="mt-2 block font-sans text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none tracking-tight">
          {phones.desk.display}
        </span>
      </a>
      <a href={`tel:${phones.ceo.tel}`} className="mt-8 block">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {phones.ceo.label}
        </span>
        <span className="mt-2 block font-sans text-[clamp(2rem,4vw,3.4rem)] font-medium leading-none tracking-tight">
          {phones.ceo.display}
        </span>
      </a>
      <p className="mt-8 max-w-sm font-serif text-lg leading-relaxed text-ink/75">
        A size, a photo of the wall, and the day it has to be up. That is enough
        to start.
      </p>
    </div>
  );
}

export function FaqList() {
  return (
    <Accordion type="single" collapsible>
      {faqs.map((item, index) => (
        <AccordionItem key={item.q} value={`faq-${index}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
