const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {

        if (oldest.hasOwnProperty('name') == false) {
            oldest['name'] = person.name;
            oldest['yearOfBirth'] = person.yearOfBirth;
            if (person.hasOwnProperty('yearOfDeath')) {
                oldest['yearOfDeath'] = person['yearOfDeath'];
            }
        } else {

            let currOldestPersonAge, secondAge; 


            
            if (oldest.hasOwnProperty('yearOfDeath')) {
                currOldestPersonAge = getAgeForDeadPerson(oldest.yearOfBirth, oldest.yearOfDeath);
            } else {
                currOldestPersonAge = getAgeForAlivePerson(oldest.yearOfBirth);
            }

            if (person.hasOwnProperty('yearOfDeath')) {
                secondAge = getAgeForDeadPerson(person.yearOfBirth, person.yearOfDeath);
            } else {
                secondAge = getAgeForAlivePerson(person.yearOfBirth);
            }

           oldest = currOldestPersonAge > secondAge ? oldest: person;
        }

        return oldest;
    },{})
};

function getAgeForDeadPerson(yearOfBirth, yearOfDeath){
    return yearOfDeath - yearOfBirth
}

function getAgeForAlivePerson(yearOfBirth){
    return new Date().getFullYear() - yearOfBirth; 
}

// Do not edit below this line
module.exports = findTheOldest;
