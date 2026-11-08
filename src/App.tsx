import { useState, useEffect } from 'react'
import { cursos } from '../data-cursos'
import Dashboard from './components/Dashboard'
import CursoDetalhe from './components/CursoDetalhe'
import AulaIntegrada from './components/AulaIntegrada'
import GlossarioFerramental from './components/GlossarioFerramental'
import GuiaIDEs from './components/GuiaIDEs'
import './App.css'

interface UsuarioProgress {
  xp: number
  level: number
  badges: string[]
  aulasCompletas: string[]
  streakDias: number
}

function App() {
  const [tela, setTela] = useState<'dashboard' | 'curso' | 'aula-integrada' | 'glossario' | 'ides'>('dashboard')
  const [cursoSelecionado, setCursoSelecionado] = useState(0)
  const [aulaIntegradaId, setAulaIntegradaId] = useState('hc-semana-02')
  const [usuario, setUsuario] = useState<UsuarioProgress>({
    xp: 0,
    level: 1,
    badges: [],
    aulasCompletas: [],
    streakDias: 0
  })

  // Carregar progresso do localStorage
  useEffect(() => {
    const salvo = localStorage.getItem('mario-usuario')
    if (salvo) {
      setUsuario(JSON.parse(salvo))
    }
  }, [])

  // Salvar progresso quando muda
  useEffect(() => {
    localStorage.setItem('mario-usuario', JSON.stringify(usuario))
  }, [usuario])

  // Calcular level baseado em XP
  const calcularLevel = (xp: number) => {
    return Math.floor(xp / 1000) + 1
  }

  const adicionarXP = (xp: number) => {
    const novoXP = usuario.xp + xp
    const novoLevel = calcularLevel(novoXP)

    setUsuario(prev => ({
      ...prev,
      xp: novoXP,
      level: novoLevel,
      badges: [...new Set([
        ...prev.badges,
        ...(novoXP >= 1000 ? ['bronze'] : []),
        ...(novoXP >= 5000 ? ['prata'] : []),
        ...(novoXP >= 10000 ? ['ouro'] : []),
        ...(prev.aulasCompletas.length === cursos.flatMap(c => c.aulas).length ? ['master'] : [])
      ])]
    }))
  }

  const marcarAulaCompleta = (aulaId: string) => {
    if (!usuario.aulasCompletas.includes(aulaId)) {
      const aula = cursos
        .flatMap(c => c.aulas)
        .find(a => a.id === aulaId)

      if (aula) {
        setUsuario(prev => ({
          ...prev,
          aulasCompletas: [...prev.aulasCompletas, aulaId]
        }))
        adicionarXP(aula.xp)
      }
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <h1>🎓 Mario Academy 2027</h1>
          <p>4 Sistemas Prontos para Venda</p>
        </div>
        <div className="header-right">
          <div className="xp-bar">
            <div className="xp-fill" style={{
              width: `${((usuario.xp % 1000) / 1000) * 100}%`
            }}></div>
          </div>
          <span>{usuario.xp} XP</span>
          <span className="level">Nível {usuario.level}</span>
          {usuario.badges.length > 0 && (
            <div className="badges">
              {usuario.badges.map(badge => (
                <span key={badge} className={`badge badge-${badge}`}>
                  {badge === 'bronze' && '🥉'}
                  {badge === 'prata' && '🥈'}
                  {badge === 'ouro' && '🥇'}
                  {badge === 'master' && '👑'}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <nav className="nav">
        <button
          className={`nav-btn ${tela === 'dashboard' ? 'ativo' : ''}`}
          onClick={() => setTela('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          className={`nav-btn ${tela === 'ides' ? 'ativo' : ''}`}
          onClick={() => setTela('ides')}
        >
          💻 IDEs
        </button>
        <button
          className={`nav-btn ${tela === 'glossario' ? 'ativo' : ''}`}
          onClick={() => setTela('glossario')}
        >
          📖 Glossário
        </button>
        <button
          className={`nav-btn ${tela === 'aula-integrada' ? 'ativo' : ''}`}
          onClick={() => {
            setTela('aula-integrada')
            setAulaIntegradaId('hc-semana-01')
          }}
        >
          📚 Aulas Completas
        </button>
        {cursos.map((curso, i) => (
          <button
            key={curso.id}
            className={`nav-btn ${tela === 'curso' && cursoSelecionado === i ? 'ativo' : ''}`}
            onClick={() => {
              setTela('curso')
              setCursoSelecionado(i)
            }}
          >
            {curso.emoji} {curso.nome}
          </button>
        ))}
      </nav>

      <main className="main">
        {tela === 'dashboard' ? (
          <Dashboard
            usuario={usuario}
            cursos={cursos}
            onAbrirCurso={(i) => {
              setCursoSelecionado(i)
              setTela('curso')
            }}
          />
        ) : tela === 'ides' ? (
          <GuiaIDEs />
        ) : tela === 'glossario' ? (
          <GlossarioFerramental />
        ) : tela === 'aula-integrada' ? (
          <AulaIntegrada aulaId={aulaIntegradaId} />
        ) : (
          <CursoDetalhe
            curso={cursos[cursoSelecionado]}
            usuario={usuario}
            onMarcarCompleta={marcarAulaCompleta}
            onAdicionarXP={adicionarXP}
          />
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Mario Academy - Plataforma de Cursos Práticos</p>
        <p>Desenvolvido com ❤️ para seu sucesso</p>
      </footer>
    </div>
  )
}

export default App
