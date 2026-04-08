import { useState } from "react";
import {
  FiArrowRight,
  FiFileText,
  FiHelpCircle,
  FiCalendar,
  FiDollarSign,
  FiShuffle,
  FiCheckCircle,
} from "react-icons/fi";
import { useStore } from "../main/MainContainer";

import {
  Container,
  Menu,
  IconButton,
  Wrapper,
  MenuPayment,
  FromTo,
  In,
  For,
  Info,
  Resume,
  ConfirmButton,
  SuccessToast,
} from "./styles";
import dayjs from "dayjs";

export const Details = () => {
  const plan = useStore((state) => state.plan);
  const date = useStore((state) => state.date);
  const payment = useStore((state) => state.payment);
  const globalResult = useStore((state) => state.result);
  const to = useStore((state) => state.to);
  const from = useStore((state) => state.from);
  const rate = useStore((state) => state.rate);

  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const conversionRate = rate ? rate.toFixed(4) : "—";

  const deliveryDate = dayjs(date).isValid()
    ? dayjs(date).format("DD MMM YYYY, HH:mm")
    : dayjs().add(2, "hour").format("DD MMM YYYY, HH:mm");

  const handleConfirm = () => {
    if (payment <= 0) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
      setTimeout(() => setConfirmed(false), 4000);
    }, 1500);
  };

  return (
    <Container>
      <Menu>
        <IconButton title="Download receipt">
          <FiFileText size={18} />
        </IconButton>
        <IconButton title="Help">
          <FiHelpCircle size={18} />
        </IconButton>
      </Menu>

      <Wrapper>
        <MenuPayment>
          <h3>Payment Details</h3>
          <span className="plan-badge">⚡ {plan}</span>

          <FromTo>
            <In>
              <h6>{payment > 0 ? payment.toFixed(2) : "0.00"}</h6>
              <small>{from}</small>
            </In>

            <button title="Direction">
              <FiArrowRight size={18} />
            </button>

            <For>
              <h6>{globalResult > 0 ? globalResult.toFixed(2) : "0.00"}</h6>
              <small>{to}</small>
            </For>
          </FromTo>
        </MenuPayment>

        <Info>
          <Resume>
            <div className="resume-left">
              <FiCalendar size={16} />
              <p>Delivery</p>
            </div>
            <h2>{deliveryDate}</h2>
          </Resume>

          <Resume>
            <div className="resume-left">
              <FiDollarSign size={16} />
              <p>Exchange rate</p>
            </div>
            <h2>
              1 {from} = {conversionRate} {to}
            </h2>
          </Resume>

          <Resume>
            <div className="resume-left">
              <FiShuffle size={16} />
              <p>Recipient gets</p>
            </div>
            <h2>
              {globalResult > 0 ? globalResult.toFixed(2) : "0.00"} {to}
            </h2>
          </Resume>

          <Resume>
            <div className="resume-left">
              <FiDollarSign size={16} />
              <p>Transfer fee</p>
            </div>
            <h2>
              {plan === "Express"
                ? "$ 0.99"
                : plan === "Standard"
                ? "$ 0.49"
                : "Free"}
            </h2>
          </Resume>

          <ConfirmButton
            $loading={loading}
            onClick={handleConfirm}
            disabled={payment <= 0}
          >
            {loading ? (
              <>Processing…</>
            ) : (
              <>
                <FiCheckCircle size={18} />
                Confirm Transfer
              </>
            )}
          </ConfirmButton>
        </Info>
      </Wrapper>

      {confirmed && (
        <SuccessToast>
          <div className="toast-icon">
            <FiCheckCircle />
          </div>
          <div className="toast-content">
            <h4>Transfer confirmed! 🎉</h4>
            <p>
              {payment.toFixed(2)} {from} → {globalResult.toFixed(2)} {to} via{" "}
              {plan}
            </p>
          </div>
        </SuccessToast>
      )}
    </Container>
  );
};
