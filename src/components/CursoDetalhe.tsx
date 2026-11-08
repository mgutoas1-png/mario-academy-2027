import { useState } from 'react'
import { Curso } from '../../data-cursos'

interface UsuarioProgress {
  aulasCompletas: string[]
}

interface Props {
  curso: Curso
  usuario: UsuarioProgress
  onMarcarCompleta: (aulaId: string) => void
  onAdicionarXP: (xp: number) => void
}

export default function CursoDetalhe({
  curso,
  usuario,
  onMarcarCompleta,
  onAdicionarXP
}: Props) {
  const [aulaAberta, setAulaAberta] = useState(0)
  const aula = curso.aulas[aulaAberta]
  const [respostasQuiz, setRespostasQuiz] = useState<number[]>([])
  const [mostrouResultado, setMostrouResultado] = useState(false)

  const handleResponderQuiz = (pergunta: number, resposta: number) => {
    const novasRespostas = [...respostasQuiz]
    novasRespostas[pergunta] = resposta
    setRespostasQuiz(novasRespostas)
  }

  const enviarQuiz = () => {
    const acertos = aula.quiz.filter((q, i) => respostasQuiz[i] === q.resposta).length
    const percentual = (acertos / aula.quiz.length) * 100

    if (percentual >= 70) {
      if (!usuario.aulasCompletas.includes(aula.id)) {
        onMarcarCompleta(aula.id)
        onAdicionarXP(aula.xp)
      }
      alert(`✅ Parabéns! Você acertou ${acertos}/${aula.quiz.length} questões!`)
    } else {
      alert(`❌ Você acertou apenas ${acertos}/${aula.quiz.length}. Tente novamente!`)
    }
    setMostrouResultado(true)
  }

  const proximaAula = () => {
    if (aulaAberta < curso.aulas.length - 1) {
      setAulaAberta(aulaAberta + 1)
      setRespostasQuiz([])
      setMostrouResultado(false)
    }
  }

  const aulaAnterior = () => {
    if (aulaAberta > 0) {
      setAulaAberta(aulaAberta - 1)
      setRespostasQuiz([])
      setMostrouResultado(false)
    }
  }

  const completa = usuario.aulasCompletas.includes(aula.id)

  return (
    <div className="curso-detalhe">
      <div className="aulas-sidebar">
        <h3>{curso.nome}</h3>
        <div className="aulas-lista">
          {curso.aulas.map((a, i) => (
            <button
              key={a.id}
              className={`aula-item ${i === aulaAberta ? 'ativa' : ''} ${
                usuario.aulasCompletas.includes(a.id) ? 'completa' : ''
              }`}
              onClick={() => {
                setAulaAberta(i)
                setRespostasQuiz([])
                setMostrouResultado(false)
              }}
            >
              <span className="numero">Semana {a.semana}</span>
              <span className="titulo">{a.titulo}</span>
              {usuario.aulasCompletas.includes(a.id) && <span className="check">✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="aula-content">
        {/* Cabeçalho */}
        <div className="aula-header" style={{ backgroundColor: curso.cor }}>
          <h2>{aula.titulo}</h2>
          <p>Semana {aula.semana} - {curso.nome}</p>
          {completa && <span className="badge-completa">✓ Completada</span>}
        </div>

        {/* Conceito */}
        <section className="aula-secao">
          <h3>⏱️ 5 min: Conceito</h3>
          <p className="conceito">{aula.conceito}</p>
        </section>

        {/* Build */}
        <section className="aula-secao">
          <h3>🔨 15 min: Build Incremental</h3>
          <ol className="build-passos">
            {aula.build.map((passo, i) => (
              <li key={i}>{passo}</li>
            ))}
          </ol>
          <div className="codigo-exemplo">
            <h4>📝 Código Exemplo</h4>
            <pre><code>{aula.codigoExemplo}</code></pre>
          </div>
        </section>

        {/* Quiz */}
        <section className="aula-secao">
          <h3>✅ 10 min: Quiz</h3>
          <div className="quiz">
            {aula.quiz.map((q, i) => (
              <div key={i} className="pergunta">
                <p className="texto-pergunta">{i + 1}. {q.pergunta}</p>
                <div className="opcoes">
                  {q.opcoes.map((opcao, j) => (
                    <label key={j} className="opcao">
                      <input
                        type="radio"
                        name={`pergunta-${i}`}
                        value={j}
                        checked={respostasQuiz[i] === j}
                        onChange={() => handleResponderQuiz(i, j)}
                        disabled={mostrouResultado}
                      />
                      <span className={respostasQuiz[i] === j ? 'selecionada' : ''}>
                        {opcao}
                      </span>
                    </label>
                  ))}
                </div>
                {mostrouResultado && (
                  <p className={`feedback ${
                    respostasQuiz[i] === q.resposta ? 'correto' : 'incorreto'
                  }`}>
                    {respostasQuiz[i] === q.resposta ? '✓' : '✗'} {q.explicacao}
                  </p>
                )}
              </div>
            ))}
          </div>

          {!mostrouResultado && (
            <button className="btn-enviar" onClick={enviarQuiz}>
              Enviar Respostas
            </button>
          )}

          {completa && (
            <div className="aula-completa">
              <p>🎉 Você completou esta aula!</p>
              <p>+{aula.xp} XP ganhos</p>
            </div>
          )}
        </section>

        {/* Navegação */}
        <div className="aula-navegacao">
          <button
            className="btn btn-prev"
            onClick={aulaAnterior}
            disabled={aulaAberta === 0}
          >
            ← Anterior
          </button>
          <span className="info-aula">
            Aula {aulaAberta + 1} de {curso.aulas.length}
          </span>
          <button
            className="btn btn-next"
            onClick={proximaAula}
            disabled={aulaAberta === curso.aulas.length - 1}
          >
            Próxima →
          </button>
        </div>
      </div>
    </div>
  )
}
