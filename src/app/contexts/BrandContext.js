import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_BRANDS': {
            return {
                ...state,
                brands: action.payload,
            }
        }
        case 'DELETE_BRANDS': {
            return {
                ...state,
                brands: action.payload,
            }
        }
        case 'CLEAR_BRANDS': {
            return {
                ...state,
                brands: action.payload,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const BrandContext = createContext({
    brands: [],
    deleteBrand: () => { },
    clearBrands: () => { },
    getBrands: () => { },
    createBrand: () => { },
})

export const BrandProvider = ({ settings, children }) => {
    const [state, dispatch] = useReducer(reducer, [])

    const deleteBrand = async (brandID) => {
        try {
            const res = await axios.post('/api/notification/delete', {
                id: brandID,
            })
            dispatch({
                type: 'DELETE_BRANDS',
                payload: res.data,
            })
        } catch (e) {
            console.error(e)
        }
    }

    const clearBrands = async () => {
        try {
            const res = await axios.post('/api/notification/delete-all')
            dispatch({
                type: 'CLEAR_BRANDS',
                payload: res.data,
            })
        } catch (e) {
            console.error(e)
        }
    }

    const getBrands = async () => {
        try {
            const res = await axios.post('http://localhost:3000/api/admin/listbrand')
            dispatch({
                type: 'LOAD_BRANDS',
                payload: res.data.data.ListstockbrandsResponce,
            })
        } catch (e) {
            console.error(e)
        }
    }
    const createBrand = async (brand) => {
        try {
            const res = await axios.post('/api/notification/add', {
                brand,
            })
            dispatch({
                type: 'CREATE_BRAND',
                payload: res.data,
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getBrands()
    }, [])
    return (
        <BrandContext.Provider
            value={{
                brands: state.brands,
                deleteBrand,
                clearBrands,
                getBrands,
                createBrand,
            }}
        >
            {children}
        </BrandContext.Provider>
    )
}

export default BrandContext
