const reservation = require('../models/userReservationModels')

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns string
     */
    const createReservation = async (req, res) => {
        const {userId, eventDate, numberOfGuests} = req.body // Destructuring

        if(!userId || !eventDate || !numberOfGuests) { // Validation
            return res.json({success: false,
                message: 'Please enter required fields'
                });
            }
        if(numberOfGuests <= 0){
            return res.json({
                success: false,
                message: 'Please enter valid number of guests.'
                }); 
            }
        if(eventDate){
            const today = new Date(Date.now());
            if(new Date(eventDate) < today){
                return res.json({
                    success: false,
                    message: 'Event date must be in future.'
                })
            }
        }
        const params = {
            userId: Number(userId),
            numberOfGuests: Number(numberOfGuests),
            eventDate
        }
        try {
            // User Reservation
            await reservation.create(params);
            return res.json({
                success: true,
                message: 'User Reservation has been created.'
            })
        } catch (error) {
          return res.json({
                success: false,
                message: 'Internal server error'
            });
        }
    }

module.exports = {createReservation};