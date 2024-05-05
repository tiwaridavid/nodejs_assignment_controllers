const user = require('../models/userModels')

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns string
     */
    const createUser = async (req, res) => {
        const {name, phone, email} = req.body // Destructuring

        if(!name || !phone || !email) { // Validation
            return res.json({success: false,
                message: 'Please enter required fields'
                });
            }
        try {
            // Existing user
            const duplicateUser = await getUser(phone);
            if(duplicateUser) {
                return res.json({
                success: false,
                message: `User with phone: ${phone} already exists.`
            });
            }

            // User store
            await user.create(req.body);
            return res.json({
                success: true,
                message: 'User has been created.'
            })
        } catch (error) {
          return res.json({
                success: false,
                message: 'Internal server error'
            });
        }
    }

    /**
     * 
     * @param {*} phone 
     * @returns user
     */
    const getUser = async (phone) => {
        return await user.findOne({phone: phone});
    }

module.exports = {createUser};