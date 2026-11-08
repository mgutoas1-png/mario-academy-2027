import React, { useState } from 'react';
import { GLOSSARIO, FERRAMENTAL, RECURSOS_AULAS } from '../data-glossario-ferramental';

export const GlossarioFerramental: React.FC = () => {
  const [aba, setAba] = useState<'glossario' | 'ferramental' | 'recursos'>('glossario');
  const [busca, setBusca] = useState('');

  // Filtrar glossário
  const termosFiltrados = GLOSSARIO.filter(t =>
    t.termo.toLowerCase().includes(busca.toLowerCase()) ||
    t.explicacao_crianca.toLowerCase().includes(busca.toLowerCase())
  );

  // Filtrar ferramental
  const ferramentalFiltrada = FERRAMENTAL.filter(f =>
    f.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="glossario-container">
      <div className="glossario-header">
        <h1>📚 GLOSSÁRIO + 🛠️ FERRAMENTAL</h1>
        <p>Tudo que você precisa entender ANTES de começar!</p>
      </div>

      {/* ABAS */}
      <div className="glossario-tabs">
        <button
          onClick={() => { setAba('glossario'); setBusca(''); }}
          className={`tab ${aba === 'glossario' ? 'ativo' : ''}`}
        >
          📖 GLOSSÁRIO
        </button>
        <button
          onClick={() => { setAba('ferramental'); setBusca(''); }}
          className={`tab ${aba === 'ferramental' ? 'ativo' : ''}`}
        >
          🛠️ FERRAMENTAL
        </button>
        <button
          onClick={() => { setAba('recursos'); setBusca(''); }}
          className={`tab ${aba === 'recursos' ? 'ativo' : ''}`}
        >
          📋 POR AULA
        </button>
      </div>

      {/* BUSCA */}
      <div className="glossario-search">
        <input
          type="text"
          placeholder="Buscar termo, ferramenta ou aula..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="search-input"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="glossario-content">
        {aba === 'glossario' && (
          <div className="glossario-lista">
            <h2>📚 GLOSSÁRIO — Explicações para Iniciante Total</h2>
            {termosFiltrados.length === 0 ? (
              <p className="sem-resultados">Nenhum termo encontrado</p>
            ) : (
              termosFiltrados.map((termo, idx) => (
                <div key={idx} className="termo-card">
                  <div className="termo-header">
                    <h3>{termo.termo}</h3>
                    <span className={`categoria categoria-${termo.categor}`}>
                      {termo.categor}
                    </span>
                  </div>

                  <div className="termo-corpo">
                    <div className="secao">
                      <h4>👶 Explicação (Criança de 5 anos):</h4>
                      <p className="explicacao">{termo.explicacao_crianca}</p>
                    </div>

                    <div className="secao">
                      <h4>🏠 Analogia do Cotidiano:</h4>
                      <pre className="analogia">{termo.analogia_cotidiana}</pre>
                    </div>

                    <div className="secao">
                      <h4>⏰ Quando Usar:</h4>
                      <p>{termo.quando_usar}</p>
                    </div>

                    {termo.exemplo_pratico && (
                      <div className="secao">
                        <h4>💡 Exemplo Prático:</h4>
                        <code className="exemplo">{termo.exemplo_pratico}</code>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {aba === 'ferramental' && (
          <div className="ferramental-lista">
            <h2>🛠️ FERRAMENTAL — O que Instalar</h2>
            {ferramentalFiltrada.length === 0 ? (
              <p className="sem-resultados">Nenhuma ferramenta encontrada</p>
            ) : (
              ferramentalFiltrada.map((ferr, idx) => (
                <div key={idx} className="ferramenta-card">
                  <div className="ferramenta-header">
                    <h3>{ferr.nome}</h3>
                    <span className={`categoria categoria-${ferr.categoria}`}>
                      {ferr.categoria}
                    </span>
                  </div>

                  <div className="ferramenta-corpo">
                    <p className="descricao"><strong>Descrição:</strong> {ferr.descricao}</p>
                    <p className="para-que"><strong>Para que serve:</strong> {ferr.para_que_serve}</p>

                    {ferr.versao_minima && (
                      <p className="versao"><strong>Versão mínima:</strong> {ferr.versao_minima}</p>
                    )}

                    {ferr.tamanho_download && (
                      <p className="tamanho"><strong>Tamanho:</strong> {ferr.tamanho_download}</p>
                    )}

                    <div className="como-instalar">
                      <h4>📥 Como Instalar:</h4>
                      <ol>
                        {ferr.como_instalar.map((passo, pidx) => (
                          <li key={pidx}>{passo}</li>
                        ))}
                      </ol>
                    </div>

                    <a href={ferr.link_download} target="_blank" rel="noopener noreferrer" className="link-download">
                      🔗 Baixar {ferr.nome}
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {aba === 'recursos' && (
          <div className="recursos-lista">
            <h2>📋 O QUE PRECISA PARA CADA AULA</h2>
            {RECURSOS_AULAS.map((rec, idx) => (
              <div key={idx} className="recurso-card">
                <h3>{rec.aula_id.replace('-', ' ').toUpperCase()}</h3>

                <div className="recurso-secao">
                  <h4>🛠️ Ferramentas Necessárias:</h4>
                  <ul>
                    {rec.ferramentas_necessarias.map((f, fidx) => (
                      <li key={fidx}>✅ {f}</li>
                    ))}
                  </ul>
                </div>

                <div className="recurso-secao">
                  <h4>📖 Termos para Entender:</h4>
                  <ul>
                    {rec.termos_para_entender.map((t, tidx) => (
                      <li key={tidx}>💡 {t}</li>
                    ))}
                  </ul>
                </div>

                <div className="recurso-secao">
                  <h4>✅ Preparação ANTES de Começar:</h4>
                  <ul>
                    {rec.preparacao_antes_de_comecal.map((p, pidx) => (
                      <li key={pidx}>{p}</li>
                    ))}
                  </ul>
                </div>

                {rec.tempo_total_setup && (
                  <div className="tempo-setup">
                    <strong>⏱️ Tempo total de setup:</strong> {rec.tempo_total_setup}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RESUMO RÁPIDO */}
      <div className="resumo-rapido">
        <h3>📊 RESUMO RÁPIDO</h3>
        <pre className="resumo-content">
{`🛠️ FERRAMENTAL TOTAL

HOUSE CLEANERS (Python):
  Python 3.11+ ........................ 100 MB
  VSCode .............................. 100 MB
  Git .................................. 60 MB
  Navegador ........................... 200 MB
  Total: ~460 MB | Tempo: 30 min

ADMIN IMÓVEIS (Java):
  Java JDK 17+ ........................ 300 MB
  Maven ................................ 10 MB
  VSCode .............................. 100 MB
  Git .................................. 60 MB
  Navegador ........................... 200 MB
  Total: ~670 MB | Tempo: 45 min

SERVIÇOS PRO (React):
  Node.js ............................. 150 MB
  VSCode .............................. 100 MB
  Git .................................. 60 MB
  Navegador ........................... 200 MB
  Total: ~510 MB | Tempo: 30 min

ESCOLA X (React):
  Node.js ............................. 150 MB
  VSCode .............................. 100 MB
  Git .................................. 60 MB
  Navegador ........................... 200 MB
  Total: ~510 MB | Tempo: 30 min

=====================================
TOTAL TUDO = ~2 GB | Tempo: 2-3 horas
(só precisa fazer uma vez!)`}
        </pre>
      </div>

      <style>{`
        .glossario-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          border-radius: 15px;
        }

        .glossario-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .glossario-header h1 {
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .glossario-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .tab {
          padding: 0.75rem 1.5rem;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
          font-weight: 600;
        }

        .tab.ativo {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .tab:hover {
          border-color: #667eea;
        }

        .glossario-search {
          margin-bottom: 2rem;
          text-align: center;
        }

        .search-input {
          width: 100%;
          max-width: 500px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          transition: 0.3s;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .glossario-content {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .glossario-lista h2,
        .ferramental-lista h2,
        .recursos-lista h2 {
          color: #2c3e50;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #667eea;
          padding-bottom: 0.75rem;
        }

        .termo-card,
        .ferramenta-card,
        .recurso-card {
          background: #f8f9fa;
          border-left: 4px solid #667eea;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          border-radius: 8px;
        }

        .termo-header,
        .ferramenta-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .termo-header h3,
        .ferramenta-header h3 {
          margin: 0;
          color: #667eea;
        }

        .recurso-card h3 {
          color: #667eea;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .categoria {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .categoria-conceito {
          background: #e3f2fd;
          color: #1976d2;
        }

        .categoria-ferramenta {
          background: #f3e5f5;
          color: #7b1fa2;
        }

        .categoria-comando {
          background: #e8f5e9;
          color: #388e3c;
        }

        .categoria-linguagem {
          background: #fff3e0;
          color: #e65100;
        }

        .categoria-gerenciador {
          background: #fce4ec;
          color: #c2185b;
        }

        .categoria-editor {
          background: #e0f2f1;
          color: #00695c;
        }

        .categoria-outro {
          background: #f1f8e9;
          color: #558b2f;
        }

        .termo-corpo,
        .ferramenta-corpo {
          display: grid;
          gap: 1rem;
        }

        .secao h4 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
          font-weight: 600;
        }

        .secao p {
          margin: 0;
          line-height: 1.6;
          color: #555;
        }

        .analogia,
        .exemplo {
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 6px;
          overflow-x: auto;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #333;
          margin: 0;
        }

        .descricao,
        .para-que,
        .versao,
        .tamanho {
          margin: 0.5rem 0;
          color: #555;
        }

        .como-instalar {
          background: white;
          padding: 1rem;
          border-radius: 6px;
          margin: 1rem 0;
        }

        .como-instalar h4 {
          margin: 0 0 0.75rem 0;
          color: #2c3e50;
        }

        .como-instalar ol {
          margin: 0;
          padding-left: 1.5rem;
          color: #555;
        }

        .como-instalar li {
          margin: 0.5rem 0;
          line-height: 1.5;
        }

        .link-download {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.75rem 1.5rem;
          background: #667eea;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          transition: 0.3s;
          font-weight: 600;
        }

        .link-download:hover {
          background: #764ba2;
          transform: translateY(-2px);
        }

        .recurso-secao {
          margin: 1rem 0;
          padding: 1rem;
          background: white;
          border-radius: 6px;
        }

        .recurso-secao h4 {
          margin: 0 0 0.75rem 0;
          color: #2c3e50;
        }

        .recurso-secao ul {
          margin: 0;
          padding-left: 1.5rem;
          list-style: none;
        }

        .recurso-secao li {
          margin: 0.5rem 0;
          color: #555;
        }

        .tempo-setup {
          background: #e8f5e9;
          padding: 1rem;
          border-radius: 6px;
          color: #2e7d32;
          font-weight: 600;
          margin-top: 1rem;
        }

        .sem-resultados {
          text-align: center;
          padding: 2rem;
          color: #999;
          font-style: italic;
        }

        .resumo-rapido {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .resumo-rapido h3 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .resumo-content {
          background: #2c3e50;
          color: #0f0;
          padding: 1.5rem;
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          line-height: 1.6;
          overflow-x: auto;
          margin: 0;
        }

        @media (max-width: 768px) {
          .glossario-container {
            padding: 1rem;
          }

          .termo-header,
          .ferramenta-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .categoria {
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GlossarioFerramental;
