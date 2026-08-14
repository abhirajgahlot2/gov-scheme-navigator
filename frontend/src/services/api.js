/**
 * API service layer for Government Scheme Navigator.
 * Sends a POST /query request to the backend with the user's query string.
 *
 * To switch from mock to real backend:
 *   In Home.jsx, replace:
 *     import { mockSearchSchemes as searchSchemes } from '../data/mockData';
 *   with:
 *     import { searchSchemes } from '../services/api';
 */

/**
 * @param {string} query - The user's situation description
 * @returns {Promise<{ schemes: Array }>}
 */
export async function searchSchemes(query) {
  const response = await fetch('/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
