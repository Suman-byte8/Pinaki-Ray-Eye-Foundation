import React from 'react';

export const metadata = {
  title: 'Cancellation & Refund Policy | Pinaki Ray Eye Foundation',
  description: 'Cancellation and refund policy for online payments made through Pinaki Ray Eye Foundation website.',
};

export default function CancellationRefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-[220px] pb-24">
        <div className="bg-white shadow-xl rounded-3xl border border-slate-200 overflow-hidden">
          <div className="bg-[#2f307b] text-white px-6 py-16 sm:px-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f59e0b] font-semibold mb-4">Cancellation & Refund Policy</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Cancellation & Refund Policy
            </h1>
          </div>

          <div className="px-6 py-10 sm:px-10 sm:py-12 space-y-10 text-slate-900">
            <section className="space-y-4">
              <p>
                1. The Website provide you the ability to pay online through a third-party payment gateway for some of the Services available on the Website.
              </p>
              <p>
                2. If you choose to pay online, you may be directed to a third-party payment gateway to enable processing of the payment. This transaction will be governed by the terms and conditions and privacy policy of the third-party payment gateway. Fortis shall not be liable.
              </p>
              <p>
                if any transaction does not fructify or may not be completed or for any failure on part of the bank or the credit card or the third-party site or agency to perform any of its obligations or in respect of any loss or damage arising directly or indirectly arising out of the decline or acceptance of authorization for any transaction, for any reason whatsoever.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Cancellation and Refund Policy:</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-900">
                <li>Full refund will be credited to the account making payment before scheduled appointment time in case of cancellation.</li>
                <li>No refund will be made on missing the appointment or past appointment time.</li>
                <li>Rescheduling can be done by calling the hospital before appointment time subject to availability of doctor and slots. Rescheduling will not be entertained after missing the appointment.</li>
                <li>Call the hospital directly in case of any queries regarding payment at +91 8001192095.</li>
                <li>The cancellation and refund policy is only applicable to all online payments made through website for booking appointments.</li>
                <li>At the time of cancellation, amount will be refunded via same source of payment and will be subject to the payment terms of the source only. Amount will be refunded within 7 working days.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
