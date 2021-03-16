import {
  FiArrowRight,
  FiFileText,
  FiHelpCircle,
  FiCalendar,
  FiDollarSign,
  FiShuffle,
} from "react-icons/fi";

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
          <h3>Payment Details</h3>
          <FromTo>
            <In>
              <h6>22,124</h6>
              <small>BRL</small>
            </In>
            <button>
              {" "}
              <FiArrowRight size={24} />
            </button>
            <For>
              <h6>4,124</h6>
              <small>EUR</small>
            </For>
          </FromTo>
        </MenuPayment>

        <Info>
          <Resume>
            <span>
              <FiCalendar />
              <p>Delivery</p>
            </span>
            <h2>27 July till 12pm</h2>
          </Resume>

          <Resume>
            <span>
              <FiDollarSign />
              <p>Conversion rate</p>
            </span>
            <h2>22,124</h2>
          </Resume>

          <Resume>
            <span>
              <FiShuffle />
              <p>Recipient gets</p>
            </span>
            <h2>4,124</h2>
          </Resume>

          <ButtonFooter>Confirm</ButtonFooter>
        </Info>
      </Wrapper>
    </Container>
  );
};
