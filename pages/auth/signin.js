import { getProviders, signIn } from 'next-auth/react';

function signInPage({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

// server side rendering
export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}

export default signInPage