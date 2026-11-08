import React, { useState } from 'react';
import { TODAS_AS_AULAS } from '../data-aulas-completas';

interface AulaIntegradaProps {
  aulaId?: string;
}

export const AulaIntegrada: React.FC<AulaIntegradaProps> = ({ aulaId = 'hc-semana-01' }) => {
  const [passoAtual, setPassoAtual] = useState(0);
  const [codigoCopiado, setCodigoCopiado] = useState(false);

  const aula = TODAS_AS_AULAS.find(a => a.id === aulaId);

  if (!aula) {
    return <div style={{ padding: '2rem', color: '#e74c3c' }}>❌ Aula não encontrada: {aulaId}</div>;
  }

  const passoAtualData = aula.passos[passoAtual];

  const copiarCodigo = (codigo: string) => {
    navigator.clipboard.writeText(codigo);
    setCodigoCopiado(true);
    setTimeout(() => setCodigoCopiado(false), 2000);
  };

  const isConceito = passoAtual === -1;
  const isTest = passoAtual === aula.passos.length;

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title}>{aula.titulo}</h1>
          <p style={styles.descricao}>{aula.descricao}</p>
          <div style={styles.meta}>
            <span>📚 {aula.projeto.toUpperCase()}</span>
            <span>📅 SEMANA {aula.semana}</span>
            <span>⏱️ {aula.duracao}</span>
          </div>
        </div>

        {/* TABS */}
        <div style={styles.tabsContainer}>
          <button
            onClick={() => setPassoAtual(-1)}
            style={{
              ...styles.tab,
              ...(isConceito ? styles.tabAtivo : styles.tabInativo)
            }}
          >
            📖 CONCEITO
          </button>
          {aula.passos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPassoAtual(idx)}
              style={{
                ...styles.tab,
                ...(passoAtual === idx ? styles.tabAtivo : styles.tabInativo)
              }}
            >
              ✅ P{idx + 1}
            </button>
          ))}
          <button
            onClick={() => setPassoAtual(aula.passos.length)}
            style={{
              ...styles.tab,
              ...(isTest ? styles.tabAtivo : styles.tabInativo)
            }}
          >
            🧪 TESTE
          </button>
        </div>

        {/* CONTEÚDO */}
        <div style={styles.conteudo}>
          {isConceito ? (
            // CONCEITO
            <div>
              <h2 style={styles.h2}>📖 CONCEITO (5 min)</h2>

              <div style={styles.caixaConceito}>
                <h3 style={styles.h3}>O que é?</h3>
                <p style={styles.texto}>{aula.conceito.definicao}</p>
              </div>

              <div style={styles.caixaConceito}>
                <h3 style={styles.h3}>Analogia</h3>
                <pre style={styles.pre}>{aula.conceito.analogia}</pre>
              </div>

              <div style={styles.caixaConceito}>
                <h3 style={styles.h3}>Diagrama</h3>
                <pre style={styles.pre}>{aula.conceito.diagrama_ascii}</pre>
              </div>
            </div>
          ) : isTest ? (
            // TESTE
            <div>
              <h2 style={styles.h2}>🧪 TESTAR (10 min)</h2>

              <div style={styles.caixaConceito}>
                <h3 style={styles.h3}>✅ Confirmações Visuais Esperadas</h3>
                <ul style={styles.ul}>
                  {aula.teste.confirmacoes_visuais.map((visual, idx) => (
                    <li key={idx} style={styles.li}>
                      <code style={styles.code}>{visual}</code>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={styles.caixaConceito}>
                <h3 style={styles.h3}>🎯 Resultado Esperado</h3>
                <div style={styles.resultadoEsperado}>{aula.teste.resultado_esperado}</div>
              </div>

              <div style={styles.caixaConceito}>
                <h3 style={styles.h3}>✅ Checklist Final</h3>
                <ul style={styles.ul}>
                  {aula.checklist_final.map((item, idx) => (
                    <li key={idx} style={styles.li}>
                      <input type="checkbox" style={styles.checkbox} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            // PASSOS
            <div>
              <h2 style={styles.h2}>
                ✅ PASSO {passoAtual + 1} — {passoAtualData.titulo}
              </h2>

              <p style={styles.descricaoPasso}>{passoAtualData.descricao}</p>

              {/* CÓDIGOS */}
              {passoAtualData.codigos && passoAtualData.codigos.length > 0 && (
                <div style={styles.codigoContainer}>
                  <h3 style={styles.h3}>
                    💻 CÓDIGO — {passoAtualData.codigos[0].arquivo}
                  </h3>
                  <div style={styles.codigoBox}>
                    <pre style={styles.codigoConteudo}>
                      {passoAtualData.codigos[0].conteudo}
                    </pre>
                    <button
                      onClick={() => copiarCodigo(passoAtualData.codigos![0].conteudo)}
                      style={{
                        ...styles.botaoCopiar,
                        ...(codigoCopiado ? styles.botaoCopiarSucesso : {})
                      }}
                    >
                      {codigoCopiado ? '✅ Copiado!' : '📋 Copiar Código'}
                    </button>
                  </div>
                </div>
              )}

              {/* CHECKLIST */}
              {passoAtualData.checklist && (
                <div style={styles.caixaConceito}>
                  <h3 style={styles.h3}>☑️ CHECKLIST DESTE PASSO</h3>
                  <ul style={styles.ul}>
                    {passoAtualData.checklist.map((item, idx) => (
                      <li key={idx} style={styles.li}>
                        <input type="checkbox" style={styles.checkbox} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* TROUBLESHOOTING */}
              {passoAtualData.troubleshooting &&
                passoAtualData.troubleshooting.length > 0 && (
                  <div style={styles.caixaConceito}>
                    <h3 style={styles.h3}>🔧 TROUBLESHOOTING</h3>
                    <div style={styles.troubleshootingContainer}>
                      {passoAtualData.troubleshooting.map((item, idx) => (
                        <div key={idx} style={styles.troubleshootingItem}>
                          <p style={styles.problemaTitulo}>❌ {item.problema}</p>
                          <p style={styles.solucao}>✅ {item.solucao}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>

        {/* NAVEGAÇÃO */}
        <div style={styles.navegacao}>
          <button
            onClick={() => setPassoAtual(Math.max(-1, passoAtual - 1))}
            disabled={passoAtual === -1}
            style={{
              ...styles.botaoNav,
              ...(passoAtual === -1 ? styles.botaoDisabled : {})
            }}
          >
            ← Anterior
          </button>

          <div style={styles.indicador}>
            {isConceito
              ? 'CONCEITO'
              : isTest
                ? 'TESTE'
                : `PASSO ${passoAtual + 1}/${aula.passos.length}`}
          </div>

          <button
            onClick={() => setPassoAtual(Math.min(aula.passos.length, passoAtual + 1))}
            disabled={passoAtual === aula.passos.length}
            style={{
              ...styles.botaoNav,
              ...(passoAtual === aula.passos.length ? styles.botaoDisabled : {})
            }}
          >
            Próximo →
          </button>
        </div>
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
    maxWidth: '900px',
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

  descricao: {
    fontSize: '1rem',
    margin: '0 0 1rem 0',
    opacity: 0.95,
  } as React.CSSProperties,

  meta: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center' as const,
    fontSize: '0.95rem',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  tabsContainer: {
    display: 'flex',
    gap: '0.5rem',
    padding: '1rem',
    background: '#f5f7fa',
    borderBottom: '1px solid #e0e0e0',
    overflowX: 'auto' as const,
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  tab: {
    padding: '0.6rem 1.2rem',
    background: 'white',
    border: '2px solid #e0e0e0',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap' as const,
  } as React.CSSProperties,

  tabAtivo: {
    background: '#667eea',
    color: 'white',
    borderColor: '#667eea',
  } as React.CSSProperties,

  tabInativo: {
    color: '#666',
  } as React.CSSProperties,

  conteudo: {
    padding: '2rem',
    minHeight: '400px',
  } as React.CSSProperties,

  h2: {
    color: '#667eea',
    margin: '0 0 1.5rem 0',
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    borderBottom: '2px solid #667eea',
    paddingBottom: '0.75rem',
  } as React.CSSProperties,

  h3: {
    color: '#333',
    margin: '0 0 1rem 0',
    fontSize: '1.1rem',
    fontWeight: 600,
  } as React.CSSProperties,

  caixaConceito: {
    background: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    borderLeft: '4px solid #667eea',
  } as React.CSSProperties,

  texto: {
    margin: 0,
    lineHeight: 1.6,
    color: '#555',
  } as React.CSSProperties,

  pre: {
    background: '#f5f5f5',
    padding: '1rem',
    borderRadius: '6px',
    overflowX: 'auto' as const,
    fontSize: '0.85rem',
    lineHeight: 1.5,
    fontFamily: '"Courier New", monospace',
    margin: 0,
    color: '#333',
  } as React.CSSProperties,

  descricaoPasso: {
    fontSize: '1.05rem',
    color: '#555',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
  } as React.CSSProperties,

  codigoContainer: {
    marginBottom: '1.5rem',
  } as React.CSSProperties,

  codigoBox: {
    position: 'relative' as const,
    background: '#2c3e50',
    borderRadius: '8px',
    overflow: 'hidden',
  } as React.CSSProperties,

  codigoConteudo: {
    color: '#0f0',
    padding: '1.5rem',
    margin: 0,
    overflowX: 'auto' as const,
    fontSize: '0.85rem',
    lineHeight: 1.5,
    fontFamily: '"Courier New", monospace',
  } as React.CSSProperties,

  botaoCopiar: {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    background: '#667eea',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  botaoCopiarSucesso: {
    background: '#27ae60',
  } as React.CSSProperties,

  ul: {
    margin: 0,
    paddingLeft: '1.5rem',
    listStyle: 'none',
  } as React.CSSProperties,

  li: {
    margin: '0.6rem 0',
    color: '#555',
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '0.75rem',
  } as React.CSSProperties,

  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
  } as React.CSSProperties,

  code: {
    background: '#f0f0f0',
    padding: '0.3rem 0.6rem',
    borderRadius: '4px',
    fontFamily: '"Courier New", monospace',
    fontSize: '0.9rem',
  } as React.CSSProperties,

  resultadoEsperado: {
    background: '#e8f5e9',
    border: '2px solid #27ae60',
    color: '#2e7d32',
    padding: '1rem',
    borderRadius: '6px',
    fontWeight: 600,
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

  navegacao: {
    display: 'flex' as const,
    justifyContent: 'space-between',
    alignItems: 'center' as const,
    padding: '1.5rem 2rem',
    background: '#f5f7fa',
    borderTop: '1px solid #e0e0e0',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,

  botaoNav: {
    padding: '0.75rem 1.5rem',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  } as React.CSSProperties,

  botaoDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed' as const,
  } as React.CSSProperties,

  indicador: {
    fontWeight: 600,
    color: '#667eea',
    fontSize: '0.95rem',
  } as React.CSSProperties,
};

export default AulaIntegrada;
