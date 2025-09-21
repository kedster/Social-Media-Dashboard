/**
 * Social Media Dashboard API
 * Cloudflare Worker providing API endpoints for the dashboard
 */

// Types matching the frontend expectations
interface DataFake {
	readonly id: string;
	nickname: string;
	followers: number;
	followersOverview: number;
	readonly type: string;
	status: boolean;
}

interface FakeOverviewData {
	readonly id: string;
	title: string;
	total: number;
	percent: number;
	readonly type: string;
	status: boolean;
}

// Mock data generators
function generateDataFake(): DataFake[] {
	const platforms = ['twitter', 'facebook', 'instagram', 'youtube'];
	const nicknames = ['@nathanf', '@realnathanf', '@nathanf_', '@nathanforester'];
	
	return platforms.map((platform, index) => ({
		id: (index + 1).toString(),
		nickname: nicknames[index],
		followers: Math.floor(Math.random() * 100000) + 1000,
		followersOverview: Math.floor(Math.random() * 1000) + 100,
		type: platform,
		status: Math.random() > 0.5
	}));
}

function generateFakeOverviewData(): FakeOverviewData[] {
	const titles = [
		'Page Views', 'Likes', 'Likes', 'Profile Views',
		'Retweets', 'Likes', 'Profile Views', 'Total Views'
	];
	const platforms = ['facebook', 'facebook', 'instagram', 'instagram', 'twitter', 'twitter', 'youtube', 'youtube'];
	
	return titles.map((title, index) => ({
		id: (index + 1).toString(),
		title,
		total: Math.floor(Math.random() * 10000) + 100,
		percent: Math.floor(Math.random() * 100) + 1,
		type: platforms[index],
		status: Math.random() > 0.5
	}));
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);
		
		// Enable CORS for frontend
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		};

		// Handle preflight requests
		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}

		switch (url.pathname) {
			case '/api/dataFake':
				return new Response(JSON.stringify(generateDataFake()), {
					headers: {
						'Content-Type': 'application/json',
						...corsHeaders,
					},
				});

			case '/api/fakeOverview':
				return new Response(JSON.stringify(generateFakeOverviewData()), {
					headers: {
						'Content-Type': 'application/json',
						...corsHeaders,
					},
				});

			case '/api/health':
				return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
					headers: {
						'Content-Type': 'application/json',
						...corsHeaders,
					},
				});

			default:
				return new Response('Not Found', { 
					status: 404,
					headers: corsHeaders,
				});
		}
	},
} satisfies ExportedHandler<Env>;
