// 18:00 -> ["18", "00"] -> [18, 00]

function convertHourStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number);

    const minutesAmount = (hours * 60) + minutes;


    return minutesAmount;
}







