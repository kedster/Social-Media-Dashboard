import { env, createExecutionContext, waitOnExecutionContext, SELF } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';
import worker from '../src';

describe('Social Media Dashboard API', () => {
	describe('Health endpoint', () => {
		it('responds with health status (unit style)', async () => {
			const request = new Request<unknown, IncomingRequestCfProperties>('http://example.com/api/health');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			
			expect(response.status).toBe(200);
			const data = await response.json();
			expect(data).toHaveProperty('status', 'ok');
			expect(data).toHaveProperty('timestamp');
		});

		it('responds with health status (integration style)', async () => {
			const request = new Request('http://example.com/api/health');
			const response = await SELF.fetch(request);
			
			expect(response.status).toBe(200);
			const data = await response.json();
			expect(data).toHaveProperty('status', 'ok');
		});
	});

	describe('Data endpoints', () => {
		it('returns dataFake array (unit style)', async () => {
			const request = new Request<unknown, IncomingRequestCfProperties>('http://example.com/api/dataFake');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			
			expect(response.status).toBe(200);
			const data = await response.json();
			expect(Array.isArray(data)).toBe(true);
			expect(data).toHaveLength(4);
			expect(data[0]).toHaveProperty('id');
			expect(data[0]).toHaveProperty('nickname');
			expect(data[0]).toHaveProperty('followers');
			expect(data[0]).toHaveProperty('type');
		});

		it('returns fakeOverview array (integration style)', async () => {
			const request = new Request('http://example.com/api/fakeOverview');
			const response = await SELF.fetch(request);
			
			expect(response.status).toBe(200);
			const data = await response.json();
			expect(Array.isArray(data)).toBe(true);
			expect(data).toHaveLength(8);
			expect(data[0]).toHaveProperty('id');
			expect(data[0]).toHaveProperty('title');
			expect(data[0]).toHaveProperty('total');
		});
	});

	describe('404 handling', () => {
		it('returns 404 for unknown endpoints', async () => {
			const request = new Request('http://example.com/unknown');
			const response = await SELF.fetch(request);
			
			expect(response.status).toBe(404);
			expect(await response.text()).toBe('Not Found');
		});
	});
});
