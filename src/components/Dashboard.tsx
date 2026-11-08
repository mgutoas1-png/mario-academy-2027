import { Curso } from '../../data-cursos'

interface UsuarioProgress {
  xp: number
  level: number
  badges: string[]
  aulasCompletas: string[]
  streakDias: number
}

interface Props {
  usuario: UsuarioProgress
  cursos: Curso[]
  onAbrirCurso: (index: number) => void
}

export default function Dashboard({ usuario, cursos, onAbrirCurso }: Props) {
  const totalAulas = cursos.reduce((sum, c) => sum + c.aulas.length, 0)
  const progresso = (usuario.aulasCompletas.length / totalAulas) * 100

  return (
    <div className="dashboard">
      <section className="stats">
        <div className="stat-card">
          <h3>📊 Progresso Geral</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progresso}%` }}></div>
          </div>
          <p>{usuario.aulasCompletas.length} / {totalAulas} aulas</p>
        </div>

        <div className="stat-card">
          <h3>⭐ XP Total</h3>
          <p className="big-number">{usuario.xp}</p>
          <small>Nível {usuario.level}</small>
        </div>

        <div className="stat-card">
          <h3>🔥 Streak</h3>
          <p className="big-number">{usuario.streakDias}</p>
          <small>dias consecutivos</small>
        </div>

        <div className="stat-card">
          <h3>🏆 Badges</h3>
          <div className="badges-grid">
            {usuario.badges.length > 0 ? (
              usuario.badges.map(badge => (
                <span key={badge} className={`badge-lg badge-${badge}`}>
                  {badge === 'bronze' && '🥉 Bronze'}
                  {badge === 'prata' && '🥈 Prata'}
                  {badge === 'ouro' && '🥇 Ouro'}
                  {badge === 'master' && '👑 Master'}
                </span>
              ))
            ) : (
              <p>Comece a completar aulas!</p>
            )}
          </div>
        </div>
      </section>

      <section className="cursos-grid">
        <h2>Seus Cursos</h2>
        <div className="grid">
          {cursos.map((curso, index) => {
            const aulasCompletas = usuario.aulasCompletas.filter(id =>
              curso.aulas.some(a => a.id === id)
            ).length
            const progressoCurso = (aulasCompletas / curso.aulas.length) * 100

            return (
              <div
                key={curso.id}
                className="curso-card"
                style={{ borderLeftColor: curso.cor }}
                onClick={() => onAbrirCurso(index)}
              >
                <div className="curso-header" style={{ backgroundColor: curso.cor }}>
                  <span className="emoji-grande">{curso.emoji}</span>
                </div>
                <div className="curso-body">
                  <h3>{curso.nome}</h3>
                  <p className="descricao">{curso.descricao}</p>
                  <p className="tech">{curso.tech}</p>
                  <p className="dia">{curso.dia}</p>
                </div>
                <div className="curso-footer">
                  <div className="progress-bar-small">
                    <div
                      className="progress-fill-small"
                      style={{ width: `${progressoCurso}%`, backgroundColor: curso.cor }}
                    ></div>
                  </div>
                  <p className="progresso-texto">{aulasCompletas}/{curso.aulas.length} aulas</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="leaderboard">
        <h2>🏆 Próximos Marcos</h2>
        <div className="marcos">
          <div className={`marco ${usuario.xp >= 1000 ? 'completo' : ''}`}>
            <span>1000 XP</span>
            <span>🥉 Badge Bronze</span>
          </div>
          <div className={`marco ${usuario.xp >= 5000 ? 'completo' : ''}`}>
            <span>5000 XP</span>
            <span>🥈 Badge Prata</span>
          </div>
          <div className={`marco ${usuario.xp >= 10000 ? 'completo' : ''}`}>
            <span>10000 XP</span>
            <span>🥇 Badge Ouro</span>
          </div>
          <div className={`marco ${usuario.aulasCompletas.length === 128 ? 'completo' : ''}`}>
            <span>128 aulas</span>
            <span>👑 Badge Master</span>
          </div>
        </div>
      </section>
    </div>
  )
}
