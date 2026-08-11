import './Skills.css'

function Skills() {

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'HTML', level: 5 },
        { name: 'CSS', level: 4 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 5 },
        { name: 'Express.js', level: 4 },
        { name: 'REST API', level: 5 },
        { name: 'GraphQL', level: 4 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', level: 5 },
        { name: 'MySQL', level: 4 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'Firebase', level: 4 },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 5 },
        { name: 'GitHub', level: 5 },
        { name: 'VS Code', level: 5 },
        { name: 'Docker', level: 4 },
      ],
    },
  ]

  return (
    <section className="skills">

      <div className="skills-title">
        <div className="skills-icon">
          &lt;/&gt;
        </div>

        <div>
          <h2>Skills</h2>
          <p>Technologies and tools I work with</p>
        </div>
      </div>

      <div className="skills-content">

        {skills.map((group) => (

          <div className="skill-group" key={group.category}>

            <h3>{group.category}</h3>

            <div className="skill-list">

              {group.items.map((skill) => (

                <div className="skill-item" key={skill.name}>

                  <span className="skill-name">
                    {skill.name}
                  </span>

                  <div className="skill-dots">

                    {[1, 2, 3, 4, 5].map((dot) => (

                      <span
                        key={dot}
                        className={
                          dot <= skill.level
                            ? 'dot active'
                            : 'dot'
                        }
                      />

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Skills