<template>
    <v-layout>
        <v-flex text-sm-center>
            <h1>Board List</h1>
            <v-data-table
                :headers="headers"
                :items="boardLists"
                :page.sync="page"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1 ma-10"
                @page-count="pageCount = $event"
            >
                <template #item.brdTitle="{ item }">
                    <a @click="$router.push({
                        name: 'read',
                        params: {
                            id: item.brdUniKey
                        }
                    })">
                        {{ item.brdTitle }}
                    </a>
                </template>
            </v-data-table>
            <div class="text-center pt-2">
                <v-pagination
                    v-model="page"
                    :length="pageCount"
                ></v-pagination>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import { dateFormat } from "../mixins/dateFormat"
    export default {
        data () {
            return {
                page: 1,
                pageCount: 0,
                itemsPerPage: 5,
                headers: [
                    {
                        text: '번호',
                        align: 'center',
                        value: 'brdNum',
                    },
                    {
                        text: '제목',
                        sortable: false,
                        align: 'center',
                        value: 'brdTitle'
                    },
                    {
                        text: '작성자',
                        sortable: false,
                        align: 'center',
                        value: 'brdWriter'
                    },
                    {
                        text: '작성일시',
                        align: 'center',
                        value: 'brdRegDate'
                    },
                    {
                        text: '조회수',
                        align: 'center',
                        value: 'brdHit'
                    },
                ],
                boardLists: []
            }
        },
        created() {
            this.$firebase.database().ref().on('value', (sn) => {
                var index = 1;
                const listData = sn.val();
                
                for (const uniKey in listData) {
                    listData[uniKey].brdNum = index;
                    listData[uniKey].brdRegDate = this.getDateAndTime(listData[uniKey].brdRegDate);
                    listData[uniKey].brdUniKey = uniKey;
                    this.boardLists.unshift(listData[uniKey]);
                    index++;
                }                
            });
        },
        mixins: [dateFormat]
    }
</script>