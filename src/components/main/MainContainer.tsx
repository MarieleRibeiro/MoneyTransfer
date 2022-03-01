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
import "antd/dist/antd.css";
import api from "../../services/api";
import create from "zustand";
import { convert } from "cashify";

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
  to: "EUR",
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
  const count = useStore((state) => state.count);
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

  const dateFormat = "D MMM hha";
  function onSearch() {}

  const onChange = (e: RadioChangeEvent) => {
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
    incPayment(Number(value));
  }

  const rates = {
    CAD: 1.4824,
    HKD: 9.2493,
    ISK: 151.6,
    PHP: 57.997,
    DKK: 7.436,
    HUF: 368.18,
    CZK: 26.17,
    AUD: 1.5347,
    RON: 4.8858,
    SEK: 10.157,
    IDR: 17165.19,
    INR: 86.6105,
    BRL: 6.6225,
    RUB: 88.1313,
    HRK: 7.575,
    JPY: 130.08,
    THB: 36.772,
    CHF: 1.1069,
    SGD: 1.6013,
    PLN: 4.6253,
    BGN: 1.9558,
    TRY: 8.7701,
    CNY: 7.7507,
    NOK: 10.1058,
    NZD: 1.6567,
    ZAR: 17.6202,
    USD: 1.1912,
    MXN: 24.5306,
    ILS: 3.929,
    GBP: 0.85575,
    KRW: 1343.25,
    MYR: 4.8976,
  };

  const result = convert(payment, {
    from,
    to,
    base: "EUR",
    rates,
  });
  useEffect(() => {
    changeResult(result);
  }, [result, changeResult]);

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

        <IconRefresh>
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
              // onChange={onChangeCurrenciesInput}
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
