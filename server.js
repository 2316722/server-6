// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

await kv.set(['妖精', 'エルフィン'], { color: green, lank: 3 });
