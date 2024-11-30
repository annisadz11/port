import React, { useEffect } from 'react';
import './Certification.css';
import theme_pattern from '../../assets/theme_pattern.svg'; // Pastikan path ini benar
import AOS from 'aos'; // Impor AOS
import 'aos/dist/aos.css';

const Certification = () => {
    useEffect(() => {
        AOS.init(); // Inisialisasi AOS
    }, []);

    const certifications = [
        {
            title: "Certificate of Competence",
            issuer: "Programmer And Software Development by BNSP (Junior Web Programmer)",
            year: "Okt 2024 - Okt 2027",
            link: "https://drive.google.com/file/d/1a18fNwcDmGWtl3Wl2LiInNMjLlsp6ZZ5/view?usp=drive_link"
        },
        {
            title: "Certificate English Score",
            issuer: "British Council (Intermediate)",
            year: "Sept 2024",
            link: "https://drive.google.com/file/d/1HfTH-zSKIM0o8lOyCCR-lbevVuTeeYWF/view?usp=drive_link"
        },
        {
            title: "Certificate Internship",
            issuer: "IT Support Client Engineer at Infineon Technologies Batam",
            year: "Aug 2023 - Aug 2024",
            link: "https://drive.google.com/file/d/1vVM1E6xgYpT9wlV4aOg1rE5W0Eg9mczD/view?usp=drive_link"
        },
        {
            title: "Badan Eksekutif Mahasiswa",
            issuer: "Batam State Polytechnic (Kominfo BEM)",
            year: "Feb 2022 - Feb 2023",
            // Tidak ada link untuk sertifikat ini
        },
        {
            title: "Courses Linkedln Learning",
            issuer: "C Programming Basics Flow Control Variables and Pointers (NASBA)",
            year: "Okt 2023",
            link: "https://drive.google.com/file/d/10iRZefsBhkviE8BWYTkMrCxM6lasubeJ/view?usp=drive_link"
        },
        {
            title: "Courses Linkedln Learning",
            issuer: "Data Analytics for Business Professionals 2018",
            year: "Okt 2023",
            link: "https://drive.google.com/file/d/1Xczj-B0O5hvVrx8Y_g6COl2qbX46uqCW/view?usp=drive_link"
        },
        {
            title: "Courses Linkedln Learning",
            issuer: "Learning Data Analytics (NASBA)",
            year: "Okt 2023",
            link: "https://drive.google.com/file/d/1Bf9vOlb-P6TNtQOuqHDMt52700o9z9vB/view?usp=drive_link"
        },
        {
            title: "Courses Linkedln Learning",
            issuer: "SQL Essential Training",
            year: "Okt 2023",
            link: "https://drive.google.com/file/d/1wtbmgwrqubX9AEuO_EpkhdgNlals1Jke/view?usp=drive_link"
        },
        {
            title: "Courses Linkedln Learning",
            issuer: "Understanding Business PMI",
            year: "Okt 2023",
            link: "https://drive.google.com/file/d/1D8Bx1-NsL6gzX8mSOe5CQrCSfMvolRxN/view?usp=drive_link"
        },
    ];

    return (
        <div id="certification" className='certification'>
            <div className="certification-title" data-aos="fade-up">
                <h1>Certification</h1>
                <img src={theme_pattern} alt="Theme Pattern" className="theme-pattern" />
            </div>
            <div className="certification-list">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-item" data-aos="fade-up" data-aos-delay={index * 100}>
                        <h2>{cert.title}</h2>
                        <p>{cert.issuer}</p>
                        <p>Year: {cert.year}</p>
                        {/* Hanya tampilkan tautan jika bukan "Badan Eksekutif Mahasiswa" */}
                        {cert.title !== "Badan Eksekutif Mahasiswa" && (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certification;