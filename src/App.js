import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/github-provider';
import useGithub from "./hooks/github-hooks";
import NoSearch from './components/no-search';


const App = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ?
        <>
              {githubState.loading ? (
                <p>Carregando...</p>
                ) : (
                  <>
                  <Profile />
                  <Repositories />
                </>
              )}
        </>
        : <NoSearch />
      }
    </Layout>
    );
}

export default App;
