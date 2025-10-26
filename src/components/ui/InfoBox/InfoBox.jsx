import Panel from "../CustomUI/Panel";
import useSceneState from "../../../hooks/UseSceneState";

function InfoBox({ title}) {

    const state = useSceneState((s) => s.sceneState);

    let message = JSON.stringify(state, null, 2);

    return (
        <div className="ui-info-box">
            <h3>{title}</h3>
            <Panel displayMessage={message} />
        </div>
    );
}
export default InfoBox;