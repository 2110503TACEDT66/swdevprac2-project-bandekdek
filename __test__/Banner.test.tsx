import {render, screen} from "@testing-library/react";
import Banner from "@/components/Banner";
describe('Banner', ()=>{
    it('should have an image', ()=>{
        render(<Banner/>);
        const bannerImage = screen.getByRole("img")
        expect(bannerImage).toBeInTheDocument()
    })

})

