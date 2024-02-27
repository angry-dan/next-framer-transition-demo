
import CloseButton from "./CloseButton";
export default function Layout({children}: {children: React.ReactNode}){
    return <div>
        <CloseButton />
        {children}
        </div>;
}


