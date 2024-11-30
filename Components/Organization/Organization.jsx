import React, { useEffect } from 'react';
import './Organization.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import CSS AOS
import theme_pattern from '../../assets/theme_pattern.svg'; // Pastikan path ini benar
import bemImage1 from '../../assets/bem_img1.png'; // Ganti dengan path gambar Anda
import bemImage2 from '../../assets/bem_img2.jpeg'; // Ganti dengan path gambar Anda
import bemImage3 from '../../assets/bem_img3.jpeg'; // Ganti dengan path gambar Anda
import bemImage4 from '../../assets/bem_img4.jpeg'; // Ganti dengan path gambar Anda
import bemImage5 from '../../assets/bem_img5.jpeg'; // Ganti dengan path gambar Anda
import bemImage6 from '../../assets/bem_img6.png'; // Ganti dengan path gambar Anda

import kuasImage1 from '../../assets/kuas_img1.jpeg'; // Ganti dengan path gambar Anda
import kuasImage2 from '../../assets/kuas_img2.jpeg'; // Ganti dengan path gambar Anda
import kuasImage3 from '../../assets/kuas_img3.jpeg'; // Ganti dengan path gambar Anda
import kuasImage4 from '../../assets/kuas_img4.jpeg'; // Ganti dengan path gambar Anda
import kuasImage5 from '../../assets/kuas_img5.jpeg'; // Ganti dengan path gambar Anda
import kuasImage6 from '../../assets/kuas_img6.jpeg'; // Ganti dengan path gambar Anda

const Organization = () => {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);

  return (
        <div id="organization" className='organization'>
      <div className="organization-title">
        <h1>Organization</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* Konten BEM */}
      <div className="organization-border">
      <div className="organization-container" data-aos="fade-down-left" data-aos-delay="200">
          <div className="organization-images">
            <img src={bemImage1} alt="BEM 1" className="organization-image" data-aos="fade-left" data-aos-delay="200" />
            <img src={bemImage2} alt="BEM 2" className="organization-image" data-aos="fade-left" data-aos-delay="300" />
            <img src={bemImage3} alt="BEM 3" className="organization-image" data-aos="fade-left" data-aos-delay="400" />
            <img src={bemImage4} alt="BEM 4" className="organization-image" data-aos="fade-left" data-aos-delay="500" />
            <img src={bemImage5} alt="BEM 5" className="organization-image" data-aos="fade-left" data-aos-delay="600" />
            <img src={bemImage6} alt="BEM 6" className="organization-image" data-aos="fade-left" data-aos-delay="700" />
          </div>
                    <h2 className="organization-name">
            Badan Eksekutif Mahasiswa <span className="organization-period">(2022 - 2023)</span>
        </h2>
        <p className="organization-department">Department Communication and Information - Staff Division Media and Information</p>
        <p className="organization-jobdesk">Jobdesk; manage BEM Polibatam social media accounts, prepare caption text for all BEM Polibatam posts, live reports on BEM Polibatam work program activities, create post sketches that will be edited by the Publication Design Division, and become a committee member for the Communication and Information Division (Kominfo) event </p>
    </div>
</div>

          {/* Konten Kumpulan Anak Seni Polibatam */}
          <div className="organization-border">
              <div className="organization-container" data-aos="fade-down-right" data-aos-delay="200">
                  <div className="organization-images">
                      <img src={kuasImage1} alt="Kumpulan Anak Seni 1" className="organization-image" data-aos="fade-left" data-aos-delay="200" />
                      <img src={kuasImage2} alt="Kumpulan Anak Seni 2" className="organization-image" data-aos="fade-left" data-aos-delay="300" />
                      <img src={kuasImage3} alt="Kumpulan Anak Seni 3" className="organization-image" data-aos="fade-left" data-aos-delay="400" />
                      <img src={kuasImage4} alt="Kumpulan Anak Seni 4" className="organization-image" data-aos="fade-left" data-aos-delay="500" />
                      <img src={kuasImage5} alt="Kumpulan Anak Seni 5" className="organization-image" data-aos="fade-left" data-aos-delay="600" />
                      <img src={kuasImage6} alt="Kumpulan Anak Seni 6" className="organization-image" data-aos="fade-left" data-aos-delay="700" />
                  </div>
                  <h2 className="organization-name">
            Kumpulan Anak Seni Polibatam <span className="organization-period">(2022 - 2024)</span>
        </h2>
                  <p className="organization-department">Divison Traditional Dance - Staff and Kominfo Division Traditional Dance</p>
                  <p className="organization-jobdesk">Jobdesk; conducting weekly routine practice activities for traditional and modern dances, attending events to perform offering dances as opening dances for events in Tanah Melayu, managing the social media accounts of the KuAS Polibatam Bunga Rampai Dance Studio, managing the social media accounts of the KuAS Polibatam Bunga Rampai Dance Studio, and making sketches and editing photos and videos of work program activities</p>
              </div>
          </div>
      </div>
  );
}

export default Organization;