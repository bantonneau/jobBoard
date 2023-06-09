const bcrypt = require('bcrypt');
const { User } = require('../models');

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(401).json({ error: 'Invalid Login' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'There was a problem with the server' });
    }
  },

  logout: (req, res) => {
    res.json({ message: 'Logout successful' });
  },
};

module.exports = authController;

