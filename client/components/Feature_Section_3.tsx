import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
type Props = {};

function Feature_Section_3({}: Props) {
  return (
    <>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="lg:grid lg:grid-cols-2 flex flex-col gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-800 leading-10 font-bold lg:text-4xl dark:text-white">
              We support many payment methods in the world
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              Send and receive money using various payment method
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500">
              Learn more
              <svg
                className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            <Marquee>
              <Image
                alt="payment method Alipay"
                width={96}
                height={96}
                src="/payment-method-logos/Alipay.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method AmazonPay"
                width={96}
                height={96}
                src="/payment-method-logos/AmazonPay.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Amex"
                width={96}
                height={96}
                src="/payment-method-logos/Amex.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method ApplePay"
                width={96}
                height={96}
                src="/payment-method-logos/ApplePay.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Bitcoin"
                width={96}
                height={96}
                src="/payment-method-logos/Bitcoin.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method BitcoinCash"
                width={96}
                height={96}
                src="/payment-method-logos/BitcoinCash.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method DinersClub"
                width={96}
                height={96}
                src="/payment-method-logos/DinersClub.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Discover"
                width={96}
                height={96}
                src="/payment-method-logos/Discover.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Etherium"
                width={96}
                height={96}
                src="/payment-method-logos/Etherium.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method GooglePay"
                width={96}
                height={96}
                src="/payment-method-logos/GooglePay.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method JCB"
                width={96}
                height={96}
                src="/payment-method-logos/JCB.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Lightcoin"
                width={96}
                height={96}
                src="/payment-method-logos/Lightcoin.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Maestro"
                width={96}
                height={96}
                src="/payment-method-logos/Maestro.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Mastercard"
                width={96}
                height={96}
                src="/payment-method-logos/Mastercard.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method PayPal"
                width={96}
                height={96}
                src="/payment-method-logos/PayPal.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Qiwi"
                width={96}
                height={96}
                src="/payment-method-logos/Qiwi.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method UnionPay"
                width={96}
                height={96}
                src="/payment-method-logos/UnionPay.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Visa"
                width={96}
                height={96}
                src="/payment-method-logos/Visa.svg"
                className="w-[96px] h-[96px] mr-4"
              />
              <Image
                alt="payment method Yandex"
                width={96}
                height={96}
                src="/payment-method-logos/Yandex.svg"
                className="w-[96px] h-[96px] mr-4"
              />
            </Marquee>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}

export default Feature_Section_3;
