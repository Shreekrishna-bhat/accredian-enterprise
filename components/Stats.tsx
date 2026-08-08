const stats=[['10K+','Learners enabled'],['200+','Enterprise cohorts'],['95%','Completion rate'],['4.8/5','Learner rating']];
export default function Stats(){return <section className="stats section"><div className="stats-grid">{stats.map(([n,l])=><div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></section>}
