import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  THEMES,
  DEFAULT_THEME,
  STORAGE_KEY,
  getTheme,
  readStoredTheme,
  storeTheme,
  applyTheme,
} from '@/themes/palettes';

describe('palettes', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    delete document.documentElement.dataset.theme;
  });

  it('hay exactamente tres temas con nombre de color', () => {
    expect(THEMES.map((t) => t.key)).toEqual(['cian', 'violeta', 'ambar']);
    expect(THEMES.map((t) => t.label)).toEqual(['Cian', 'Violeta', 'Ámbar']);
  });

  it('todos los temas definen los mismos tokens (ninguno queda heredando del anterior)', () => {
    const base = getTheme(DEFAULT_THEME);
    const colorKeys = Object.keys(base.colors).sort();
    const fontKeys = Object.keys(base.fonts).sort();
    THEMES.forEach((t) => {
      expect(Object.keys(t.colors).sort()).toEqual(colorKeys);
      expect(Object.keys(t.fonts).sort()).toEqual(fontKeys);
    });
  });

  it('una clave desconocida cae al tema por defecto', () => {
    expect(getTheme('gear5').key).toBe(DEFAULT_THEME);
    expect(getTheme(undefined).key).toBe(DEFAULT_THEME);
  });

  it('lee y guarda el tema en localStorage', () => {
    expect(readStoredTheme()).toBe(DEFAULT_THEME);
    storeTheme('ambar');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('ambar');
    expect(readStoredTheme()).toBe('ambar');
  });

  it('si localStorage lanza, usa el tema por defecto sin romper', () => {
    const spy = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('bloqueado');
    });
    expect(readStoredTheme()).toBe(DEFAULT_THEME);
    spy.mockRestore();
  });

  it('applyTheme deja una sola clase de tema sobre <html>', () => {
    const root = document.documentElement;
    applyTheme('violeta');
    applyTheme('ambar');
    expect(root.classList.contains('theme-ambar')).toBe(true);
    expect(root.classList.contains('theme-violeta')).toBe(false);
    expect(root.dataset.theme).toBe('ambar');
    expect(root.style.colorScheme).toBe('dark');
    applyTheme('violeta');
    expect(root.style.colorScheme).toBe('light');
  });
});
