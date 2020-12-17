import { Content, Header, MainContent, Main, IconRefresh, Footer } from '../main/styles'
import { BiRefresh } from 'react-icons/bi'
import { FiCalendar } from 'react-icons/fi'

export const MainContainer = () => {
  return (
    <Content>
      <Header>
        <h3>Send Money</h3>
        <strong>22,124 <small>available</small></strong>
      </Header>
      <MainContent>
        <form>
          <label>From:</label>
          <select name="money" id="money">
            <option value="brl" selected> Brazil</option>
            <option value="eur">Germany</option>
          </select>
        </form>
        <form>
          <label>To:</label>
          <select name="money" id="money">
            <option value="eur" selected>Germany</option>
            <option value="brl">Brazil</option>
          </select>
        </form>
      </MainContent>
      <Main>
        <span>
          <p>You send</p>
          <h1>22,124 <small>BRL</small></h1>
        </span>
        <IconRefresh>
          <BiRefresh size={24} />
        </IconRefresh>

        <span>
          <p>Recipient gets</p>
          <h1>4,124 <small>EUR</small></h1>
        </span>
      </Main>
      <Footer>
        <span>
          <h2>Choose a plan:</h2>
          <p>Choose the date:  <FiCalendar size={18} /> </p>
        </span>
        <section>
          <label >
            <input type="radio" />
          Get 27 July 2020 till 12pm
            <p>Express</p>
          </label>
          <h3>$ 0.99</h3>
        </section>
        <section>
          <label> <input type="radio" />
            Get 27 July 2020 till 6pm
             <p>Standard</p>
          </label>
          <h3>$ 1.00</h3>
        </section>
        <section>

          <label> <input type="radio" />
            Get today till 8pm
             <p>Only on working days from 11am to 8pm</p>
          </label>
          <h3>$ 1.00</h3>
        </section>


      </Footer>

    </Content>


  )
}