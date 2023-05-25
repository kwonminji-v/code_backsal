import {
  SideLeftBox,
  SideRightBox,
} from "./detail_hy_component";
import style from "../css/detail_hy.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Asdfsadf() {
  const {contentsId} = useParams();
  const data = useSelector(store => store.dataSet),
        selectedData = data.contentsData.find((x) => x.id === contentsId);

  return (
    <div className={style.detail_box}>
      <SideLeftBox />
      <SideRightBox data={selectedData}/>
    </div>
  );
}
export default Asdfsadf;