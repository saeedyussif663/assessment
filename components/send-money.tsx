'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import Rounded from './rounded';

export default function SendMoney() {
  const [sendAmount, setSendAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [fee, setFee] = useState(0);
  const [totalToPay, setTotalToPay] = useState('');

  // Exchange rate
  const exchangeRate = 20.08;

  // Fee rate
  const feeRate = 0.01;

  // Fee calculation
  useEffect(() => {
    if (sendAmount && !isNaN(parseFloat(sendAmount))) {
      const sendValue = parseFloat(sendAmount);

      const calculatedFee = sendValue * feeRate;
      setFee(calculatedFee);

      const amountToReceive = sendValue * exchangeRate;
      setReceiveAmount(amountToReceive.toFixed(2));

      const total = sendValue + calculatedFee;
      setTotalToPay(total.toFixed(2));
    } else {
      setReceiveAmount('');
      setFee(0);
      setTotalToPay('');
    }
  }, [sendAmount]);

  const handleSendAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSendAmount(e.target.value);
  };

  return (
    <section className="w-full space-y-10 mt-10 px-6" id="send_money">
      <h3 className="text-3xl w-full md:text-[40px] font-medium md:text-center mx-auto max-w-[943px] text-[#0D2C65]">
        We are on a mission to reduce the cost of sending money to Africa at an
        average cost of 1%
      </h3>

      <article className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8">
        <div className="md:min-w-[444px] xl:w-[45%] space-y-6 ">
          <div className="space-y-12 relative">
            <div className="w-full relative">
              <label
                htmlFor="you_send"
                id="you_send"
                className="absolute text-[10px] text-[#8C8C8C] bg-white px-1 -top-1.5 left-5"
              >
                You send
              </label>
              <input
                type="number"
                name="you_send"
                value={sendAmount}
                onChange={handleSendAmountChange}
                className="w-full border border-[#D1D1D1] rounded-lg px-4 py-2 focus:outline-none text-[#0D2C65] font-medium text-lg"
                placeholder="00.00"
              />

              <div className="h-full right-0 top-0 flex items-center gap-1 justify-center w-[100px] absolute rounded-e-lg bg-[#233375]">
                <Image
                  src={'/uk_flag.png'}
                  alt="uk_flag"
                  width={30}
                  height={22}
                  style={{ width: 'auto', height: 'auto' }}
                />

                <p className="text-sm text-white">GBP</p>
              </div>
            </div>

            {/* line */}
            <div className="absolute h-12 w-0.5 bg-[#D1D1D1] top-[46px] left-7"></div>

            {/* rounded */}
            <Rounded fee={fee} />

            <div className="w-full relative">
              <label
                htmlFor="you_recieve"
                id="you_recieve"
                className="absolute text-[10px] text-[#8C8C8C] bg-white px-1 -top-1.5 left-5"
              >
                Recipient Gets
              </label>
              <input
                type="number"
                name="you_recieve"
                value={receiveAmount}
                readOnly
                className="w-full border border-[#D1D1D1] rounded-lg px-4 py-2 focus:outline-none text-[#0D2C65] font-medium text-lg"
                placeholder="00.00"
              />

              <div className="h-full right-0 top-0 flex items-center gap-1 justify-center w-[100px] absolute rounded-e-lg bg-[#233375]">
                <Image
                  src={'/ghana_flag.png'}
                  alt="ghana_flag"
                  width={30}
                  height={22}
                  style={{ width: 'auto', height: 'auto' }}
                />

                <p className="text-sm text-white">GHS</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* amount and total */}
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[#6F6F6F] text-sm">Amount we'll convert</p>

                <p className="text-lg text-[#0D2C65]">
                  {sendAmount
                    ? `${parseFloat(sendAmount).toFixed(2)} GBP`
                    : '0.00 GBP'}
                </p>
              </div>

              <div>
                <p className="text-[#6F6F6F] text-sm">Total to Pay</p>

                <p className="text-lg text-[#0D2C65]">
                  {totalToPay
                    ? `${parseFloat(totalToPay).toLocaleString()} GBP`
                    : '0.00 GBP'}
                </p>
              </div>
            </div>

            {/* fee and duration */}
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-[#6F6F6F] text-sm gap-2 flex items-center">
                  <Clock size={14} color="#23CE6B" /> Guaranteed rate (1 hrs)
                </p>

                <p className="text-lg text-[#0D2C65]">
                  £1 = GHS{exchangeRate.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-[#6F6F6F] text-sm">Fee (1%)</p>

                <p className="text-lg text-[#0D2C65]">
                  {fee ? `${fee.toFixed(2)} GBP` : '0.00 GBP'}
                </p>
              </div>
            </div>
          </div>

          <button className="bg-[#233375] w-full py-3 px-6 rounded-[5px] text-white font-medium">
            Get started for free
          </button>

          <p className="mt-6 text-[#6E80A3] text-lg md:hidden">
            Bomba provides you the luxury of sending money at rates that suit
            you. You can easily send and swap money between{' '}
            <span className="text-[#0D2C65]">GBP, USD, NGN</span> and up to 20
            other African countries using Bomba's '
            <span className="text-[#63C57B]">Swap</span>' and '
            <span className="text-[#63C57B]">Express</span>' services. Beat bank
            rates, save time and gain more.
          </p>
        </div>

        <div className="xl:w-[45%]">
          <p className="text-2xl text-[#6E80A3]">Why Bomba?</p>

          <h5 className="mt-2 text-4xl md:text-[64px] font-medium text-[#0D2C65] ">
            Send & Receive money on your own terms
          </h5>

          <p className="mt-6 text-[#6E80A3] text-lg hidden md:block">
            Bomba provides you the luxury of sending money at rates that suit
            you. You can easily send and swap money between{' '}
            <span className="text-[#0D2C65]">GBP, USD, NGN</span> and up to 20
            other African countries using Bomba's '
            <span className="text-[#63C57B]">Swap</span>' and '
            <span className="text-[#63C57B]">Express</span>' services. Beat bank
            rates, save time and gain more.
          </p>
        </div>
      </article>
    </section>
  );
}
