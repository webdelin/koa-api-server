import {Summary} from '../models';
export default () => async (hash, ctx, next ) => {
  const summary = await Summary.findOne({hash});
  if (!summary) {
    ctx.throw(404, `Summary with id ${hash} not found`);
  }
  ctx.summary = summary;
  await next();
};
