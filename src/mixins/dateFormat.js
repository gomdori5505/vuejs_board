export const dateFormat = {
    methods: {
        getTimestamp() {
            const now = new Date();
            const timestamp = now.getTime();
            return timestamp;
        },
        getDateAndTime(timestamp) {
            if(timestamp !== null) {
                const year = new Date(timestamp).getFullYear(),
                month = new Date(timestamp).getMonth(),
                day = new Date(timestamp).getDate(),
                hour = new Date(timestamp).getHours(),
                min = new Date(timestamp).getMinutes(),
                sec = new Date(timestamp).getSeconds();
                
                return `${this.addZero(year)}-${this.addZero(month)}-${this.addZero(day)} ${this.addZero(hour)}:${this.addZero(min)}:${this.addZero(sec)}`;
            } else{
                return null;
            }
        },
        addZero(num) {
            if(num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }
    },
}