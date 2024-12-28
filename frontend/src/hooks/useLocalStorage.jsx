import React, {useState, useEffect} from 'react'

function useLocalSorage(key, firstValue = null){
    const initialValue = localStorage.getItem(key) || firstValue

    const [item, setItem] = useState(initialValue)

    useEffect(
        function setKeyInLocalStorage(){
            if(item === null){
                localStorage.removeItem(key)
            } else{
                localStorage.setItem(key, item)
            }
        },
        [key, item]
    )

    return [item, setItem]

}

export default useLocalSorage