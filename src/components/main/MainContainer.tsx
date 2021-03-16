import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Info,
  MainContent,
  From,
  Span,
  IconRefresh,
  Footer,
  ChooseDate,
  LabelRadio,
} from "../main/styles";
import { BiRefresh } from "react-icons/bi";
import {
  Select,
  Radio,
  RadioChangeEvent,
  DatePicker,
  Space,
  InputNumber,
} from "antd";
import "antd/dist/antd.css";
import api from "../../services/api";

const { Option } = Select;
export interface SelectItem {
  flag: string;
  id: string;
  label: string;
  value: string;
}

export const MainContainer = () => {
  function onSearch() {}

  const [value, setValue] = React.useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const [currencies, setCurrencies] = useState<Array<SelectItem>>([]);

  useEffect(() => {
    api.get("currencies").then((response) => {
      setCurrencies(response.data);
    });
  }, []);

  function onChangeCurrenciesInput(value: string | number | null | undefined) {}

  return (
    <Container>
      <Header>
        <Info>
          <h3>Send Money</h3>
          <strong>
            22,124 <small>available</small>
          </strong>
        </Info>
      </Header>

      <MainContent>
        <From>
          <form>
            <label>From:</label>

            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a country"
              onSearch={onSearch}
              bordered={false}
            >
              {currencies.map((currency) => (
                <Option key={currency.id} value={currency.value}>
                  <img src={currency.flag} alt="flag" width={20} height={20} />
                  {currency.label}
                </Option>
              ))}
            </Select>
          </form>

          <Span>
            <p>You send</p>
            <InputNumber
              style={{ width: 150 }}
              min={0}
              max={100000}
              defaultValue={0}
              bordered={false}
              onChange={onChangeCurrenciesInput}
              step="0.01"
              stringMode
            />
            <small>BRL</small>
          </Span>
        </From>

        <IconRefresh>
          <BiRefresh size={24} />
        </IconRefresh>

        <From>
          <form>
            <label> To:</label>
            <Select
              // showSearch
              style={{ width: 200 }}
              placeholder="Select a country"
              // optionFilterProp="country"
              onSearch={onSearch}
              bordered={false}
            >
              {currencies.map((currency) => (
                <Option key={currency.id} value={currency.value}>
                  <img src={currency.flag} alt="flag" width={20} height={20} />
                  {currency.label}
                </Option>
              ))}
            </Select>
          </form>
          <Span>
            <p>Recipient gets</p>
            <InputNumber
              style={{ width: 200 }}
              min={0}
              max={100000}
              defaultValue={0}
              bordered={false}
              onChange={onChangeCurrenciesInput}
              step="0.01"
              stringMode
            />
            <small>EUR</small>
          </Span>
        </From>
      </MainContent>

      <Footer>
        <ChooseDate>
          Cloose a plan:
          <Space direction="vertical" size={22}>
            <DatePicker bordered={false} />
          </Space>
        </ChooseDate>

        <Radio.Group onChange={onChange} value={value}>
          <LabelRadio>
            <Radio value={1}>
              Get 27 July 2020 till 12pm
              <small>Express</small>
            </Radio>
            <h3>$ 0.99</h3>
          </LabelRadio>

          <LabelRadio>
            <Radio value={2}>
              Get 27 July 2020 till 12pm
              <small>Express</small>
            </Radio>
            <h3>$ 0.99</h3>
          </LabelRadio>

          <LabelRadio>
            <Radio value={3}>
              Get 27 July 2020 till 12pm
              <small>Express</small>
            </Radio>
            <h3>$ 0.99</h3>
          </LabelRadio>
        </Radio.Group>
      </Footer>
    </Container>
  );
};
