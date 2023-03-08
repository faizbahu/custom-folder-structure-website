<script setup>
import { useFolderStore } from "@/Stores/Folder";
import { ref } from "vue";
import FolderList from "@/Components/FolderList.vue";
import { uuid } from "vue-uuid";

let props = defineProps(['item'])

let store = useFolderStore()

let item = ref(props.item)

function addChild() {
    item.value.children.push({
        'id': uuid.v4(),
        'name': 'New One',
        'permission': '',
        children: []
    })
}
</script>

<template>
    <li class="input-elements relative">
        <svg class="hr" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <br>
        <div class="flex items-center">
            <input v-model="item.name" class="shadow-xl rounded-md" type="text"/>
            <button type="button" @click="addChild(item)">
                <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
        <template v-if="item.children" :key="`child-${item.id}`">
            <FolderList :list="item.children"/>
        </template>
    </li>
</template>
