import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function RoomType({selectedRoomType}) {
    return (
        <div>
           <label className='text-slate-400'>Select Room Type</label>
            <Select onValueChange={(value)=>selectedRoomType(value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Room Type"/>
                </SelectTrigger>
                <SelectContent className="absolute  -mt-4 w-full bg-white shadow-lg rounded-md z-10">
                    <SelectItem value="LivingRoom">LivingRoom</SelectItem>
                    <SelectItem value="BedRoom">BedRoom</SelectItem>
                    <SelectItem value="Kitchen">Kitchen</SelectItem>
                    <SelectItem value="office">office</SelectItem>
                    <SelectItem value="Hall">Hall</SelectItem>
                </SelectContent>
            </Select>


        </div>
    )
}

export default RoomType