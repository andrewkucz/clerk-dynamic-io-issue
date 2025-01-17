export default async function Page({
	searchParams,
}: { searchParams: Promise<unknown> }) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const s = await searchParams;

	return (
		<div>
			<h1>Dynamic Page</h1>
			<pre>{JSON.stringify(s, null, 2)}</pre>
		</div>
	);
}
