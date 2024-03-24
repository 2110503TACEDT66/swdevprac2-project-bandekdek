import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Cars from '@/app/(info)/cars/page'
import CarCatalog from '@/components/CarCatalog'
import Card from '@/components/Card'

// jest.mock('../src/components/CarCatalog')
jest.mock('../src/components/Card')

// describe('Cars page', ()=>{
//     it('Should contain cards', ()=>{
//         render(<Cars />)
//         expect(CarCatalog).toHaveBeenCalledTimes(1)
//     })
// })

// describe('Car catalog', ()=>{
//     it('Should contain four cars', ()=>{
//         render(<CarCatalog />)
//         const cardImages = screen.queryAllByRole("img");
//         expect(cardImages).toHaveLength(4)
//     })
// })