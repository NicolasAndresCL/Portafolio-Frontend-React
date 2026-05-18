import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@/stitches.config';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const FormWrapper = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const Title = styled('h2', {
  fontSize: '$lg',
  fontWeight: 'bold',
  fontFamily: '$mono',
  color: '$syntaxFunction',
  textAlign: 'center',
  marginBottom: '$3',
});

const Label = styled('label', {
  fontSize: '$sm',
  fontWeight: '500',
  fontFamily: '$mono',
  color: '$syntaxComment',
  marginBottom: '$1',
  display: 'block',
});

const Textarea = styled('textarea', {
  width: '100%',
  padding: '$2 $3',
  borderRadius: '$md',
  backgroundColor: '$panel',
  color: '$text',
  border: '1px solid $border',
  fontSize: '$sm',
  fontFamily: '$mono',
  outline: 'none',
  resize: 'vertical',
  '&::placeholder': { color: '$muted' },
  '&:focus': {
    borderColor: '$accent',
    boxShadow: '0 0 0 2px $colors$accent',
  },
});

const FeedbackMessage = styled('p', {
  fontSize: '$sm',
  fontFamily: '$mono',
  textAlign: 'center',
  padding: '$2',
  borderRadius: '$md',
  variants: {
    type: {
      success: { color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)' },
      error:   { color: '$syntaxError', backgroundColor: 'rgba(220, 38, 38, 0.1)' },
    },
  },
});

const INITIAL_FORM = { name: '', email: '', message: '' };

export default function ContactCard() {
  const [formData, setFormData]     = useState(INITIAL_FORM);
  const [status, setStatus]         = useState(null); // 'success' | 'error' | null
  const [feedback, setFeedback]     = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      await axios.post(`${API_URL}/api/contacto/`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus('success');
      setFeedback('¡Mensaje enviado! Me pondré en contacto contigo pronto.');
      setFormData(INITIAL_FORM);
    } catch {
      setStatus('error');
      setFeedback('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card elevation="strong" css={{ maxWidth: '36rem', margin: '0 auto', padding: '$5' }}>
      <Title>¿Tienes preguntas o quieres colaborar?</Title>

      <FormWrapper onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Escribe tu mensaje..."
            required
          />
        </div>

        {status && (
          <FeedbackMessage type={status}>{feedback}</FeedbackMessage>
        )}

        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
      </FormWrapper>
    </Card>
  );
}
