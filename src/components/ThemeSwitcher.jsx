import React, { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '@/stitches.config';
import { THEMES, getTheme, readStoredTheme, storeTheme, applyTheme } from '@/themes/palettes';

// Selector de tema fijo en la esquina superior derecha. Misma primitiva Radix que BasicMenu
// (Portal + detección de colisiones), con RadioGroup: el lector de pantalla anuncia cuál
// está marcado. El tema se aplica sobre <html> y se recuerda en localStorage.

const Trigger = styled('button', {
  position: 'fixed',
  top: '$3',
  right: '$3',
  zIndex: 40,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  padding: '$2 $3',
  fontFamily: '$mono',
  fontSize: '$sm',
  fontWeight: 600,
  color: '$text',
  backgroundColor: '$surface',
  border: '1px solid $border',
  borderRadius: '9999px',
  boxShadow: '$glow',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, border-color 0.2s ease',

  '&:hover': { transform: 'translateY(-1px)', borderColor: '$accent' },
  '&:focus-visible': { outline: '2px solid $accent', outlineOffset: '2px' },
});

// El nombre se oculta en celular: queda solo la muestra de color (con aria-label).
const TriggerLabel = styled('span', {
  display: 'none',
  '@bp1': { display: 'inline' },
});

const Swatch = styled('span', {
  display: 'inline-block',
  width: '1.1rem',
  height: '1.1rem',
  flexShrink: 0,
  borderRadius: '9999px',
  border: '2px solid $border',
});

const Panel = styled(DropdownMenu.Content, {
  width: '17rem',
  maxWidth: 'var(--radix-dropdown-menu-content-available-width)',
  padding: '$2',
  backgroundColor: '$surface',
  border: '1px solid $border',
  borderRadius: '$lg',
  boxShadow: '$strong',
  zIndex: 50,
});

const PanelTitle = styled(DropdownMenu.Label, {
  padding: '$1 $2 $2',
  fontFamily: '$mono',
  fontSize: '$xs',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '$muted',
});

const Option = styled(DropdownMenu.RadioItem, {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$2',
  borderRadius: '$md',
  outline: 'none',
  cursor: 'pointer',
  color: '$text',
  border: '1px solid transparent',

  '&[data-highlighted]': { backgroundColor: '$panel' },
  '&[data-state="checked"]': { borderColor: '$accent' },
});

const OptionText = styled('span', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  lineHeight: 1.3,
  flex: 1,
});

const OptionName = styled('span', {
  fontFamily: '$heading',
  fontWeight: 700,
  fontSize: '$base',
});

const OptionTagline = styled('span', {
  fontSize: '$xs',
  color: '$muted',
});

const Check = styled('span', {
  color: '$accent',
  fontWeight: 700,
});

export default function ThemeSwitcher() {
  const [themeKey, setThemeKey] = useState(readStoredTheme);

  useEffect(() => {
    applyTheme(themeKey);
  }, [themeKey]);

  const handleChange = (key) => {
    setThemeKey(key);
    storeTheme(key);
  };

  const current = getTheme(themeKey);

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <Trigger aria-label={`Cambiar tema (actual: ${current.label})`}>
          <Swatch aria-hidden="true" style={{ backgroundImage: current.swatch }} />
          <TriggerLabel>{current.label}</TriggerLabel>
        </Trigger>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Panel align="end" sideOffset={8} collisionPadding={12}>
          <PanelTitle>Tema</PanelTitle>
          <DropdownMenu.RadioGroup value={themeKey} onValueChange={handleChange}>
            {THEMES.map((t) => (
              <Option key={t.key} value={t.key}>
                <Swatch aria-hidden="true" style={{ backgroundImage: t.swatch }} />
                <OptionText>
                  <OptionName>{t.label}</OptionName>
                  <OptionTagline>{t.tagline}</OptionTagline>
                </OptionText>
                <DropdownMenu.ItemIndicator asChild>
                  <Check aria-hidden="true">✓</Check>
                </DropdownMenu.ItemIndicator>
              </Option>
            ))}
          </DropdownMenu.RadioGroup>
        </Panel>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
