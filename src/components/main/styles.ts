import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 0.5s ease;
`;

export const Header = styled.header`
  margin-bottom: 2rem;

  h3 {
    font-weight: 700;
    font-size: 1.75rem;
    color: ${(props) => props.theme.colors.textPrimary};
    letter-spacing: -0.03em;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-top: 0.25rem;
  }
`;

export const ExchangeRate = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors.emeraldDim};
  border: 1px solid ${(props) => props.theme.colors.emeraldGlow};
  border-radius: 20px;
  padding: 0.375rem 0.875rem;
  margin-top: 0.75rem;

  .rate-label {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  .rate-value {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.emerald};
  }

  .rate-dot {
    width: 6px;
    height: 6px;
    background: ${(props) => props.theme.colors.emerald};
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
`;

export const Info = styled.div`
  width: 100%;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const From = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .field-label {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${(props) => props.theme.colors.textSecondary};
    padding: 0 0.25rem;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const CurrencyCard = styled.div`
  background: ${(props) => props.theme.colors.bgCard};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 16px;
  padding: 1.25rem;
  transition: border-color 200ms ease, box-shadow 200ms ease;

  &:hover {
    border-color: rgba(0, 212, 170, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    padding-bottom: 1rem;
  }

  .ant-select {
    flex: 1;
  }

  .ant-select-selector {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    height: auto !important;
  }

  .ant-select-selection-item {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.textPrimary} !important;
    font-weight: 600;
    font-size: 1rem;

    img {
      margin-right: 0.625rem;
      border-radius: 3px;
    }
  }

  .ant-select-arrow {
    color: ${(props) => props.theme.colors.textSecondary} !important;
  }
`;

export const AmountBox = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  .ant-input-number {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    flex: 1;
  }

  .ant-input-number-input {
    padding: 0 !important;
    font-size: 2rem !important;
    font-weight: 700 !important;
    color: ${(props) => props.theme.colors.textPrimary} !important;
    letter-spacing: -0.02em;
    height: auto !important;
    line-height: 1.2 !important;
  }

  .ant-input-number-handler-wrap {
    display: none;
  }

  .currency-code {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textSecondary};
    margin-left: 0.5rem;
    white-space: nowrap;
  }
`;

export const AmountLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 0.375rem;
`;

export const SwapButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  align-self: center;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.emeraldDim};
  border: 1px solid ${(props) => props.theme.colors.emeraldGlow};
  color: ${(props) => props.theme.colors.emerald};
  transition: all 200ms ease;
  position: relative;
  top: 8px;

  svg {
    font-size: 1.25rem;
    transition: transform 400ms ease;
  }

  &:hover {
    background: rgba(0, 212, 170, 0.2);
    border-color: ${(props) => props.theme.colors.emerald};
    box-shadow: 0 0 16px rgba(0, 212, 170, 0.25);

    svg {
      transform: rotate(180deg);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 960px) {
    align-self: center;
    top: 0;
    transform: rotate(90deg);

    &:hover svg {
      transform: rotate(180deg);
    }
  }
`;

/* Keep legacy names for compatibility */
export const Span = styled.div``;
export const IconRefresh = SwapButton;

export const SectionTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 1rem;
`;

export const ChooseDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  .date-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  .ant-picker {
    background: ${(props) => props.theme.colors.bgInput} !important;
    border: 1px solid ${(props) => props.theme.colors.border} !important;
    border-radius: 10px !important;
    padding: 0.5rem 0.875rem !important;
    transition: border-color 200ms ease !important;

    &:hover, &.ant-picker-focused {
      border-color: ${(props) => props.theme.colors.emerald} !important;
      box-shadow: 0 0 0 2px rgba(0, 212, 170, 0.1) !important;
    }
  }

  .ant-picker-input > input {
    color: ${(props) => props.theme.colors.textPrimary} !important;
    font-size: 0.875rem !important;
    font-weight: 500 !important;
  }

  .ant-picker-input > input::placeholder {
    color: ${(props) => props.theme.colors.textSecondary} !important;
    opacity: 1 !important;
  }

  .ant-picker-suffix {
    color: ${(props) => props.theme.colors.textSecondary} !important;
  }

  .ant-picker-clear {
    background: ${(props) => props.theme.colors.bgInput} !important;
    color: ${(props) => props.theme.colors.textSecondary} !important;
  }
`;

export const LabelRadio = styled.div<{ $active?: boolean }>`
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
  border-radius: 14px;
  border: 1.5px solid ${(props) =>
    props.$active ? props.theme.colors.emerald : props.theme.colors.border};
  background: ${(props) =>
    props.$active ? props.theme.colors.emeraldDim : props.theme.colors.bgCard};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    border-color: ${(props) =>
      props.$active ? props.theme.colors.emerald : "rgba(0, 212, 170, 0.3)"};
    background: ${(props) =>
      props.$active ? props.theme.colors.emeraldDim : "rgba(0, 212, 170, 0.04)"};
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }

  .plan-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .plan-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) =>
      props.$active ? props.theme.colors.emerald : props.theme.colors.textPrimary};
  }

  .plan-date {
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  .plan-price {
    font-size: 0.9rem;
    font-weight: 700;
    color: ${(props) =>
      props.$active ? props.theme.colors.emerald : props.theme.colors.textPrimary};
  }
`;

export const Footer = styled.footer`
  width: 100%;

  .ant-radio-group {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
