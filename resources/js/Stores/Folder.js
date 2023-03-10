import { defineStore } from "pinia";
import { uuid } from "vue-uuid";

export const useFolderStore = defineStore('folder', {
    state() {
        let structure = [
            {
                id: uuid.v4(),
                name: 'D1',
                permission: '',
                children: [
                    {
                        id: uuid.v4(),
                        name: 'D11',
                        permission: '',
                        children: [
                            {
                                id: uuid.v4(),
                                name: 'D111',
                                permission: '',
                                'children': []
                            }
                        ]
                    }
                ],
            },
            {
                id: uuid.v4(),
                name: 'D2',
                permission: '',
                children: [
                    {
                        id: uuid.v4(),
                        name: 'D22',
                        permission: '',
                        children: []
                    }
                ],
            }
        ];

        if (localStorage.getItem("folder-structure")) {
            structure = JSON.parse(localStorage.getItem("folder-structure"));
        }

        return {
            structure
        }
    },

    getters: {},

    actions: {
        addChild(item) {
            this.findDeep(this.structure, item)
        },

        findDeep(obj, id) {
            return obj.forEach(function(e) {
                console.log(e.id)
                if (e.id === id) {
                    return e;
                }
                else if (e.children) {
                    return this.findDeep(e.children, id)
                }
            })
        }
    }
})
