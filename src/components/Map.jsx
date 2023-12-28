/* eslint-disable no-unused-vars */
import {
  useNavigationType,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Position: {lat}, {lng}
    </div>
  );
}

export default Map;
