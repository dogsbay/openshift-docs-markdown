{%- set _mod_docs_content_type = "REFERENCE" %}
# OAuth token request flows and responses {id="oauth-token-request-flows_{{ context }}"}

The OAuth server supports standard authorization code grant and implicit grant flows, with specific server responses for token requests using the implicit grant flow with WWW-Authenticate challenges. {._abstract}

When requesting an OAuth token using the implicit grant flow (`response_type=token`) with a client_id configured to request `WWW-Authenticate challenges` (like `openshift-challenging-client`), these are the possible server responses from `/oauth/authorize`, and how they should be handled:

<table>
<thead>
<tr>
  <th>Status</th>
  <th>Content</th>
  <th>Client response</th>
</tr>
</thead>
<tbody>
<tr>
  <td>302</td>
  <td><code>Location</code> header containing an <code>access_token</code> parameter in the URL fragment (RFC 6749 section 4.2.2)</td>
  <td>Use the <code>access_token</code> value as the OAuth token.</td>
</tr>
<tr>
  <td>302</td>
  <td><code>Location</code> header containing an <code>error</code> query parameter (RFC 6749 section 4.1.2.1)</td>
  <td>Fail, optionally surfacing the <code>error</code> (and optional <code>error_description</code>) query values to the user.</td>
</tr>
<tr>
  <td>302</td>
  <td>Other <code>Location</code> header</td>
  <td>Follow the redirect, and process the result using these rules.</td>
</tr>
<tr>
  <td>401</td>
  <td><code>WWW-Authenticate</code> header present</td>
  <td>Respond to challenge if type is recognized (e.g. <code>Basic</code>, <code>Negotiate</code>, etc), resubmit request, and process the result using these rules.</td>
</tr>
<tr>
  <td>401</td>
  <td><code>WWW-Authenticate</code> header missing</td>
  <td>No challenge authentication is possible. Fail and show response body (which might contain links or details on alternate methods to obtain an OAuth token).</td>
</tr>
<tr>
  <td>Other</td>
  <td>Other</td>
  <td>Fail, optionally surfacing response body to the user.</td>
</tr>
</tbody>
</table>

**Additional resources**
{._additional-resources}

*   [Authorization Code Grant](https://tools.ietf.org/html/rfc6749#section-4.1)
*   [Implicit Grant](https://tools.ietf.org/html/rfc6749#section-4.2)
*   [Access Token Response](https://tools.ietf.org/html/rfc6749#section-4.2.2)
*   [Error Response](https://tools.ietf.org/html/rfc6749#section-4.1.2.1)