import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT
    }
};

const mailing = {
    apiKey: process.env.SENDGRID_API_KEY
}

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    logging: false,
    timezone: '+01:00'
});

export{
    sequelize,
    mailing
};
