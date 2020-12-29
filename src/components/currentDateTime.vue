<template>
    <div>{{ now }}</div>
</template>

<script>
import { dateFormat } from "../mixins/dateFormat"
export default {
    data() {
        return {
            now: ''
        }
    },
    created() {
        setInterval(() => {
                this.now = this.getDateAndTime(new Date());
            }, 1000);
    },
    mixins: [dateFormat]
}
</script>