export const Signin = () => {
  return (
    <div className="h-screen w-screen flex flex-row justify-center gap-8">
      <div className="flex items-center justify-center w-[100%] bg-[url(https://picsum.photos/200/300/?blur=1)] bg-cover bg-center"></div>
      <div className="flex items-center justify-center w-screen px-4">
        <form action="" className="flex flex-col gap-4 w-full max-w-sm">
          <h2 className="text-4xl pb-8 text-center">Bem vindo de volta!</h2>
          <p className="text-gray-500">Para continuar conectado conosco</p>
          <p className="text-gray-500">por favor, faça login com suas informações pessoais</p>
          <input name="email" type="email" placeholder="Email" className="border text-black border-gray-300 rounded px-4 py-2" autoComplete="off"/>
          <input name="senha" type="password" placeholder="Senha" className="border text-black border-gray-300 rounded px-4 py-2 w-full"/>
          <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Entrar</button>
          <a href="/signin" className="text-blue-600 underline">Esqueceu senha?</a>
          <p>Não tem uma conta? <a href="/signup" className="text-blue-600 underline">Criar conta</a></p>
        </form>
      </div>
    </div>
  );
};

