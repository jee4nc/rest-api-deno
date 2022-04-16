export function responseFormatter(
  ctx: any,
  body: any,
  status: number,
  type: string
): void {
  ctx.response.body = body;
  ctx.response.status = status;
  ctx.response.type = type;
}
