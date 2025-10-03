'use client'
import {
  Calculator,
  Calendar,
  IndianRupee,
  Percent
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ProgressworkProps {
  isColorMode: boolean
}

const Progresswork = ({ isColorMode }: ProgressworkProps) => {
  const [loanAmount, setLoanAmount] = useState<string>('250000')
  const [interestRate, setInterestRate] = useState<string>('6.5')
  const [loanTerm, setLoanTerm] = useState<string>('30')

  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalInterest: 0,
    totalAmount: 0,
    numberOfPayments: 0,
    principal: 0,
  })

  const parseNumber = (v: string) => {
    const cleaned = v.replace(/[^\d.]/g, '')
    const parts = cleaned.split('.')
    return parts.length <= 1
      ? cleaned
      : parts[0] + '.' + parts.slice(1).join('').slice(0, 6)
  }

  const calculateLoan = () => {
    const principal = Number.parseFloat(loanAmount) || 0
    const annualRate = Number.parseFloat(interestRate) || 0
    const years = Number.parseFloat(loanTerm) || 0

    if (principal <= 0 || annualRate < 0 || years <= 0) {
      setResults({
        monthlyPayment: 0,
        totalInterest: 0,
        totalAmount: 0,
        numberOfPayments: 0,
        principal,
      })
      return
    }

    const monthlyRate = annualRate / 100 / 12
    const numberOfPayments = Math.round(years * 12)

    let monthlyPayment = 0
    if (monthlyRate > 0) {
      const pow = Math.pow(1 + monthlyRate, numberOfPayments)
      monthlyPayment = (principal * monthlyRate * pow) / (pow - 1)
    } else {
      monthlyPayment = principal / numberOfPayments
    }

    const totalAmount = monthlyPayment * numberOfPayments
    const totalInterest = totalAmount - principal

    setResults({
      monthlyPayment,
      totalInterest,
      totalAmount,
      numberOfPayments,
      principal,
    })
  }

  useEffect(() => {
    calculateLoan()
  }, [loanAmount, interestRate, loanTerm])

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(isFinite(amount) ? amount : 0)

  const principalPct =
    results.totalAmount > 0 ? (results.principal / results.totalAmount) * 100 : 0
  const interestPct =
    results.totalAmount > 0 ? (results.totalInterest / results.totalAmount) * 100 : 0

  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 items-center gap-7">
          {/* Left image */}
          <div className="md:col-span-6">
            <Image
              src="/images/work-progress/progress-work.png"
              alt="progress illustration"
              width={375}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className="md:block hidden"
            />
          </div>

          {/* Right content */}
          <div
            className="md:col-span-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full bg-success" />
              <span className="font-medium text-midnight_text text-sm dark:text-white/50">
                Payment Results
              </span>
            </div>

            <h2 className="pt-9 pb-4 text-midnight_text font-bold dark:text-white text-4xl">
              Loan, Calculator
            </h2>

            <p className="text-gray dark:text-white/70 text-base font-semibold">
              Estimate monthly payments and see how much goes to principal vs interest.
            </p>

            {/* --- Results area --- */}
            <div className="block mx-auto pt-8">
              {/* Monthly Payment card */}
              <div className="mb-6 bg-gradient-to-r from-[#164069] to-[#13C8EC] text-white rounded-lg p-4 shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Monthly Payment</div>
                    <div className="text-2xl font-bold mt-1">
                      {formatCurrency(results.monthlyPayment)}
                    </div>
                    <div className="text-xs opacity-80 mt-1">Principal & Interest</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="flex items-center gap-2">
                      <Calculator className="w-6 h-6 opacity-90" />
                    </div>
                    <div className="text-[10px] opacity-80 mt-2">
                      {results.numberOfPayments} payments
                    </div>
                  </div>
                </div>
              </div>

              {/* Principal vs Interest progress bars */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-normal text-grey dark:text-white/50">Principal</div>
                  <div className="text-sm font-medium text-midnight_text dark:text-white">
                    {formatCurrency(results.principal)} • {principalPct.toFixed(1)}%
                  </div>
                </div>
                <div className="relative h-2 w-full bg-primary/20 rounded-md">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-primary rounded-md"
                    style={{ width: `${Math.min(Math.max(principalPct, 0), 100)}%` }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-normal text-grey dark:text-white/50">Interest</div>
                  <div className="text-sm font-medium text-red-600">
                    {formatCurrency(results.totalInterest)} • {interestPct.toFixed(1)}%
                  </div>
                </div>
                <div className="relative h-2 w-full bg-red-100 rounded-md">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-red-600 rounded-md"
                    style={{ width: `${Math.min(Math.max(interestPct, 0), 100)}%` }}
                  />
                </div>
              </div>

              {/* Total Amount bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-normal text-grey dark:text-white/50">Total Amount</div>
                  <div className="text-sm font-medium text-midnight_text dark:text-white">
                    {formatCurrency(results.totalAmount)}
                  </div>
                </div>
                <div className="relative h-2 w-full bg-green-100 rounded-md">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-green-600 rounded-md"
                    style={{ width: `100%` }}
                  />
                </div>
              </div>

              {/* Detail rows */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-md bg-gray-50 dark:bg-darkmode/60">
                  <div className="text-xs text-gray-500 dark:text-white/60">Principal</div>
                  <div className="font-medium mt-1">{formatCurrency(results.principal)}</div>
                </div>

                <div className="p-3 rounded-md bg-gray-50 dark:bg-darkmode/60">
                  <div className="text-xs text-gray-500 dark:text-white/60">Rate (APR)</div>
                  <div className="font-medium mt-1">{Number(interestRate) || 0}%</div>
                </div>

                <div className="p-3 rounded-md bg-gray-50 dark:bg-darkmode/60">
                  <div className="text-xs text-gray-500 dark:text-white/60">Term</div>
                  <div className="font-medium mt-1">{Number(loanTerm) || 0} years</div>
                </div>

                <div className="p-3 rounded-md bg-gray-50 dark:bg-darkmode/60">
                  <div className="text-xs text-gray-500 dark:text-white/60">Payments</div>
                  <div className="font-medium mt-1">{results.numberOfPayments}</div>
                </div>
              </div>
            </div>

            {/* Inputs */}
            <div className="mt-6 space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-white/60">
                Loan Amount
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  inputMode="decimal"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseNumber(e.target.value))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md dark:bg-darkmode dark:text-white outline-none"
                />
              </div>

              <label className="block text-sm font-medium text-gray-700 dark:text-white/60">
                Annual Interest Rate (%)
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  inputMode="decimal"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseNumber(e.target.value))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md dark:bg-darkmode dark:text-white outline-none"
                />
              </div>

              <label className="block text-sm font-medium text-gray-700 dark:text-white/60">
                Loan Term (Years)
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  inputMode="numeric"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(parseNumber(e.target.value))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md dark:bg-darkmode dark:text-white outline-none"
                />
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500 dark:text-white/50">
              <strong>Note:</strong> Estimates are for principal & interest only. Taxes, insurance and fees are not included.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Progresswork