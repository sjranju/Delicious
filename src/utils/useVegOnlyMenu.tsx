import React, { useEffect, useState } from "react"

const useVegOnlyMenu = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return ({ isChecked, setIsChecked })
}

export default useVegOnlyMenu