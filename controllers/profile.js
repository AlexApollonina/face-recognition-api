const handleProfile = (req, res, postgresDB) => {
const { id } = req.params;
    postgresDB.select('*').from('users').where({id})
    .then(user=> {
        if(user.length){
            res.json(user[0]);
        } else {
            res.status(400).json('Not found')
        }
        
    })
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
    handleProfile: handleProfile
}