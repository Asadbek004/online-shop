import React from 'react'
import styled from 'styled-components'
import Hero from '../../components/Product/Hero/Hero'
import Product from '../../components/Product/Product'
import Search from '../../components/Product/Search'

const ProductCom = () => {
    return (
        <div>
            <Hero />
            <Card>
                <Search />
                <Product />
            </Card>
           
        </div>
    )
}

const Card = styled.div`
    display: flex;

`

export default ProductCom
