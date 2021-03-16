//import api_petStore from './pageObjects';
import body from '../fixtures/pageObjects/body';
import bodyUpdate from '../fixtures/pageObjects/bodyUpdate';


describe('API Testing PetStore', () =>{

    
    it ('POST - Add a new pet to the store', function(){

        cy.request({
            method: 'POST',
            url:"/pet",
            body:body,
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            expect(response.status).equal(200)
            expect(response.body).to.deep.equal(body);
        });
    });

    it('GET - Find pet by ID', function(){
        cy.request({
            url:"/pet/9989898999"
        }).then(function(response){
            expect(response.status).equal(200);
            expect(response.body).to.deep.equal(body)
        })
    });

    
    it ('PUT - Update an existing pet', function(){

        cy.request({
            method: 'PUT',
            url:"/pet",
            body:bodyUpdate,
            headers:{
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).then(function(response){
            expect(response.status).equal(200)
            expect(response.body).to.deep.equal(bodyUpdate);
        });
    });
});