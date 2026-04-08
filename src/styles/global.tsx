import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border: 0;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  :root {
    --transition-fast: 150ms ease;
    --transition-base: 250ms ease;
    --transition-slow: 400ms ease;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.4);
    --shadow-glow: 0 0 20px rgba(0, 212, 170, 0.2);
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #0D1117;
    color: #E6EDF3;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #0D1117;
  }
  ::-webkit-scrollbar-thumb {
    background: #30363D;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #484F58;
  }

  a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
  }

  ol, ul {
    list-style: none;
  }

  button, input, optgroup, select, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    overflow: visible;
    border: 0;
    outline: 0;
    font: inherit;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    color: inherit;
    background: none;
    vertical-align: top;
    cursor: pointer;
  }

  a:active, button:active {
    color: inherit;
  }

  textarea {
    resize: none;
  }

  img {
    max-width: 100%;
    height: auto;
    border-style: none;
  }

  table {
    border-collapse: collapse;
  }

  /* Ant Design dark mode overrides */
  .ant-select-dropdown {
    background: #161B22 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 12px !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6) !important;
  }

  .ant-select-item {
    color: #E6EDF3 !important;
  }

  .ant-select-item-option-active,
  .ant-select-item-option-selected {
    background: rgba(0, 212, 170, 0.1) !important;
    color: #00D4AA !important;
  }

  /* DatePicker — container */
  .ant-picker-dropdown {
    background: transparent !important;
  }

  /* DatePicker input field text + placeholder */
  .ant-picker-input > input {
    color: #E6EDF3 !important;
    font-size: 0.875rem !important;
  }

  .ant-picker-input > input::placeholder,
  .ant-picker-input input::placeholder {
    color: #8B949E !important;
    opacity: 1 !important;
  }

  .ant-picker-panel-container,
  .ant-picker-panel {
    background: #1C2128 !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-radius: 14px !important;
    box-shadow: 0 12px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,212,170,0.1) !important;
  }

  /* Header (mês/ano + setas) */
  .ant-picker-header {
    background: #1C2128 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06) !important;
    border-radius: 14px 14px 0 0 !important;
  }

  .ant-picker-header button,
  .ant-picker-header-view button {
    color: #C9D1D9 !important;
    font-weight: 600 !important;
  }

  .ant-picker-header button:hover {
    color: #00D4AA !important;
  }

  /* Corpo do calendário */
  .ant-picker-body {
    background: #1C2128 !important;
    border-radius: 0 0 14px 14px !important;
    padding: 8px 12px 12px !important;
  }

  /* Cabeçalho dos dias da semana (Su, Mo, Tu…) */
  .ant-picker-content th {
    color: #8B949E !important;
    font-size: 0.75rem !important;
    font-weight: 600 !important;
  }

  /* Todos os dias — base */
  .ant-picker-cell {
    color: #484F58 !important; /* dias fora do mês — cinza médio, legível */
  }

  /* Dias dentro do mês */
  .ant-picker-cell-in-view {
    color: #E6EDF3 !important;
  }

  .ant-picker-cell-in-view .ant-picker-cell-inner {
    color: #E6EDF3 !important;
    border-radius: 8px !important;
  }

  /* Hover */
  .ant-picker-cell:hover .ant-picker-cell-inner,
  .ant-picker-cell-in-view:hover .ant-picker-cell-inner {
    background: rgba(0, 212, 170, 0.12) !important;
    color: #00D4AA !important;
  }

  /* Hoje */
  .ant-picker-cell-today .ant-picker-cell-inner {
    border: 1.5px solid #00D4AA !important;
    border-radius: 8px !important;
    color: #00D4AA !important;
    background: rgba(0, 212, 170, 0.08) !important;
  }

  .ant-picker-cell-today .ant-picker-cell-inner::before {
    border: none !important;
  }

  /* Dia selecionado */
  .ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    background: #00D4AA !important;
    color: #0D1117 !important;
    font-weight: 700 !important;
    border-radius: 8px !important;
    border: none !important;
  }

  /* Footer "Today" */
  .ant-picker-footer {
    background: #1C2128 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.06) !important;
    border-radius: 0 0 14px 14px !important;
  }

  .ant-picker-today-btn {
    color: #00D4AA !important;
    font-weight: 600 !important;
  }

  .ant-picker-today-btn:hover {
    color: #E6EDF3 !important;
  }


  .ant-radio-inner {
    background: #1C2128 !important;
    border-color: rgba(255,255,255,0.2) !important;
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #00D4AA !important;
    background: #00D4AA !important;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(180deg); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;