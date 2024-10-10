export const metadata = {
  title: 'Contato - Meditação Moderna',
  description:
    'Entre em contato conosco para saber mais sobre nossos serviços.',
};

export default function Contato() {
  return (
    <div className="container mx-auto py-40 px-4 lg:px-8 ">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Contato
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        Se você tiver alguma dúvida ou quiser nos enviar uma mensagem, preencha
        o formulário abaixo.
      </p>
      <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Nome
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md"
            placeholder="Seu nome"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md"
            placeholder="Seu email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Mensagem
          </label>
          <textarea
            className="w-full border border-gray-300 dark:border-gray-600 p-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md"
            rows={4}
            placeholder="Sua mensagem"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-3 font-semibold hover:bg-blue-700 transition rounded-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
