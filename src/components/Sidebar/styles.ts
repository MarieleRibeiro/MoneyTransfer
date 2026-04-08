import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 4rem);
  background: rgba(22, 27, 34, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  animation: slideIn 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(180deg, rgba(0, 212, 170, 0.2) 0%, transparent 60%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  @media (max-width: 960px) {
    min-height: auto;
    flex-direction: row;
    align-items: center;
    padding: 1.25rem 1.5rem;
    border-radius: 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;

  .logo-icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #00D4AA, #00B894);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 212, 170, 0.3);

    svg {
      color: #0D1117;
      font-size: 18px;
    }
  }

  .logo-text {
    font-size: 1.1rem;
    font-weight: 700;
    color: #E6EDF3;
    letter-spacing: -0.02em;

    span {
      color: #00D4AA;
    }
  }

  @media (max-width: 960px) {
    margin-bottom: 0;
    margin-right: auto;
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 2rem;

  .avatar-wrapper {
    position: relative;
    margin-bottom: 1rem;

    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      border: 2px solid rgba(0, 212, 170, 0.4);
      object-fit: cover;
    }

    .status-badge {
      position: absolute;
      bottom: 3px;
      right: 3px;
      width: 14px;
      height: 14px;
      background: #3FB950;
      border-radius: 50%;
      border: 2px solid #161B22;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 1rem;
    color: #E6EDF3;
    margin-bottom: 0.25rem;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 0.75rem;
    color: #484F58;
    font-family: 'Courier New', monospace;
    background: rgba(255, 255, 255, 0.04);
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0;
    border-bottom: none;
    margin-bottom: 0;
    gap: 0.5rem;

    .avatar-wrapper {
      flex-shrink: 0;
      margin-bottom: 0;
      img {
        width: 48px;
        height: 48px;
        object-fit: cover;
      }
    }

    .profile-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      text-align: center;
    }
  }
`;


export const MenuSectionTitle = styled.h4`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #484F58;
  letter-spacing: 0.1em;
  margin: 1.5rem 0 0.75rem 1rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #8B949E;
    transition: all 200ms ease;
    position: relative;

    svg {
      font-size: 1.1rem;
      flex-shrink: 0;
      transition: color 200ms ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.04);
      color: #E6EDF3;
    }

    &[data-active="true"] {
      background: rgba(0, 212, 170, 0.1);
      color: #00D4AA;
      font-weight: 600;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 60%;
        background: #00D4AA;
        border-radius: 0 2px 2px 0;
      }
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`;


export const MenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;
