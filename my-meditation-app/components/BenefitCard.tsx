import { ReactNode } from 'react';

export default function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-lightBackground dark:bg-darkBackground p-6 rounded-lg shadow-lg text-center">
      <div className="mb-4 text-primary dark:text-secondary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-lightText dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
