// Enrich public X links without changing the author's notes.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, '_data/security_previews.json');
const notes = JSON.parse(fs.readFileSync(path.join(root, '_data/security_issues.json'), 'utf8'));
const cached = fs.existsSync(target) ? JSON.parse(fs.readFileSync(target, 'utf8')) : {};
const result = {};
for (const note of notes) {
  const match = note.url.match(/^https:\/\/(?:x|twitter)\.com\/([^/]+)\/status\/(\d+)$/);
  if (!match) continue;
  const [, handle, id] = match;
  result[id] = cached[id] || { handle };
  if (result[id].published_at && result[id].image) continue;
  try {
    const response = await fetch(`https://cdn.syndication.twimg.com/tweet-result?id=${id}&lang=en&token=1`, {signal: AbortSignal.timeout(10000)});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const tweet = await response.json();
    if (tweet.id_str !== id || !tweet.created_at) throw new Error('No public post metadata');
    const bindings = tweet.card?.binding_values || {};
    const image = tweet.photos?.[0]?.url || tweet.video?.poster || bindings.summary_photo_image_original?.image_value?.url || bindings.photo_image_full_size_large?.image_value?.url || bindings.thumbnail_image?.image_value?.url;
    const safeImage = image && new URL(image).protocol === 'https:' && new URL(image).hostname === 'pbs.twimg.com';
    result[id] = {handle: tweet.user?.screen_name || handle, name: tweet.user?.name || handle, published_at: tweet.created_at, image: safeImage ? image : '', image_alt: tweet.photos?.[0]?.ext_alt_text || '', checked_at: new Date().toISOString()};
  } catch (error) { console.warn(`${handle}/${id}: ${error.message}; keeping fallback.`); }
}
fs.writeFileSync(target, JSON.stringify(result, null, 2) + '\n');
console.log(`Security previews: ${Object.values(result).filter(p => p.image).length}/${notes.length} images.`);
