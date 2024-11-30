import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import CSS AOS
import './Project.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import project_data from '../../assets/project_data'; // Pastikan ini adalah data yang benar

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        AOS.init(); // Inisialisasi AOS
    }, []);

    const handleReadMoreClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div id="project" className='project'>
            <div className="project-title">
                <h1>Project Experience</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="project-container">
                {project_data.slice(0, 4).map((project, index) => {
                    return (
                        <div 
                            key={index} 
                            className="project-item" 
                            data-aos="zoom-in-up" // Keterangan AOS untuk efek animasi
                            data-aos-delay={index * 200} // Mengatur delay berdasarkan index
                            data-aos-duration="600" // Mengatur durasi animasi
                        >
                            <img src={project.w_img} alt={`Project ${index}`} />
                            <h3 className="project-name">{project.w_name}</h3>
                            <button className="read-more" onClick={() => handleReadMoreClick(project)}>Read More</button>
                        </div>
                    );
                })}
            </div>
            {isModalOpen && (
    <div className="modal-overlay" onClick={closeModal}>
        <div className={`modal-content ${isModalOpen ? 'show' : ''}`} data-aos="flip-left" onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.w_name}</h2>
            <p style={{ textAlign: 'justify' }}>{selectedProject.description}</p>
            <p><strong>Role:</strong> {selectedProject.role}</p>
            <p><strong>Contribution:</strong></p>
            <ul style={{ textAlign: 'justify', paddingLeft: '20px' }}>
                {selectedProject.contribution.map((item, index) => (
                    <li key={index}>{`${index + 1}. ${item}`}</li> // Menambahkan nomor di depan setiap kontribusi
                ))}
            </ul>
            <button onClick={closeModal}>Close</button>
        </div>
    </div>
)}
      </div>
    );
}

export default Project;