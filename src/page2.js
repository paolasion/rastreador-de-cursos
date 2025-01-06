import React, { useState } from 'react';

const Page2 = () => {
  const [courses, setCourses] = useState([]);
  const [podcasts, setPodcasts] = useState('');
  const [videos, setVideos] = useState('');

  const showCourses = (area) => {
    let coursesArray = [];
    let podcastsHTML = '';
    let videosHTML = '';

    if (area === 'juridico') {
      coursesArray = [
        { title: "Direito Empresarial - Coursera", link: "https://www.coursera.org/search?query=juridico" },
        { title: "Gestão de Contratos - Udemy", link: "https://www.udemy.com/courses/search/?src=ukw&q=juridico" }
      ];
    } 
    if (area === 'marketing') {
      coursesArray = [
        { title: "Marketing Digital - Coursera", link: "https://www.coursera.org/search?query=marketing" },
        { title: "Marketing de Conteúdo - Udemy", link: "https://www.udemy.com/courses/search/?src=ukw&q=marketing" }
      ];
    }
    if (area === 'vendas') {
      coursesArray = [
        { title: "Técnicas de Vendas - Coursera", link: "https://www.coursera.org/search?query=vendas" },
        { title: "Estratégias de Vendas - Udemy", link: "https://www.udemy.com/courses/search/?src=ukw&q=vendas" }
      ];
    }
    if (area === 'tecnologia') {
      coursesArray = [
        { title: "Introdução à TI - Coursera", link: "https://www.coursera.org/search?query=tecnologia+da+informacao" },
        { title: "Fundamentos de TI - Udemy", link: "https://www.udemy.com/courses/search/?src=ukw&q=tecnologia+da+informacao" }
      ];
    }
    if (area === 'saude') {
      coursesArray = [
        { title: "Segurança no Trabalho - Coursera", link: "https://www.coursera.org/search?query=saude+e+seguranca+no+trabalho" },
        { title: "Saúde Ocupacional - Udemy", link: "https://www.udemy.com/courses/search/?src=ukw&q=saude+e+seguranca+no+trabalho" }
      ];
    }

    podcastsHTML = <a href={`https://open.spotify.com/search/${area}`} target="_blank" rel="noopener noreferrer">Podcasts sobre {area}</a>;
    videosHTML = <a href={`https://www.youtube.com/results?search_query=${area}`} target="_blank" rel="noopener noreferrer">Vídeo-aulas sobre {area}</a>;

    setCourses(coursesArray);
    setPodcasts(podcastsHTML);
    setVideos(videosHTML);
  };

  return (
    <div className="container">
      <h1>Escolha sua área de atuação</h1>

      <div className="button-container">
        <button onClick={() => showCourses('juridico')}>Jurídico</button>
        <button onClick={() => showCourses('marketing')}>Marketing</button>
        <button onClick={() => showCourses('vendas')}>Vendas</button>
        <button onClick={() => showCourses('tecnologia')}>Tecnologia da Informação</button>
        <button onClick={() => showCourses('saude')}>Saúde e Segurança no Trabalho</button>
      </div>

      <div className="results-container">
        <div className="results-column">
          <h2>Cursos Indicados</h2>
          {courses.map((course, index) => (
            <a key={index} href={course.link} target="_blank" rel="noopener noreferrer">{course.title}</a>
          ))}
        </div>
        <div className="results-column">
          <h2>Spotify Podcasts</h2>
          {podcasts}
        </div>
        <div className="results-column">
          <h2>Vídeo-aulas no YouTube</h2>
          {videos}
        </div>
      </div>
    </div>
  );
};

export default Page2;
