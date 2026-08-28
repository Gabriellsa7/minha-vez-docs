import React from 'react';
import Link from '@docusaurus/Link';

const personas = [
  {
    emoji: '🧑‍⚕️',
    title: 'Paciente',
    description: 'Buscar unidade, agendar exame e acompanhar a fila em tempo real pelo app.',
    to: '/app/primeiros-passos',
  },
  {
    emoji: '🛠️',
    title: 'Administrador',
    description: 'Gerenciar a unidade, exames, profissionais e recepcionistas no Manager.',
    to: '/manager/admin/primeiros-passos',
  },
  {
    emoji: '🩺',
    title: 'Médico',
    description: 'Conduzir a fila de atendimento e o histórico de exames dos pacientes.',
    to: '/manager/medico/primeiros-passos',
  },
  {
    emoji: '🗓️',
    title: 'Recepção',
    description: 'Marcar consultas e exames e dar entrada nos pacientes do dia.',
    to: '/manager/recepcionista/primeiros-passos',
  },
];

export default function PersonaCards() {
  return (
    <div className="tw-not-prose tw-mb-8 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4">
      {personas.map((persona) => (
        <Link
          key={persona.title}
          to={persona.to}
          className="tw-group tw-flex tw-flex-col tw-rounded-card tw-border tw-border-borderPrimary tw-bg-bgThird tw-p-5 tw-no-underline tw-shadow-card tw-transition hover:tw--translate-y-1 hover:tw-shadow-card-hover hover:tw-no-underline hover:tw-border-bgSecondary"
        >
          <span
            className="tw-mb-3 tw-flex tw-h-11 tw-w-11 tw-items-center tw-justify-center tw-rounded-full tw-text-xl"
            style={{backgroundColor: 'var(--mv-info-bg)'}}
          >
            {persona.emoji}
          </span>
          <span className="tw-mb-1 tw-text-base tw-font-semibold tw-text-textBlack">
            {persona.title}
          </span>
          <span className="tw-text-sm tw-leading-snug tw-text-textFifth tw-opacity-80">
            {persona.description}
          </span>
          <span className="tw-mt-3 tw-text-sm tw-font-medium tw-text-bgSecondary tw-transition group-hover:tw-translate-x-0.5">
            Ver manual →
          </span>
        </Link>
      ))}
    </div>
  );
}
