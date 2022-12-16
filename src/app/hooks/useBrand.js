import { useContext } from 'react'
import BrandContext from 'app/contexts/BrandContext'

const useBrand = () => useContext(BrandContext)

export default useBrand
