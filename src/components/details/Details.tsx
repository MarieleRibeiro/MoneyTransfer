import styled from 'styled-components'
import { FiArrowRight, FiFileText, FiHelpCircle, FiCalendar, FiDollarSign, FiShuffle } from 'react-icons/fi'

export const Container = styled.div`
  max-width: 381px;
  width: 100%;

  @media (max-width: 414px) {
    width: 100%;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  border: 2px solid #E4E7EB;
  box-sizing: border-box;
  border-radius: 4px;
  margin-left: 49px;
  margin-top: 55px;

  @media (max-width: 414px) {
    width: 100%;
    margin: 96px 0 0 0;
  }
`
export const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button:first-child {
    margin-right: 27px;
}
@media (max-width: 414px) {
    display: none;
  }
`
export const Button = styled.button`
   background: #FFFFFF;
  box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  align-items: center;

  @media (max-width: 414px) {
    width: 100%;
  }
`

export const MenuPayment = styled.div`
  width: 100%;
  padding: 40px ;

  h3 {
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.colors.black};
  }
  small {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray200};
  }
  h6 {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }
`
export const ButtonFooter = styled.button`
  background: #F364A2;
  border-radius: 4px;
  width: 301px;
  height: 46px;
  margin-top: 93px;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  @media (max-width: 414px) {
    width: 100%;
  }
`

export const Info = styled.div`
  border-top: 2px solid #E4E7EB;
  padding: 40px;
  width: 100%;

  span {
    display: flex;
  }
  p {
    font-size: 17px;
    color: ${(props) => props.theme.colors.gray100};
  }
  h2 {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }
`

export const FromTo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0 0;
  button { 
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
  }
`
export const In = styled.div``
export const For = styled.div``

export const Resume = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  svg {
    margin-right: 15px;
    font-size: 24px;
  }
  :nth-child(2) {
    margin: 20px 0;
  }
 
`

export const Details = () => {
  return (
    <Container>
      <Menu>
        <Button> < FiFileText size={24} /> </Button>
        <Button>< FiHelpCircle size={24} /></Button>
      </Menu>

      <Wrapper>
        <MenuPayment>
          <h3>Payment Details</h3>
          <FromTo>
            <In>
              <h6>22,124</h6>
              <small>BRL</small>
            </In>
            <button> <FiArrowRight size={24} /></button>
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
              < FiDollarSign />
              <p>Conversion rate</p>
            </span>
            <h2>22,124</h2>
          </Resume>

          <Resume>
            <span>
              < FiShuffle />
              <p>Recipient gets</p>
            </span>
            <h2>4,124</h2>
          </Resume>

          <ButtonFooter>
            Confirm
        </ButtonFooter>
        </Info>

      </Wrapper>

    </Container>

  )
}