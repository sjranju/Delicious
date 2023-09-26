import React from "react"
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const Error = () => {

    const error = useRouteError()
    console.log(error)
    return (
        <div>
            {isRouteErrorResponse(error) ?
                <><h1>{error?.status}-{error?.statusText}</h1><h2>{error?.data}</h2></>
                : ''
            }

        </div>
    )
}

export default Error