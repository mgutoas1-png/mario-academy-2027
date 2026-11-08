import React, { useState } from 'react';
import { TODAS_AS_AULAS } from '../data-aulas-completas';

interface AulaIntegradaProps {
  aulaId?: string;
}

export const AulaIntegrada: React.FC<AulaIntegradaProps> = ({ aulaId = 'hc-semana-02' }) => {
  const [passoAtual, setPassoAtual] = useState(0);
  const [codigoCopiado, setCodigoCopiado] = useState(false);

  const aula = TODAS_AS_AULAS.find(a => a.id === aulaId);

  if (!aula) {
    return <div className="p-6 text-red-500">Aula não encontrada</div>;
  }

  const passoAtualData = aula.passos[passoAtual];

  const copiarCodigo = (codigo: string) => {
    navigator.clipboard.writeText(codigo);
    setCodigoCopiado(true);
    setTimeout(() => setCodigoCopiado(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-indigo-900 mb-2">
          {aula.titulo}
        </h1>
        <p className="text-gray-700">{aula.descricao}</p>
        <div className="flex gap-4 mt-3 text-sm text-gray-600">
          <span>📚 {aula.projeto.toUpperCase()}</span>
          <span>📅 SEMANA {aula.semana}</span>
          <span>⏱️ {aula.duracao}</span>
        </div>
      </div>

      {/* TAB: CONCEITO | PASSOS | TESTES */}
      <div className="mb-6 border-b border-indigo-200">
        <div className="flex gap-4">
          <button
            onClick={() => setPassoAtual(-1)}
            className={`pb-3 px-4 font-semibold transition ${
              passoAtual === -1
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            📖 CONCEITO
          </button>
          {aula.passos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPassoAtual(idx)}
              className={`pb-3 px-4 font-semibold transition ${
                passoAtual === idx
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ✅ PASSO {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setPassoAtual(aula.passos.length)}
            className={`pb-3 px-4 font-semibold transition ${
              passoAtual === aula.passos.length
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🧪 TESTAR
          </button>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="bg-white rounded-lg p-6 mb-6">
        {passoAtual === -1 ? (
          // CONCEITO
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              📖 CONCEITO (5 min)
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                O que é?
              </h3>
              <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                {aula.conceito.definicao}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Analogia
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
                {aula.conceito.analogia}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Diagrama
              </h3>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap font-mono">
                {aula.conceito.diagrama_ascii}
              </pre>
            </div>
          </div>
        ) : passoAtual < aula.passos.length ? (
          // PASSOS
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              ✅ PASSO {passoAtual + 1} — {passoAtualData.titulo}
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              {passoAtualData.descricao}
            </p>

            {/* CÓDIGOS */}
            {passoAtualData.codigos && passoAtualData.codigos.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  💻 CÓDIGO — {passoAtualData.codigos[0].arquivo}
                </h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm font-mono">
                    {passoAtualData.codigos[0].conteudo}
                  </pre>
                  <button
                    onClick={() =>
                      copiarCodigo(passoAtualData.codigos![0].conteudo)
                    }
                    className="absolute top-3 right-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    {codigoCopiado ? '✅ Copiado!' : '📋 Copiar Código'}
                  </button>
                </div>
              </div>
            )}

            {/* CHECKLIST */}
            {passoAtualData.checklist && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  ☑️ CHECKLIST DESTE PASSO
                </h3>
                <ul className="space-y-2">
                  {passoAtualData.checklist.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 w-5 h-5 cursor-pointer"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TROUBLESHOOTING */}
            {passoAtualData.troubleshooting &&
              passoAtualData.troubleshooting.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    🔧 TROUBLESHOOTING
                  </h3>
                  <div className="space-y-3">
                    {passoAtualData.troubleshooting.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg"
                      >
                        <p className="font-semibold text-yellow-900 mb-2">
                          ❌ {item.problema}
                        </p>
                        <p className="text-yellow-800">✅ {item.solucao}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        ) : (
          // TESTAR
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              🧪 TESTAR (10 min)
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                ✅ Confirmações Visuais Esperadas
              </h3>
              <ul className="space-y-2">
                {aula.teste.confirmacoes_visuais.map((visual, idx) => (
                  <li key={idx} className="text-gray-700 flex items-center gap-2">
                    <span className="text-green-500">▪</span>
                    <code className="bg-gray-100 px-3 py-1 rounded">
                      {visual}
                    </code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                🎯 Resultado Esperado
              </h3>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-green-900">
                {aula.teste.resultado_esperado}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                ✅ Checklist Final
              </h3>
              <ul className="space-y-2">
                {aula.checklist_final.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 cursor-pointer"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* NAVEGAÇÃO */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setPassoAtual(Math.max(-1, passoAtual - 1))}
          disabled={passoAtual === -1}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
        >
          ← Anterior
        </button>

        <div className="text-gray-700 font-semibold">
          {passoAtual === -1
            ? 'CONCEITO'
            : passoAtual < aula.passos.length
              ? `PASSO ${passoAtual + 1}/${aula.passos.length}`
              : 'TESTE'}
        </div>

        <button
          onClick={() =>
            setPassoAtual(Math.min(aula.passos.length, passoAtual + 1))
          }
          disabled={passoAtual === aula.passos.length}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
};

export default AulaIntegrada;
