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

    store = useFolderStore()
}
</script>

<template>
    
    <li class="input-elements relative">
        <svg class="hr" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <br>
        <div class="flex items-center">
            <div class="input-group flex">
            <input v-model="item.name" class="shadow-xl rounded-l-md" type="text"/>
            <input min="1" max="777" type="number" class="border-l-0 rounded-r-md shadow-xl w-16">
            </div>
            <div class="flex">
            <button type="button" @click="addChild(item)">
                <svg class="rounded-full ml-3 border-2 border-blue-700 w-6 h6 text-blue-700 hover:bg-blue-800 hover:text-white hover:rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
            <button>
                <svg class="border-2 ml-3 rounded-full border-red-600 w-6 h-6 text-red-600 hover:bg-red-700 hover:text-white hover:rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            </div>
        </div>
        <template v-if="item.children" :key="`child-${item.id}`">
            <FolderList :list="item.children"/>
        </template>
    </li>
</template>
