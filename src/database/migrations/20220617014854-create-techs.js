"use strict";

const sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("techs", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("techs");
    },
};
