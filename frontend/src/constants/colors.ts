/**
 * Paleta de Cores do SintaxEdu
 * Baseado no Manual de Marca e Identidade Visual do Projeto Integrador:
 * - Azul bem escuro (#0F172A): Fundo principal, tecnologia e foco noturno
 * - Azul claro (#38BDF8): Páginas do livro, síntese, facilidade e ações
 * - Branco (#FFFFFF): Integral, texto de alto contraste e destaque
 * - Roxo claro (#818CF8): Símbolo de derivada, cálculos e recursos de IA
 * - Cinza (#334155): Contorno, divisores e bordas
 * - Verde (#10B981): Ações de confirmação/sucesso (Entrar, Continuar, Concluído)
 */

export const colors = {
  // Fundo principal
  background: '#0F172A',
  backgroundDark: '#0B1120',
  backgroundCard: '#1E293B',
  backgroundCardLight: '#26354A',
  backgroundInput: '#162032',
  backgroundOverlay: 'rgba(15, 23, 42, 0.85)',

  // Destaques da Marca
  primary: '#38BDF8',       // Azul Claro da Marca
  primaryLight: '#7DD3FC',
  primaryDark: '#0284C7',
  primaryMuted: 'rgba(56, 189, 248, 0.15)',

  secondary: '#818CF8',     // Roxo Claro da Derivada / IA
  secondaryLight: '#A5B4FC',
  secondaryDark: '#6366F1',
  secondaryMuted: 'rgba(129, 140, 248, 0.15)',

  accentGreen: '#10B981',   // Verde de Ação / Sucesso
  accentGreenLight: '#34D399',
  accentGreenDark: '#059669',
  accentGreenMuted: 'rgba(16, 185, 129, 0.15)',

  // Bordas e Separadores
  border: '#334155',        // Cinza do contorno da marca
  borderLight: '#475569',
  borderHighlight: '#38BDF8',

  // Textos
  textPrimary: '#FFFFFF',   // Branco Puro
  textSecondary: '#94A3B8', // Cinza Claro (Slate 400)
  textMuted: '#64748B',     // Cinza Médio (Slate 500)
  textInverse: '#0F172A',   // Texto escuro sobre botão claro
  textAccent: '#38BDF8',    // Azul Claro para links e destaques
  textPurple: '#818CF8',

  // Status e Feedback
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#38BDF8',

  // Cores Temáticas de Disciplinas
  disciplines: {
    calculo: '#38BDF8',     // Azul
    algebra: '#818CF8',     // Roxo
    fisica: '#F59E0B',      // Âmbar / Laranja
    biologia: '#10B981',    // Verde
    quimica: '#EC4899',     // Rosa
    historia: '#A855F7',    // Roxo vibrante
  },

  // Barra de Navegação Inferior (Tabs)
  tabBar: {
    background: '#0F172A',
    border: '#1E293B',
    active: '#38BDF8',
    inactive: '#64748B',
  },
} as const;

export type ColorKeys = keyof typeof colors;
