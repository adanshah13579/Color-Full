import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'dnp8oj3a', // Your Sanity project ID
  dataset: 'production',
  apiVersion: '2024-01-01', // use today's date
  useCdn: true, // use CDN for fast reads
  // token: process.env.SANITY_API_TOKEN, // Optional: Add if you need authenticated requests
})

// Helper function to safely fetch from Sanity
export async function safeFetch(query, params = {}) {
  try {
    return await sanityClient.fetch(query, params)
  } catch (error) {
    console.error('Sanity fetch error:', error)
    // Return empty array for list queries, null for single item queries
    return query.includes('[0]') ? null : []
  }
}

