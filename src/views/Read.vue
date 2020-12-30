<template>
    <v-layout>
        <v-flex text-sm-center>
            <h1>Board Read</h1>
            <v-card
                class="mx-auto ma-10 mx-10"
                elevation="0"
            >
                <v-card-text class="px-10">
                    <p class="display-1 text--primary">
                        {{ listData.brdTitle }}
                    </p>
                    <p>작성자 : {{ listData.brdWriter }} | 조회수 : {{ listData.brdHit }} | 작성시간 : {{ listData.brdRegDate }} | 수정시간 : {{ listData.brdEditDate }}</p>
                    <div class="text--primary">
                        {{ listData.brdContent }}
                    </div>
                </v-card-text>
                <v-card-actions class="px-10">
                    <v-btn
                        depressed
                        link
                        router :to='{
                            name: "list"
                        }'
                        exact
                    >
                        목록
                    </v-btn>
                    <v-btn
                        depressed
                        color="primary"
                    >
                        수정
                    </v-btn>
                    <v-btn
                        depressed
                        color="error"
                    >
                        삭제
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
<!-- {{ uniKey }} -->
</template>

<script>
export default {
    data() {
        return {
            uniKey: this.$route.params.id,
            listData: {}
        }
    },
    created() {
        this.$firebase.database().ref().child(this.$route.params.id).on('value', (sn) => {
            const listData = sn.val();
            this.listData = listData;
            console.log(listData);
        });
    },
}
</script>