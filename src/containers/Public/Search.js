import React from 'react'
import { SearchItem } from '../../components'
import icons from '../../utils/icons'

const { GrNext, CiLocationOn, LiaCropSolid, MdOutlinePriceChange, FaRegBuilding, FiSearch } = icons

const Search = () => {
    return (
        <div className='p-[10px] bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
            <SearchItem IconBefore={<FaRegBuilding />} fontWeight IconAfter={<GrNext />} text='Phòng trọ, nhà trọ' />
            <SearchItem IconBefore={<CiLocationOn />} IconAfter={<GrNext />} text='Toàn quốc' />
            <SearchItem IconBefore={<MdOutlinePriceChange />} IconAfter={<GrNext />} text='Chọn giá' />
            <SearchItem IconBefore={<LiaCropSolid />} IconAfter={<GrNext />} text='Chọn diện tích' />
            <button
                type='button'
                className='outline-none py-2 px-4 w-full bg-secondary1 rounded-md text-white text-[13.3px] flex items-center justify-center gap-2 font-medium'>
                <FiSearch />
                Tìm kiếm
            </button>
        </div>
    )
}

export default Search