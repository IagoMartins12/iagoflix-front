import { CourseType, EpisodeType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

interface props {
    episode: EpisodeType
    course: CourseType
}


const EpisodeList = ({ episode, course } : props) => {
    const router = useRouter()

    const handleSecondsToMin = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
      
        const timeArr = [hours, minutes, seconds].map((num) => num.toString().padStart(2, "0"));
      
        if (hours > 0) {
          return `${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
        } else {
          return `${timeArr[1]}:${timeArr[2]}`;
        }
      };
      

    const handlerEpisodePlayer = () => {
        router.push(`/courses/episode/${episode.order - 1}?courseid=${course.id}&episodeid=${episode.id}`)
    }
    return (
        <>
           	<div className={styles.episodeCard} onClick={handlerEpisodePlayer}>
                <div className={styles.episodeOrderTime}>
                    <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
                    <p className={styles.episodeTime}>{handleSecondsToMin(episode.secondsLong)}</p>
                </div>
                <div className={styles.episodeTitleDescription}>
                    <p className={styles.episodeTitle}>{episode.name}</p>
                    <p className={styles.episodeDescription}>{episode.synopsis}</p>
                </div>
            </div>
        </>
    )
}

export default EpisodeList