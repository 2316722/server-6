// 今回はクライアントサイドもルーティングもないので何もimportしない
const kv = await Deno.openKv();

//set
await kv.set(['妖精', 'エルフィン'], { color: 'green', lank: 3 });
await kv.set(['妖精', 'マヨ'], { color: 'red', lank: 3 });
await kv.set(['妖精', 'マリー'], { color: 'yellow', lank: 2 });

//get
const get = await kv.get(['妖精', 'エルフィン']);
console.log(get);

//list
const list = await kv.list({ prefix: ['妖精'] });
for await (const e of list) {
  console.log(e.key[1] + ':' + e.value.color);
}

//delete
await kv.delete(['妖精', 'マリー']);
const list2 = await kv.list({ prefix: ['妖精'] });
for await (const e of list2) {
  console.log(e.key[1] + ':' + e.value.color);
}
