import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function Hero() {
  return (
    <div
      className="tw-relative tw-overflow-hidden tw-rounded-card tw-mb-10 tw-px-6 tw-py-12 sm:tw-px-12 sm:tw-py-16 tw-text-center"
      style={{
        background:
          'linear-gradient(135deg, var(--mv-bg-secondary) 0%, var(--mv-bg-fourth) 100%)',
      }}
    >
      <div
        className="tw-pointer-events-none tw-absolute tw-inset-0 tw-opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, #ffffff 0%, transparent 35%), radial-gradient(circle at 85% 80%, #ffffff 0%, transparent 40%)',
        }}
      />

      <img
        src={useBaseUrl('/img/logo.png')}
        alt="Minha Vez"
        className="tw-relative tw-mx-auto tw-mb-5 tw-h-16 tw-w-16 tw-rounded-2xl tw-shadow-card"
      />

      <h1 className="tw-relative tw-mb-3 tw-text-3xl sm:tw-text-4xl tw-font-bold tw-text-white">
        Documentação do Minha Vez
      </h1>
      <p className="tw-relative tw-mx-auto tw-mb-8 tw-max-w-xl tw-text-base sm:tw-text-lg tw-text-white/85">
        Chega de fila. Aprenda a usar o app do paciente e o painel Manager,
        passo a passo.
      </p>

      <div className="tw-relative tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-3">
        <Link
          to="/app/primeiros-passos"
          className="tw-rounded-full tw-bg-white tw-px-5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-bgFourth tw-no-underline tw-transition hover:tw--translate-y-0.5 hover:tw-shadow-card hover:tw-no-underline hover:tw-text-bgFourth"
        >
          📱 Manual do App
        </Link>
        <Link
          to="/manager/admin/primeiros-passos"
          className="tw-rounded-full tw-border tw-border-white/60 tw-px-5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-no-underline tw-transition hover:tw--translate-y-0.5 hover:tw-border-white hover:tw-bg-white/10 hover:tw-no-underline hover:tw-text-white"
        >
          🖥️ Manual do Manager
        </Link>
      </div>
    </div>
  );
}
