<template>
    <v-layout>
        <v-flex text-sm-center>
            <h1>Board Write</h1>
            <v-form class="ma-10">
                <v-text-field
                    ref="제목"
                    v-model="brdTitle"
                    :rules="[() => !!brdTitle || 'This field is required']"
                    label="제목"
                    required
                ></v-text-field>
                <v-text-field
                    ref="작성자"
                    v-model="brdWriter"
                    :rules="[() => !!brdWriter || 'This field is required']"
                    label="작성자"
                    required
                ></v-text-field>
                <v-textarea
                    ref="내용"
                    v-model="brdContent"
                    :rules="[() => !!brdContent || 'This field is required']"
                    label="내용"
                    counter
                    maxlength="240"
                ></v-textarea>
                <v-btn @click="update()">수정</v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
import { dateFormat } from "../mixins/dateFormat"
export default {
    data() {
        return {
            uniKey: this.$route.params.id,
            brdTitle: null,
            brdWriter: null,
            brdContent: null,
        }
    },
    created() {
        this.$firebase.database().ref().child(this.uniKey).on('value', (sn) => {
            const listData = sn.val();
            this.brdTitle = listData.brdTitle;
            this.brdWriter = listData.brdWriter;
            this.brdContent = listData.brdContent;
        });
    },
    methods: {
        update() {
            if(this.brdTitle == "" || this.brdWriter == "" || this.brdContent == "") {
                alert("please fill in the blank!");
            } else {           
                this.$firebase.database().ref().child(this.uniKey).update({
                    brdTitle: this.brdTitle,
                    brdWriter: this.brdWriter,
                    brdContent: this.brdContent,
                    brdEditDate: this.getTimestamp(),
                });
                
                this.$router.push({
                    name: 'read',
                    params: {
                        id: this.uniKey
                    }
                });
            }
        }
    },
    mixins: [dateFormat]
}
</script>