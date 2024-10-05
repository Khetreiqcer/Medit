export default function Newsletter() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Inscreva-se na nossa Newsletter
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Receba dicas e atualizações sobre meditação diretamente no seu email.
        </p>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="bg-black dark:bg-gray-700 text-white dark:text-gray-300 px-6 py-2 font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 w-full"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </div>
  );
}
