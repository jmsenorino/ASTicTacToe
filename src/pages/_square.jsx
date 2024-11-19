export default function Square({ value, onClick }){
    return (
        <div onClick={onClick} className={"bg-white w-20 h-20 text-black flex items-center justify-center "}>
            {value}
        </div>
    );
}