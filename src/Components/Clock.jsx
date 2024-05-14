import useTime from "./useTime";

const Clock=() =>{
    const time = useTime();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM':'AM';

    return(
        <div>
            <h1>
                {hours % 12|| 12}:{minutes.toString()}:{seconds.toString()} {ampm}
            </h1>
        </div>
    );
}
export default Clock;

