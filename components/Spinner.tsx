import React from 'react'
import './spinner.scss'

function Spinner({ width, height, style }: { width?: string, height?: string, style?: React.CSSProperties }) {
    return (
        <div className='loading-spinner-container'
        >
            <div className='loading-spinner' style={{
                width: width ? width : '100%',
                height: height ? height : '100%',
                ...style
            }}></div>
        </div>
    )
}

export default Spinner