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
                <v-btn @click="submit()">등록</v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</template>

<script>
import { dateFormat } from "../mixins/dateFormat"
export default {
    data() {
        return {
            brdTitle: null,
            brdWriter: null,
            brdContent: null,
            list: {}
        }
    },
    methods: {
        submit() {
            if(this.brdTitle === null || this.brdWriter === null || this.brdContent === null) {
                alert("please fill in the blank!");
            } else {                
                var newPostKey = this.$firebase.database().ref().push().key;
                this.$firebase.database().ref().child(newPostKey).set({
                    brdTitle: this.brdTitle,
                    brdWriter: this.brdWriter,
                    brdContent: this.brdContent,
                    brdRegDate: this.getTimestamp(),
                    brdEditDate: this.getTimestamp(),
                    brdHit: 0
                });
                
                this.$router.push({
                    name: 'list'
                });
            }
        }
    },
    mixins: [dateFormat]
}
</script>