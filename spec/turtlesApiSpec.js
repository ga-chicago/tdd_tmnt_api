var frisby = require('frisby');
var url = 'http://localhost:3000/';

// when testing a REST api you should follow this order:
// create
// ready
// update
// destroy
// by doing so you remove the ability for another party to modify your test data
// since you create the data yourself


frisby.create('Create an entry via POST')
  .post(url + 'turtles', {
    name: 'Testy McTestingson',
    weapon: 'Pizza Sword',
    colour: 'limegreen'
  })
  // 'afterJSON' automatically parses response body as JSON and passes it as an argument
  .afterJSON(function(character) {

    var characterId = character['_id'];

    describe('a restful controller', function() {

      it('can create a new entry on the API', function() {

        expect(character.hasOwnProperty('name')).toBe(true);
        expect(character.hasOwnProperty('weapon')).toBe(true);
        expect(character.hasOwnProperty('colour')).toBe(true);

        expect(character['name']).toEqual('Testy McTestingson');
        expect(character['weapon']).toEqual('Pizza Sword');
        expect(character['colour']).toEqual('limegreen');

      });

      it('can update an entry on the API', function() {

        frisby.create('Update character')
          .put(url + 'turtles/' + characterId, { forceUser: true })
          .expectStatus(200)
          .afterJSON(function(json) {


            expect(json.hasOwnProperty('_id')).toBe(true);

            expect(json['_id']).toEqual(characterId);

          })
        .toss();

      });

      it('can get an entry it created from the API', function() {

        frisby.create('Get')
          .get(url + 'turtles/' + characterId)
          .expectStatus(200)
          .afterJSON(function(json) {

            expect(json.hasOwnProperty('_id')).toBe(true);

            expect(json['_id']).toEqual(characterId);
            expect(character['colour']).toEqual('purple');



          })
        .toss();

      });

      it('can delete an entry it created from the API', function() {

        frisby.create('Get')
          .delete(url + 'turtles/' + characterId)
          .expectStatus(200)
        .toss();

      });



    });

  })
.toss();
