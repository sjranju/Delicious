import { useEffect, useState } from "react"

interface iOnlineStatus {
    isOnline: boolean,
    backOnline: boolean
}

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState<iOnlineStatus>({ isOnline: true, backOnline: false })

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(prev => { return { isOnline: true, backOnline: !prev.backOnline && true } })
        })

        window.addEventListener("offline", () => {
            setOnlineStatus({ isOnline: false, backOnline: false })
        })
    }, [])

    return { onlineStatus }

}

export default useOnlineStatus