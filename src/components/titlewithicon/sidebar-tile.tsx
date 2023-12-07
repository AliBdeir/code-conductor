// ListItemComponent.tsx
import IconButtonComponent from "../icon-button/icon-button";

const TitleWithIconButton = ({ icon, onClick, title }) => (
    <div >
        <span style={{ margin: 0 }}>{title}</span>
        <IconButtonComponent
            icon={icon}
            onClick={onClick}
        />
    </div>
);

export default TitleWithIconButton;