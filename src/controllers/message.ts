import { Context } from 'https://deno.land/x/grammy/mod.ts';

const message = async (ctx: Context) => {
  if (ctx.message?.text) return await ctx.reply(ctx.message.text);
  if (ctx.message?.voice) return await ctx.replyWithVoice(ctx.message.voice.file_id);
  if (ctx.message?.audio) return await ctx.replyWithAudio(ctx.message.audio.file_id);
  if (ctx.message?.video) return await ctx.replyWithVideo(ctx.message.video.file_id);
  if (ctx.message?.photo) return await ctx.replyWithPhoto(ctx.message.photo[1].file_id);
  if (ctx.message?.sticker) return await ctx.replyWithSticker(ctx.message.sticker.file_id);
  if (ctx.message?.document) return await ctx.replyWithDocument(ctx.message.document.file_id);
  if (ctx.message?.animation) return await ctx.replyWithAnimation(ctx.message.animation.file_id);
  if (ctx.message?.contact) return await ctx.replyWithContact(ctx.message.contact.phone_number, ctx.message.contact.first_name);
  if (ctx.message?.poll) { const opts: string[] = []; ctx.message.poll.options.forEach(i => opts.push(i.text)); return await ctx.replyWithPoll(ctx.message.poll.question, opts) }
  if (ctx.message?.location) return await ctx.replyWithLocation(ctx.message.location.latitude, ctx.message.location.longitude);
  if (ctx.message?.dice) return await ctx.replyWithDice(ctx.message.dice.emoji);
}

export { message };