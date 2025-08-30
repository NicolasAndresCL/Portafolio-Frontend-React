import React, { useState } from 'react';
import { styled } from '@/stitches.config';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

// 🎨 Estilos internos
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
  '&::placeholder': {
    color: '$muted',
  },
  '&:focus': {
    borderColor: '$accent',
    boxShadow: '0 0 0 2px $colors$accent',
  },
});

export default function ContactCard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // lógica de envío
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
          />
        </div>

        <Button type="submit" variant="primary">
          Enviar mensaje
        </Button>
      </FormWrapper>
    </Card>
  );
}
