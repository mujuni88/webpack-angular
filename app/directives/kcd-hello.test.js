export default  ngModule => {
    "use strict";
    describe(`kcd-hello`, () => {
        beforeEach(window.module(ngModule.name));
        
        it(`should test properly`, () => {
            expect(true).to.be.true;
        })
    });

}