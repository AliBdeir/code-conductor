import IconButton from "@mui/material/IconButton";

// ListItemComponent.tsx
const TitleWithIconButton = ({ icon, onClick, title }: { icon: React.ReactNode, onClick: React.MouseEventHandler, title: string }) => (
    <div className='flex flex-row items-center align-middle w-full'>
        <div>{title}</div>
        <div className='flex-1 flex justify-end'><IconButton onClick={onClick}>{icon}</IconButton></div>
    </div>
);

export default TitleWithIconButton;