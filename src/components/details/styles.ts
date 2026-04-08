import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(12px); }
  to { opacity: 1; transform: translateX(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 170, 0.15); }
  50% { box-shadow: 0 0 32px rgba(0, 212, 170, 0.35); }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease 0.1s both;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: ${(props) => props.theme.colors.textSecondary};
  transition: all 200ms ease;

  svg {
    font-size: 1.1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${(props) => props.theme.colors.textPrimary};
    border-color: rgba(255, 255, 255, 0.12);
  }
`;

// Keep legacy name
export const Button = IconButton;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.bgCard};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PaymentHeader = styled.div`
  padding: 1.75rem 2rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background: linear-gradient(
    180deg,
    rgba(0, 212, 170, 0.04) 0%,
    transparent 100%
  );

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.textPrimary};
    letter-spacing: -0.02em;
    margin-bottom: 0.25rem;
  }

  .plan-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    background: ${(props) => props.theme.colors.emeraldDim};
    border: 1px solid ${(props) => props.theme.colors.emeraldGlow};
    border-radius: 20px;
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.emerald};
  }
`;

export const MenuPayment = styled.div`
  padding: 1.75rem 2rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background: linear-gradient(
    180deg,
    rgba(0, 212, 170, 0.04) 0%,
    transparent 100%
  );

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.textPrimary};
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }
`;

export const FromTo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.emeraldDim};
    border: 1px solid ${(props) => props.theme.colors.emeraldGlow};
    color: ${(props) => props.theme.colors.emerald};
    transition: all 200ms ease;

    &:hover {
      background: rgba(0, 212, 170, 0.2);
    }
  }
`;

export const CurrencyPill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h6 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.textPrimary};
    letter-spacing: -0.03em;
    line-height: 1;
  }

  small {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textSecondary};
    display: flex;
    align-items: center;
    gap: 0.375rem;

    .currency-flag {
      width: 18px;
      height: 14px;
      border-radius: 3px;
      object-fit: cover;
    }
  }
`;

export const In = CurrencyPill;
export const For = styled(CurrencyPill)`
  align-items: flex-end;
  text-align: right;
`;

export const Info = styled.div`
  flex: 1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Resume = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }

  .resume-left {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.emerald};
      flex-shrink: 0;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.textSecondary};
    }
  }

  h2 {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textPrimary};
    text-align: right;
  }
`;

export const ConfirmButton = styled.button<{ $loading?: boolean }>`
  width: 100%;
  height: 52px;
  margin-top: 1.5rem;
  border-radius: 14px;
  background: linear-gradient(135deg, #00D4AA 0%, #00B894 100%);
  color: #0D1117;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.01em;
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: ${pulseGlow} 3s infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.15) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: ${shimmer} 2.5s infinite;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0, 212, 170, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  ${(props) =>
    props.$loading &&
    `
    opacity: 0.8;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

// Legacy alias
export const ButtonFooter = ConfirmButton;

export const SuccessToast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${(props) => props.theme.colors.bgCard};
  border: 1px solid ${(props) => props.theme.colors.emerald};
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 212, 170, 0.2);
  animation: ${fadeIn} 0.3s ease;
  z-index: 1000;
  max-width: 320px;

  .toast-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.emeraldDim};
    border: 1px solid ${(props) => props.theme.colors.emeraldGlow};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${(props) => props.theme.colors.emerald};
    font-size: 1.1rem;
  }

  .toast-content {
    h4 {
      font-weight: 700;
      font-size: 0.9rem;
      color: ${(props) => props.theme.colors.textPrimary};
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.textSecondary};
      line-height: 1.4;
    }
  }
`;
