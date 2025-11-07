// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

await kv.set(['妖精', 'エルフィン'], { color: 'green', lank: 3 });
await kv.set(['妖精', 'マヨ'], { color: 'red', lank: 3 });
await kv.set(['妖精', 'マリー'], { color: 'yellow', lank: 2 });

const get = await kv.get(['妖精', 'エルフィン']);
console.log(get);

const list = await kv.list({ prefix: ['妖精'] });

for await (const e of list) {
  console.log(e.key);
  console.log(e.value.color);
}
