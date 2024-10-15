import React from 'react'
import Sidebar from '../components/Sidebar'

const Settings = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <Sidebar />
                </div>
                <div className='w-full p-2'>
                    <div className='text-3xl font-semibold p-2'>
                        <h1>Settings</h1>
                    </div>
                    <hr />
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
