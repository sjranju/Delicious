import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState<boolean>(true)

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })

        window.addEventListener("offline", () => {
            setOnlineStatus(false)
        })
    }, [])

    return onlineStatus

}

export default useOnlineStatus