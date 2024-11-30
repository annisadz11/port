import React, { useEffect } from 'react';
import './Skills.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import CSS AOS

// Mengimpor gambar dengan cara yang benar
import htmlLogo from '../../assets/logo_html.png';
import cssLogo from '../../assets/logo_css.png';
import jsLogo from '../../assets/logo_js.png';
import csharpLogo from '../../assets/logo_csharp.svg';
import aspnetLogo from '../../assets/logo_aspnet.png';
import sqlserverLogo from '../../assets/logo_sqlserver.png';
import canvaLogo from '../../assets/logo_canva.png';
import figmaLogo from '../../assets/logo_figma.png';
import lightroomLogo from '../../assets/logo_lr.png';
import psLogo from '../../assets/logo_ps.svg';
import capcutLogo from '../../assets/logo_capcut.svg';
import mswordLogo from '../../assets/logo_msword.png';
import msexcelLogo from '../../assets/logo_msexcel.png';
import mspptLogo from '../../assets/logo_ppt.png';
import outlookLogo from '../../assets/logo_outlook.png';
import laravelLogo from '../../assets/logo_laravel.svg';
import phpLogo from '../../assets/logo_php.png';
import reactLogo from '../../assets/logo_react.png';
// import githubLogo from '../../assets/logo_github.png';
import vscodeLogo from '../../assets/logo_vscode.svg';
import vsLogo from '../../assets/logo_vs.svg';

const skillsData = [
  { name: 'HTML', imgSrc: htmlLogo },
  { name: 'CSS', imgSrc: cssLogo },
  { name: 'JavaScript', imgSrc: jsLogo },
  { name: 'C#', imgSrc: csharpLogo },
  { name: 'ASP.NET', imgSrc: aspnetLogo },
  { name: 'SQL Server', imgSrc: sqlserverLogo },
  { name: 'Canva', imgSrc: canvaLogo },
  { name: 'Figma', imgSrc: figmaLogo },
  { name: 'Lightroom', imgSrc: lightroomLogo },
  { name: 'Photoshop', imgSrc: psLogo },
  { name: 'Capcut', imgSrc: capcutLogo },
  { name: 'Microsoft Word', imgSrc: mswordLogo },
  { name: 'Microsoft Excel', imgSrc: msexcelLogo },
  { name: 'Microsoft Power Point', imgSrc: mspptLogo },
  { name: 'Outlook', imgSrc: outlookLogo },
  { name: 'Laravel', imgSrc: laravelLogo },
  { name: 'PHP', imgSrc: phpLogo },
  { name: 'React', imgSrc: reactLogo },
  // { name: 'Github', imgSrc: githubLogo },
  { name: 'Visual Studio Code', imgSrc: vscodeLogo },
  { name: 'Visual Studio', imgSrc: vsLogo }

];

const Skills = () => {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-title">
        <h1>
          <span className="skills-gradient">My</span> 
          <span className="skills-white"> Skills</span>
        </h1>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div 
            className="skill-item" 
            key={index} 
            data-aos="flip-left" 
            data-aos-delay={index * 200} // Mengatur delay berdasarkan index (ubah dari 300 ke 200)
            data-aos-duration="400" // Mengatur durasi animasi (ubah dari 300 ke 400)
          >
            <img src={skill.imgSrc} alt={skill.name} className="skill-img" />
            <span className="skill-tooltip">{skill.name}</span>
          </div>
        ))}
      </div>    </section>
  );
}

export default Skills;