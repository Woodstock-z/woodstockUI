import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './views/SwitchDemo.vue'
import Button from './views/ButtonDemo.vue'
import Dialog from './views/Dialog.vue'
import TabsDemo from './views/TabsDemo.vue'
import Distribution from './views/DistributionDemo.vue'
import Pie from './views/PieDemo.vue'
import Line from './views/LineDemo.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'switch',component:Switch},
            {path:'button',component:Button},
            {path:'dialog',component:Dialog},
            {path:'tabs',component:TabsDemo},
            {path:'distribution',component:Distribution},
            {path:'pie',component:Pie},
            {path:'line',component:Line}
        ]}
    ]
})