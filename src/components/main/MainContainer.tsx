import { Container, Header, Info, MainContent, From, Span, IconRefresh, Footer, ChooseDate } from '../main/styles'
import { BiRefresh } from 'react-icons/bi'
import { FiCalendar } from 'react-icons/fi'
import { Select, Radio, RadioChangeEvent } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const { Option } = Select;



export const MainContainer = () => {

  function onFocus() { };
  function onBlur() { };
  function onSearch() { };

  const [value, setValue] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Container>


      <Header>
        <Info>
          <h3>Send Money</h3>
          <strong>22,124 <small>available</small></strong>
        </Info>
      </Header>

      <MainContent>
        <From>
          <form>
            <h5>From:</h5>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a country"
              optionFilterProp="country"
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
            >
              <Option value="brazil"> Brazil</Option>
              <Option value="germany">Germany</Option>

            </Select>
          </form>

          <Span>
            <p>You send</p>
            <h1>22,124 <small>BRL</small></h1>
          </Span>
        </From>

        <IconRefresh>
          <BiRefresh size={24} />
        </IconRefresh>

        <From>
          <form>
            <h5> To:</h5>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a country"
              optionFilterProp="country"
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
            >
              <Option value="brazil">Brazil</Option>
              <Option value="germany">  Germany</Option>

            </Select>
          </form>
          <Span>
            <p>Recipient gets</p>
            <h1>4,124 <small>EUR</small></h1>
          </Span>
        </From>
      </MainContent>

      <Footer>
        <ChooseDate>
          <h2>Choose a plan:</h2>
          <p>Choose the date:  <FiCalendar size={18} /> </p>
        </ChooseDate>
        <section>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}><label >
              Get 27 July 2020 till 12pm
              <p>Express</p>
            </label>
              <h3>$ 0.99</h3>
            </Radio>

            <Radio value={2}> <label>
              Get 27 July 2020 till 6pm
             <p>Standard</p>
            </label>
              <h3>$ 1.00</h3>
            </Radio>

            <Radio value={3}>
              <label>
                Get today till 8pm
             <p>Only on working days from 11am to 8pm</p>
              </label>
              <h3>$ 1.00</h3>
            </Radio>
          </Radio.Group>
        </section>

      </Footer>
    </Container>


  )
}