import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		name: "world",
	},
});

function test() {
	return new Promise((res, err) => {
		setTimeout(() => res("hewo"), 2000);
	});
}

async function testTimeout() {
	let data = await test();
	return data;
}

async function finalTest() {
	let test = await testTimeout();
	console.log(test);
}

finalTest();

export default app;
