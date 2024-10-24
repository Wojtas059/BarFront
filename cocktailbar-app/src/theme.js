// src/theme.js

import { defineStore } from 'pinia';

export function getTheme() {
    return localStorage.getItem('theme') || 'light';
  }
  
export function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}


export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'pl'
  }),
  actions: {
    setLanguage(lang) {
      this.currentLanguage = lang;
    }
  }
});