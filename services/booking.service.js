const boom = require('boom');
const { models } = require('./../libs/sequelize');

class BookingService {
  constructor() {}

  async create(data) {
    try {
      const newBooking = await models.Booking.create(data);
      return newBooking;
    } catch (error) {
      throw boom.boomify(error);
    }
  }

  async find() {
    try {
      const bookings = await models.Booking.findAll({
        include: ['evento']
      });
      return bookings;
    } catch (error) {
      throw boom.boomify(error);
    }
  }

  async findOne(id) {
    try {
      const booking = await models.Booking.findByPk(id, {
        include: ['evento']
      });
      return booking;
    } catch (error) {
      throw boom.boomify(error);
    }
  }

  async update(id, changes) {
    try {
      const booking = await this.findOne(id);
      const updatedBooking = await booking.update(changes);
      return updatedBooking;
    } catch (error) {
      throw boom.boomify(error);
    }
  }

  async delete(id) {
    try {
      const booking = await this.findOne(id);
      await booking.destroy();
      return { id };
    } catch (error) {
      throw boom.boomify(error);
    }
  }
}

module.exports = BookingService;