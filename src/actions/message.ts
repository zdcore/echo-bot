import { bot } from '../core/bot.ts';
import { message } from '../controllers/index.ts';

bot.on('message', message);