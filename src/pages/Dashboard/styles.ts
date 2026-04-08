import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0D1117 0%, #0A0F1A 50%, #0D1117 100%);
  display: grid;
  grid-template-columns: 260px 1fr 340px;
  gap: 1.5rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  /* Ambient glow effects */
  &::before {
    content: '';
    position: fixed;
    top: -20%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(0, 212, 170, 0.06) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: fixed;
    bottom: -20%;
    right: -5%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(88, 166, 255, 0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 220px 1fr 300px;
    padding: 1.5rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    padding-top: calc(1.5rem + env(safe-area-inset-top));
    gap: 1rem;
  }
`;
