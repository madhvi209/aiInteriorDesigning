import React from 'react';
import PropTypes from 'prop-types';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function RoomType({ selectedRoomType }) {
    return (
        <div>
            <label className='text-slate-400'>Select Your Room Type *</label>
            <div className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                <Select onValueChange={(value) => selectedRoomType(value)}>
                    <SelectTrigger className="w-[300px]">
                        <SelectValue placeholder="e.g., Living Room, Bedroom, Kitchen" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-200">
                        <SelectItem value="Living Room">Living Room</SelectItem>
                        <SelectItem value="Bedroom">Bedroom</SelectItem>
                        <SelectItem value="Kitchen">Kitchen</SelectItem>
                        <SelectItem value="Office">Office</SelectItem>
                        <SelectItem value="Dinning Hall">Dinning Hall</SelectItem>
                        <SelectItem value="Pooja Room">Pooja Room</SelectItem>
                        <SelectItem value="Sitting Area">Sitting Area</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}

RoomType.propTypes = {
    selectedRoomType: PropTypes.func.isRequired,
};
