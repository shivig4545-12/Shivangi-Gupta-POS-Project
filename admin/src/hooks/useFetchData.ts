import { useEffect, useState, useCallback } from 'react'
export const useFetchData = <DataType>(fn: () => Promise<DataType>) => {
  const [data, setData] = useState<DataType>()
  
  const fetchData = useCallback(async () => {
    const fetchedData = await fn()
    setData(fetchedData)
  }, [fn])
  
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return data
}
