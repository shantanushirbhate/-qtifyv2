import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Section.module.css";
import AlbumCard from "../card/Albumcard";

function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setAlbums(res.data);
      } catch (err) {
        console.error("Error fetching albums:", err);
      }
    };
    fetchAlbums();
  }, [fetchUrl]);

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.toggleBtn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {/* Conditional Rendering */}
      {showAll ? (
        <div className={styles.gridView}>
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className={styles.swiper}
        >
          {albums.slice(0, 10).map((album) => (
            <SwiperSlide key={album.id}>
              <AlbumCard
                image={album.image}
                title={album.title}
                follows={album.follows}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default Section;
