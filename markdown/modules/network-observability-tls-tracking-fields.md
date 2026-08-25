{%- set _mod_docs_content_type = "REFERENCE" %}
# Transport Layer Security tracking fields reference {id="tls-tracking-fields_{{ context }}"}

Transport Layer Security (TLS) metadata fields track and define encryption protocols, protocol versions, and cipher suite data to help you analyze secure network flows. {._abstract}

***TLS tracking fields***

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Description</th>
  <th>Possible values</th>
  <th>Availability</th>
</tr>
</thead>
<tbody>
<tr>
  <td><strong>TLS Version</strong></td>
  <td>Negotiated TLS protocol version.</td>
  <td><ul><li><code>1.0</code>: Deprecated</li><li><code>1.1</code>: Deprecated</li><li><code>1.2</code>: Secure</li><li><code>1.3</code>: Current standard</li></ul></td>
  <td><code>ClientHello</code>, <code>ServerHello</code><br><br><code>ClientHello</code> displays the version requested by the client. <code>ServerHello</code> displays the negotiated version selected by the server.</td>
</tr>
<tr>
  <td><strong>TLS Cipher Suite</strong></td>
  <td>Cryptographic algorithm suite negotiated between the client and server.</td>
  <td>Examples:<br><br><ul><li><code>TLS_AES_256_GCM_SHA384</code></li><li><code>TLS_CHACHA20_POLY1305_SHA256</code></li></ul></td>
  <td><code>ServerHello</code> only<br><br>Displays as <code>n/a</code> in <code>ClientHello</code> messages.</td>
</tr>
<tr>
  <td><strong>TLS Group</strong></td>
  <td>Elliptic curve used for key exchange.</td>
  <td>Examples:<br><br><ul><li><code>X25519</code>: Recommended for TLS 1.3</li><li><code>secp256r1</code> (P-256)</li></ul></td>
  <td><code>ServerHello</code> (TLS 1.3 only)<br><br>Displays as <code>n/a</code> in <code>ClientHello</code> messages and TLS 1.2 connections.</td>
</tr>
<tr>
  <td><strong>TLS Types</strong></td>
  <td>Type of TLS handshake message captured.</td>
  <td><ul><li><code>ClientHello</code>: Initial client request</li><li><code>ServerHello</code>: Server response</li></ul></td>
  <td>All TLS flows</td>
</tr>
</tbody>
</table>