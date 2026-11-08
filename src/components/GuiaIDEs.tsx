import React, { useState } from 'react';
import { GUIA_IDES } from '../data-guia-ides';

export const GuiaIDEs: React.FC = () => {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title}>💻 GUIA DE IDEs</h1>
          <p>Configure PyCharm, IntelliJ e VSCode para seus projetos</p>
        </div>

        {/* SELETOR DE IDE */}
        <div style={styles.selectorContainer}>
          <h2 style={styles.h2}>Escolha sua IDE:</h2>
          <div style={styles.buttonsGrid}>
            {GUIA_IDES.map((ide, idx) => (
              <button
                key={idx}
                onClick={() => setSelecionado(idx.toString())}
                style={{
                  ...styles.button,
                  ...(selecionado === idx.toString() ? styles.buttonAtivo : {})
                }}
              >
                <div style={styles.buttonTitle}>{ide.nome}</div>
                <div style={styles.buttonSub}>{ide.para}</div>
              </button>
            ))}
          </div>
        </div>

        {/* CONTEÚDO DA IDE SELECIONADA */}
        {selecionado !== null && (
          <div style={styles.conteudo}>
            {(() => {
              const ide = GUIA_IDES[parseInt(selecionado)];

              return (
                <div>
                  <h2 style={styles.h2}>{ide.nome}</h2>
                  <p style={styles.para}><strong>Para:</strong> {ide.para}</p>

                  {/* DOWNLOAD */}
                  <div style={styles.caixa}>
                    <h3 style={styles.h3}>📥 Download</h3>
                    <p><strong>Versão:</strong> {ide.versao}</p>
                    <p><strong>Tamanho:</strong> {ide.tamanho}</p>
                    <a href={ide.download_link} target="_blank" rel="noopener noreferrer" style={styles.linkDownload}>
                      🔗 Baixar {ide.nome}
                    </a>
                  </div>

                  {/* INSTALAÇÃO */}
                  <div style={styles.caixa}>
                    <h3 style={styles.h3}>📥 Passos de Instalação</h3>
                    <ol style={styles.ol}>
                      {ide.passos_instalacao.map((passo, pidx) => (
                        <li key={pidx} style={styles.li}>{passo}</li>
                      ))}
                    </ol>
                  </div>

                  {/* PRIMEIROS PASSOS */}
                  <div style={styles.caixa}>
                    <h3 style={styles.h3}>🚀 Primeiros Passos</h3>
                    <ol style={styles.ol}>
                      {ide.primeiros_passos.map((passo, pidx) => (
                        <li key={pidx} style={styles.li}>{passo}</li>
                      ))}
                    </ol>
                  </div>

                  {/* EXTENSÕES */}
                  {ide.extensoes_importantes && (
                    <div style={styles.caixa}>
                      <h3 style={styles.h3}>📦 Extensões Importantes</h3>
                      <ul style={styles.ul}>
                        {ide.extensoes_importantes.map((ext, eidx) => (
                          <li key={eidx} style={styles.li}>✨ {ext}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ATALHOS */}
                  {ide.atalhos_essenciais && (
                    <div style={styles.caixa}>
                      <h3 style={styles.h3}>⌨️ Atalhos Essenciais</h3>
                      <table style={styles.table}>
                        <tbody>
                          {ide.atalhos_essenciais.map((atalho, aidx) => (
                            <tr key={aidx} style={styles.tr}>
                              <td style={styles.td}>{atalho.comando}</td>
                              <td style={styles.tdTecla}>{atalho.tecla}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* TROUBLESHOOTING */}
                  <div style={styles.caixa}>
                    <h3 style={styles.h3}>🔧 Troubleshooting</h3>
                    <div style={styles.troubleshootingContainer}>
                      {ide.troubleshooting.map((item, tidx) => (
                        <div key={tidx} style={styles.troubleshootingItem}>
                          <p style={styles.problemaTitulo}>❌ {item.problema}</p>
                          <p style={styles.solucao}>✅ {item.solucao}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>
        )}

        {/* RESUMO SE NENHUMA SELECIONADA */}
        {selecionado === null && (
          <div style={styles.resumo}>
            <h2 style={styles.h2}>📚 Resumo Rápido</h2>
            <div style={styles.resumoGrid}>
              <div style={styles.resumoCard}>
                <h4 style={styles.h4}>🧹 House Cleaners</h4>
                <p><strong>IDE:</strong> PyCharm Community</p>
                <p><strong>Linguagem:</strong> Python 3.11+</p>
                <p><strong>Tamanho:</strong> ~500 MB</p>
                <p><strong>Tempo:</strong> 10 min</p>
              </div>

              <div style={styles.resumoCard}>
                <h4 style={styles.h4}>🏢 Admin Imóveis</h4>
                <p><strong>IDE:</strong> IntelliJ Community</p>
                <p><strong>Linguagem:</strong> Java 17+</p>
                <p><strong>Tamanho:</strong> ~700 MB</p>
                <p><strong>Tempo:</strong> 15 min</p>
              </div>

              <div style={styles.resumoCard}>
                <h4 style={styles.h4}>💈 & 🎓 React</h4>
                <p><strong>IDE:</strong> VSCode</p>
                <p><strong>Linguagem:</strong> TypeScript</p>
                <p><strong>Tamanho:</strong> ~100 MB</p>
                <p><strong>Tempo:</strong> 5 min</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

const styles = {
  wrapper: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    minHeight: '100vh',
    padding: '1rem',
  } as React.CSSProperties,

  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    overflow: 'hidden',
  } as React.CSSProperties,

  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '2rem',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  title: {
    fontSize: '2rem',
    margin: '0 0 0.5rem 0',
    fontWeight: 'bold' as const,
  } as React.CSSProperties,

  selectorContainer: {
    padding: '2rem',
    background: '#f5f7fa',
    borderBottom: '2px solid #e0e0e0',
  } as React.CSSProperties,

  h2: {
    color: '#667eea',
    margin: '0 0 1.5rem 0',
    fontWeight: 'bold' as const,
  } as React.CSSProperties,

  h3: {
    color: '#333',
    margin: '0 0 1rem 0',
    fontWeight: 600,
  } as React.CSSProperties,

  h4: {
    color: '#667eea',
    margin: '0 0 0.5rem 0',
  } as React.CSSProperties,

  para: {
    margin: '0.5rem 0',
    color: '#555',
  } as React.CSSProperties,

  buttonsGrid: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  } as React.CSSProperties,

  button: {
    padding: '1.5rem',
    background: 'white',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left' as const,
  } as React.CSSProperties,

  buttonAtivo: {
    background: '#667eea',
    color: 'white',
    borderColor: '#667eea',
  } as React.CSSProperties,

  buttonTitle: {
    fontWeight: 'bold' as const,
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  } as React.CSSProperties,

  buttonSub: {
    fontSize: '0.9rem',
    opacity: 0.8,
  } as React.CSSProperties,

  conteudo: {
    padding: '2rem',
  } as React.CSSProperties,

  caixa: {
    background: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    borderLeft: '4px solid #667eea',
  } as React.CSSProperties,

  ol: {
    margin: '1rem 0',
    paddingLeft: '2rem',
  } as React.CSSProperties,

  ul: {
    margin: '1rem 0',
    paddingLeft: '2rem',
    listStyle: 'none',
  } as React.CSSProperties,

  li: {
    margin: '0.6rem 0',
    color: '#555',
    lineHeight: 1.6,
  } as React.CSSProperties,

  linkDownload: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    background: '#667eea',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 600,
    transition: '0.3s',
  } as React.CSSProperties,

  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    margin: '1rem 0',
  } as React.CSSProperties,

  tr: {
    borderBottom: '1px solid #e0e0e0',
  } as React.CSSProperties,

  td: {
    padding: '0.75rem',
    color: '#555',
  } as React.CSSProperties,

  tdTecla: {
    padding: '0.75rem',
    color: '#555',
    fontFamily: '"Courier New", monospace',
    fontWeight: 'bold' as const,
    background: '#f0f0f0',
    borderRadius: '4px',
  } as React.CSSProperties,

  troubleshootingContainer: {
    display: 'grid' as const,
    gap: '1rem',
  } as React.CSSProperties,

  troubleshootingItem: {
    background: '#fff3e0',
    border: '2px solid #f57c00',
    borderRadius: '6px',
    padding: '1rem',
  } as React.CSSProperties,

  problemaTitulo: {
    margin: '0 0 0.5rem 0',
    color: '#e65100',
    fontWeight: 600,
  } as React.CSSProperties,

  solucao: {
    margin: 0,
    color: '#e65100',
  } as React.CSSProperties,

  pre: {
    background: '#2c3e50',
    color: '#0f0',
    padding: '1.5rem',
    borderRadius: '6px',
    overflowX: 'auto' as const,
    fontSize: '0.85rem',
    lineHeight: 1.5,
    fontFamily: '"Courier New", monospace',
    margin: 0,
  } as React.CSSProperties,

  resumo: {
    padding: '2rem',
  } as React.CSSProperties,

  resumoGrid: {
    display: 'grid' as const,
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  } as React.CSSProperties,

  resumoCard: {
    background: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    borderLeft: '4px solid #667eea',
  } as React.CSSProperties,
};

export default GuiaIDEs;
