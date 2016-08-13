import test from 'ava';
import fn from './';

test('main', t => {
	t.is(fn('abcde'), 5);
	t.is(fn('古池や'), 6);
	t.is(fn('あいうabc'), 9);
	t.is(fn('ノード.js'), 9);
	t.is(fn('你好'), 4);
	t.is(fn('안녕하세요'), 10);
	t.is(fn('A\ud83c\ude00BC'), 5, 'surrogate');
	t.is(fn('\u001b[31m\u001b[39m'), 0);
});

test('ignores control characters', t => {
	t.is(fn(String.fromCharCode(0)), 0);
	t.is(fn(String.fromCharCode(31)), 0);
	t.is(fn(String.fromCharCode(127)), 0);
	t.is(fn(String.fromCharCode(134)), 0);
	t.is(fn(String.fromCharCode(159)), 0);
	t.is(fn('\u001b'), 0);
});
