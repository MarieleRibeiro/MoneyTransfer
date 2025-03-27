import { useEffect, useState } from "react";
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
import 'antd/dist/reset.css';

import api from "../../services/api";
import create from "zustand";

import { key } from "../key";

const { Option } = Select;

export interface SelectItem {
  flag: string;
  id: string;
  label: string;
  value: string;
}

export const useStore = create<{
  count: number;
  payment: number;
  plan: string;
  date: string;
  from: string;
  to: string;
  result: number;
  inc: (number: number) => void;
  incPayment: (number: number) => void;
  changePlan: (plan: string) => void;
  changeDate: (date: string) => void;
  changeTo: (to: string) => void;
  changeFrom: (from: string) => void;
  changeResult: (from: number) => void;
}>((set) => ({
  count: 0,
  payment: 0,
  plan: "Express",
  date: "",
  from: "BRL",
  to: "USD",
  result: 0,
  // inc: (number: number) => set((state) => ({ count: state.count + number })),
  inc: (count: number) => set(() => ({ count })),
  incPayment: (payment: number) => set(() => ({ payment })),
  changePlan: (plan: string) => set(() => ({ plan })),
  changeDate: (date: string) => set(() => ({ date })),
  changeFrom: (from: string) => set(() => ({ from })),
  changeTo: (to: string) => set(() => ({ to })),
  changeResult: (result: number) => set(() => ({ result })),
}));

export const MainContainer = () => {
  // const count = useStore((state) => state.count);
  const plan = useStore((state) => state.plan);
  const payment = useStore((state) => state.payment);
  const to = useStore((state) => state.to);
  const from = useStore((state) => state.from);
  const globalResult = useStore((state) => state.result);


  const changePlan = useStore((state) => state.changePlan);
  const incPayment = useStore((state) => state.incPayment);
  const inc = useStore((state) => state.inc);
  const changeDate = useStore((state) => state.changeDate);
  const changeTo = useStore((state) => state.changeTo);
  const changeFrom = useStore((state) => state.changeFrom);
  const changeResult = useStore((state) => state.changeResult);

  const dateFormat = "DD MMM YYYY";

  function onSearch() { }

  const onChange = (e: RadioChangeEvent) => {
    changePlan(e.target.value);
  };

  const [currencies, setCurrencies] = useState<Array<SelectItem>>([]);

  useEffect(() => {
    api.get("currencies").then((response) => {
      setCurrencies(response.data);
    });
  }, []);

  useEffect(() => {
    const calcular = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${key}/latest/${from}`)
        const dados = await response.json()
        const taxa = dados.conversion_rates[to];
        var setResultado = payment * taxa;
        changeResult(setResultado);
      } catch (error) {
        console.log(error)
      }
    }
    if (payment > 0) {
      calcular();
    }

  }, [from, to, payment, changeResult]);

  function onChangeCurrenciesInput(value: string | number | null | undefined) {
    inc(Number(value));
    incPayment(Number(value));
  }

  const swapCurrencies = () => {
    const currentFrom = from;
    const currentTo = to;
    
    changeFrom(currentTo);
    changeTo(currentFrom);
  };


 


  return (
    <Container>
      <Header>
        <Info>
          <h3>Send Money</h3>
        </Info>
      </Header>

      <MainContent>
        <From>
          <form>
            <label>From:</label>

            <Select
              style={{ width: 200 }}
              placeholder="Select a country"
              defaultValue="Select a country"
              onSearch={onSearch}
              bordered={false}
              value={from}
              onChange={(value) => {
                if (typeof value === "string") {
                  changeFrom(value);
                }
              }}
            >
              {currencies.map((currency) => (
                <Option key={currency?.id} value={currency?.value}>
                  <img
                    src={currency?.flag}
                    alt="flag"
                    width={20}
                    height={20}
                    style={{ margin: "0 10px 0 0" }}
                  />
                  {currency?.label}
                </Option>
              ))}
            </Select>
          </form>

          <Span>
            <p>You send</p>
            <InputNumber
              style={{ width: "100%" }}
              bordered={false}
              onChange={onChangeCurrenciesInput}
              step="0.01"
              value={payment.toFixed(2)}
              stringMode
            />
            <small>{from}</small>
          </Span>
        </From>

        <IconRefresh onClick={swapCurrencies}>
          <BiRefresh size={24} />
        </IconRefresh>

        <From>
          <form>
            <label> To:</label>
            <Select
              defaultValue="Select a country"
              style={{ width: 200 }}
              value={to}
              // optionFilterProp="country"
              onSearch={onSearch}
              bordered={false}
              onChange={(value) => {
                if (typeof value === "string") {
                  changeTo(value);
                }
              }}
            >
              {currencies.map((currency) => (
                <Option key={currency?.id} value={currency?.value}>
                  <img
                    src={currency?.flag}
                    alt="flag"
                    width={20}
                    height={20}
                    style={{ margin: "0 10px 0 0" }}
                  />
                  {currency?.label}
                </Option>
              ))}
            </Select>
          </form>
          <Span>
            <p>Recipient gets</p>
            <InputNumber
              style={{ width: "100%" }}
              value={globalResult.toFixed(2)}
              bordered={false}
              onChange={onChangeCurrenciesInput}
              step="0.01"
              stringMode
            />
            <small>{to}</small>
          </Span>
        </From>
      </MainContent>

      <Footer>
        <ChooseDate>
          Cloose a plan:
          <Space direction="vertical" size={22}>
            <DatePicker
              onChange={(value) => {
                const isoDate = value?.toISOString() || "";
                changeDate(isoDate);
              }}
              bordered={false}
              format={dateFormat}
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
            <Radio value={"Standard"}>
              Get 27 July 2020 till 6pm
              <small>Standard</small>
            </Radio>
            <h3>$ 1.00</h3>
          </LabelRadio>

          <LabelRadio>
            <Radio value={"Next week"}>
              Get Today till 8pm
              <small>Next week</small>
            </Radio>
            <h3>$ 1.00</h3>
          </LabelRadio>
        </Radio.Group>
      </Footer>
    </Container>
  );
};
