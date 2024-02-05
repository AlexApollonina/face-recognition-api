const handleImage = (req, res, postgresDB) => {
    const { id, entries } = req.body;
    postgresDB('users').where('id', '=', id).increment('entries', 1).returning('entries')
    .then(entries => {
       res.json(entries[0].entries);
    })
    .catch(err => res.status(400).json('unable get entries'))
}

module.exports =  {
    handleImage: handleImage
}