export default async function Page({ params }: { params: Promise<unknown> }) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const p = await params;

	return (
		<div>
			<h1>Test Page</h1>
			<pre>{JSON.stringify(p, null, 2)}</pre>
		</div>
	);
}
