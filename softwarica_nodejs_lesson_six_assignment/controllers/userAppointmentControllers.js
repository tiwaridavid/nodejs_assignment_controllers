const appointment = require('../models/userAppointmentModels')

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns string
     */
    const createAppointment = async (req, res) => {
        const {date, time} = req.body // Destructuring

        if(!date || !time) { // Validation
            return res.json({success: false,
                message: 'Please enter required fields'
                });
            }

        if(date && !(await validDate(date))){
            return res.json({
                success: false,
                message: 'Please enter valid Date with Format: DD/MM/YYYY'
                }); 
            }
        if(time && !(await validTime(time))){
                return res.json({
                    success: false,
                    message: 'Please enter a valid time with Format: HH:mm'
                });
        }
        
        // Reserved Time
        if(!(await validateReservedTime(time))){
            return res.json({
                success: false,
                message: 'Please select Time other than 15:00.'
            });
        }

        try {
            // User Appointment
            await appointment.create(req.body);
            return res.json({
                success: true,
                message: 'User Appointment has been created.'
            })
        } catch (error) {
          return res.json({
                success: false,
                message: 'Internal server error'
            });
        }
    }

    async function validDate(date) {
        return isNaN(new Date(date));
    }

    async function validTime(time) {
        return time.match('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
    }

    async function validateReservedTime(time) {
        if(time == '15:00'){
            return false;
        }
        return true;
    }


module.exports = {createAppointment};