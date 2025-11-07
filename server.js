// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

await kv.set(['妖精', 'エルフィン'], { color: 'green', lank: 3 });
await kv.set(['妖精', 'マヨ'], { color: 'red', lank: 3 });
await kv.set(['妖精', 'マリー'], { color: 'yellow', lank: 2 });

const a = await kv.get(['妖精', 'エルフィン']);
console.log(a);
