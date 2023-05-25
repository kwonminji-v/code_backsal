import Category from "../components/common/Category";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";


const WritePage = () => {
    return(
        <Responsive>
            <EditorContainer/>
            <TagBoxContainer/>
            <Category />
            <WriteActionButtonsContainer />
        </Responsive>
    )
}

export default WritePage;