import {
  FiArrowRight,
  FiFileText,
  FiHelpCircle,
  FiCalendar,
  FiDollarSign,
  FiShuffle,
} from "react-icons/fi";
import { useStore } from "../main/MainContainer";

import {
  Container,
  Menu,
  Button,
  Wrapper,
  MenuPayment,
  FromTo,
  In,
  For,
  Info,
  Resume,
  ButtonFooter,
} from "./styles";

export const Details = () => {
  const plan = useStore((state) => state.plan);
  const date = useStore((state) => state.date);
  const payment = useStore((state) => state.payment);
  const globalResult = useStore((state) => state.result);
  const to = useStore((state) => state.to);
  const from = useStore((state) => state.from);

  return (
    <Container>
      <Menu>
        <Button>
          {" "}
          <FiFileText size={24} />{" "}
        </Button>
        <Button>
          <FiHelpCircle size={24} />
        </Button>
      </Menu>

      <Wrapper>
        <MenuPayment>
          <h3>Payment Details {plan}</h3>
          <FromTo>
            <In>
              <h6>{payment}</h6>
              <small>{from}</small>
            </In>
            <button>
              {" "}
              <FiArrowRight size={24} />
            </button>
            <For>
              <h6>{globalResult.toFixed(2)}</h6>
              <small>{to}</small>
            </For>
          </FromTo>
        </MenuPayment>

        <Info>
          <Resume>
            <span>
              <FiCalendar />
              <p>Delivery</p>
            </span>
            <h2>{date}</h2>
            {/* <h2>27 July till 12pm</h2> */}
          </Resume>

          <Resume>
            <span>
              <FiDollarSign />
              <p>Conversion rate</p>
            </span>
            <h2>{payment}</h2>
          </Resume>

          <Resume>
            <span>
              <FiShuffle />
              <p>Recipient gets</p>
            </span>
            <h2>{globalResult.toFixed(2)}</h2>
          </Resume>

          <ButtonFooter>Confirm</ButtonFooter>
        </Info>
      </Wrapper>
    </Container>
  );
};
