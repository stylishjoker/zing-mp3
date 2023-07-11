import {MdOutlineLibraryMusic} from "react-icons/md"
import {ImRadioChecked2} from "react-icons/im"
import {TbChartArcs} from "react-icons/tb"
import {GiMusicSpell} from "react-icons/gi"
import {BiSolidNotepad} from  "react-icons/bi"

export const sidebarMenu = [
    {
        path:"/ca-nhan",
        text:"cá nhân",
        icon:MdOutlineLibraryMusic
    },
    {
        path:"/",
        text:"Khám phá",
        icon:ImRadioChecked2
    },
    {
        path:"/zingchart",
        text:"#Zingchart",
        icon:TbChartArcs
    },
    {
        path:"/radio",
        text:"radio",
        icon:GiMusicSpell
    },
    {
        path:"/theo-doi",
        text:"Theo dõi",
        icon:BiSolidNotepad
    },
]