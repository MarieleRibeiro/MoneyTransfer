import { useEffect, useState } from "react";
import {
  Container,
  Header,
  Info,
  MainContent,
  From,
  CurrencyCard,
  AmountBox,
  AmountLabel,
  SwapButton,
  ExchangeRate,
  Footer,
  ChooseDate,
  LabelRadio,
  SectionTitle,
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
import dayjs from "dayjs";

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
  payment: number;
  plan: string;
  date: string;
  from: string;
  to: string;
  result: number;
  rate: number | null;
  inc: (number: number) => void;
  incPayment: (number: number) => void;
  changePlan: (plan: string) => void;
  changeDate: (date: string) => void;
  changeTo: (to: string) => void;
  changeFrom: (from: string) => void;
  changeResult: (from: number) => void;
  changeRate: (rate: number | null) => void;
}>((set) => ({
  count: 0,
  payment: 0,
  plan: "Express",
  date: "",
  from: "BRL",
  to: "USD",
  result: 0,
  rate: null,
  inc: (count: number) => set(() => ({ count })),
  incPayment: (payment: number) => set(() => ({ payment })),
  changePlan: (plan: string) => set(() => ({ plan })),
  changeDate: (date: string) => set(() => ({ date })),
  changeFrom: (from: string) => set(() => ({ from })),
  changeTo: (to: string) => set(() => ({ to })),
  changeResult: (result: number) => set(() => ({ result })),
  changeRate: (rate: number | null) => set(() => ({ rate })),
}));

const planOptions = [
  {
    value: "Express",
    name: "Express",
    description: "Arrives within 2 hours",
    price: "$ 0.99",
    dateLabel: () => {
      const d = dayjs().add(2, "hour");
      return `Today, ${d.format("HH:mm")}`;
    },
  },
  {
    value: "Standard",
    name: "Standard",
    description: "Arrives by end of day",
    price: "$ 0.49",
    dateLabel: () => {
      const d = dayjs().endOf("day");
      return `Today, ${d.format("HH:mm")}`;
    },
  },
  {
    value: "Next Day",
    name: "Next Day",
    description: "Arrives tomorrow",
    price: "Free",
    dateLabel: () => {
      const d = dayjs().add(1, "day");
      return `${d.format("ddd, DD MMM")}`;
    },
  },
];

export const MainContainer = () => {
  const plan = useStore((state) => state.plan);
  const payment = useStore((state) => state.payment);
  const to = useStore((state) => state.to);
  const from = useStore((state) => state.from);
  const globalResult = useStore((state) => state.result);

  const changePlan = useStore((state) => state.changePlan);
  const incPayment = useStore((state) => state.incPayment);
  const changeDate = useStore((state) => state.changeDate);
  const changeTo = useStore((state) => state.changeTo);
  const changeFrom = useStore((state) => state.changeFrom);
  const changeResult = useStore((state) => state.changeResult);
  const changeRate = useStore((state) => state.changeRate);

  const dateFormat = "DD MMM YYYY";
  const [currencies, setCurrencies] = useState<Array<SelectItem>>([]);
  const [liveRate, setLiveRate] = useState<number | null>(null);

  function onSearch() {}

  const onChange = (e: RadioChangeEvent) => {
    changePlan(e.target.value);
  };

  useEffect(() => {
    api.get("currencies").then((response) => {
      setCurrencies(response.data);
    });
  }, []);

  useEffect(() => {
    const calcular = async () => {
      try {
        if (from === to) {
          setLiveRate(1);
          changeRate(1);
          changeResult(payment);
          return;
        }

        const response = await fetch(
          `https://api.frankfurter.dev/v1/latest?from=${from}&to=${to}`
        );

        if (!response.ok) {
          // Fallback if currency is not supported (e.g. RUB, HRK)
          setLiveRate(null);
          changeRate(null);
          return;
        }

        const dados = await response.json();
        const taxa = dados.rates[to];
        setLiveRate(taxa);
        changeRate(taxa);
        const resultado = payment * taxa;
        changeResult(resultado);
      } catch (error) {
        console.log("Error fetching rates:", error);
        setLiveRate(null);
        changeRate(null);
      }
    };
    calcular();
  }, [from, to, payment, changeResult, changeRate]);

  function onChangeCurrenciesInput(value: string | number | null | undefined) {
    if (value === null || value === undefined) {
      incPayment(0);
      return;
    }
    const val = typeof value === "string" ? parseFloat(value) : value;
    if (!isNaN(val)) {
      incPayment(val);
    }
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
          <p className="subtitle">Fast, secure international transfers</p>
          {liveRate && (
            <ExchangeRate>
              <span className="rate-dot" />
              <span className="rate-label">Live rate:</span>
              <span className="rate-value">
                1 {from} = {liveRate.toFixed(4)} {to}
              </span>
            </ExchangeRate>
          )}
        </Info>
      </Header>

      <MainContent>
        <From>
          <span className="field-label">You send</span>
          <CurrencyCard>
            <form>
              <label style={{ display: "none" }}>From</label>
              <Select
                style={{ width: "100%" }}
                placeholder="Select currency"
                onSearch={onSearch}
                variant="borderless"
                value={from}
                onChange={(value) => {
                  if (typeof value === "string") changeFrom(value);
                }}
              >
                {currencies.map((currency) => (
                  <Option key={currency?.id} value={currency?.value}>
                    <img
                      src={currency?.flag}
                      alt="flag"
                      width={20}
                      height={14}
                      style={{ borderRadius: 3 }}
                    />
                    {currency?.label}
                  </Option>
                ))}
              </Select>
            </form>
            <AmountLabel>Amount</AmountLabel>
            <AmountBox>
              <InputNumber
                style={{ width: "100%" }}
                variant="borderless"
                onChange={onChangeCurrenciesInput}
                step="0.01"
                value={payment}
                placeholder="0.00"
              />
              <span className="currency-code">{from}</span>
            </AmountBox>
          </CurrencyCard>
        </From>

        <SwapButton onClick={swapCurrencies} title="Swap currencies">
          <BiRefresh size={22} />
        </SwapButton>

        <From>
          <span className="field-label">Recipient gets</span>
          <CurrencyCard>
            <form>
              <label style={{ display: "none" }}>To</label>
              <Select
                style={{ width: "100%" }}
                value={to}
                onSearch={onSearch}
                variant="borderless"
                onChange={(value) => {
                  if (typeof value === "string") changeTo(value);
                }}
              >
                {currencies.map((currency) => (
                  <Option key={currency?.id} value={currency?.value}>
                    <img
                      src={currency?.flag}
                      alt="flag"
                      width={20}
                      height={14}
                      style={{ borderRadius: 3 }}
                    />
                    {currency?.label}
                  </Option>
                ))}
              </Select>
            </form>
            <AmountLabel>Amount</AmountLabel>
            <AmountBox>
              <InputNumber
                style={{ width: "100%" }}
                value={globalResult.toFixed(2)}
                variant="borderless"
                readOnly
                step="0.01"
                stringMode
              />
              <span className="currency-code">{to}</span>
            </AmountBox>
          </CurrencyCard>
        </From>
      </MainContent>

      <Footer>
        <ChooseDate>
          <span className="date-label">Delivery date</span>
          <Space direction="vertical" size={12}>
            <DatePicker
              onChange={(value) => {
                const isoDate = value?.toISOString() || "";
                changeDate(isoDate);
              }}
              variant="borderless"
              format={dateFormat}
              placeholder="Select date"
            />
          </Space>
        </ChooseDate>

        <SectionTitle>Choose a plan</SectionTitle>

        <Radio.Group onChange={onChange} value={plan} style={{ width: "100%" }}>
          {planOptions.map((opt) => (
            <LabelRadio
              key={opt.value}
              $active={plan === opt.value}
              onClick={() => changePlan(opt.value)}
            >
              <label onClick={(e) => e.preventDefault()}>
                <Radio value={opt.value} />
                <div className="plan-info">
                  <span className="plan-name">{opt.name}</span>
                  <span className="plan-date">{opt.dateLabel()}</span>
                </div>
              </label>
              <span className="plan-price">{opt.price}</span>
            </LabelRadio>
          ))}
        </Radio.Group>
      </Footer>
    </Container>
  );
};
