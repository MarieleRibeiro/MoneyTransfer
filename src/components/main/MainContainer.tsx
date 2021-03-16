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
// import create from 'zustand'
import api from "../../services/api";
import create from "zustand";

const { Option } = Select;

export interface SelectItem {
  flag: string;
  id: string;
  label: string;
  value: string;
}

export const useStore = create<{
  count: number;
  plan: string;
  date: string;
  inc: (number: number) => void;
  changePlan: (plan: string) => void;
  changeDate: (plan: string) => void;
}>((set) => ({
  count: 0,
  plan: "Express",
  date: "",
  inc: (number: number) => set((state) => ({ count: state.count + number })),
  changePlan: (plan: string) => set(() => ({ plan })),
  changeDate: (date: string) => set(() => ({ date })),
}));

export const MainContainer = () => {
  const count = useStore((state) => state.count);
  const plan = useStore((state) => state.plan);
  const changePlan = useStore((state) => state.changePlan);
  const inc = useStore((state) => state.inc);
  const changeDate = useStore((state) => state.changeDate);

  function onSearch() {}

  const onChange = (e: RadioChangeEvent) => {
    console.log(e.target);
    changePlan(e.target.value);
  };

  const [currencies, setCurrencies] = useState<Array<SelectItem>>([]);

  useEffect(() => {
    api.get("currencies").then((response) => {
      setCurrencies(response.data);
    });
  }, []);

  function onChangeCurrenciesInput(value: string | number | null | undefined) {
    inc(Number(value));
  }

  return (
    <Container>
      <Header>
        <Info>
          <h3>Send Money</h3>
          <strong>
            {count} <small>available</small>
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
            <DatePicker
              onChange={(_e, dateString) => changeDate(dateString)}
              bordered={false}
            />
          </Space>
        </ChooseDate>

        <Radio.Group onChange={onChange} value={plan}>
          <LabelRadio>
            <Radio value={"Express"}>
              Get 27 July 2020 till 12pm
              <small>Express</small>
            </Radio>
            <h3>$ 0.99</h3>
          </LabelRadio>

          <LabelRadio>
            <Radio value={"Tomorrow"}>
              Get 27 July 2020 till 12pm
              <small>Tomorrow</small>
            </Radio>
            <h3>$ 0.99</h3>
          </LabelRadio>

          <LabelRadio>
            <Radio value={"Next week"}>
              Get 27 July 2020 till 12pm
              <small>Next week</small>
            </Radio>
            <h3>$ 0.99</h3>
          </LabelRadio>
        </Radio.Group>
      </Footer>
    </Container>
  );
};
