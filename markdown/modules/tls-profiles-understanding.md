{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding TLS security profiles {id="tls-profiles-understanding_{{ context }}"}

You can use a TLS (Transport Layer Security) security profile, as described in this section, to define which TLS ciphers are required by various {{ product_title }} components.  {._abstract}

The {{ product_title }} TLS security profiles are based on [Mozilla recommended configurations](https://wiki.mozilla.org/Security/Server_Side_TLS).

You can specify one of the following TLS security profiles for each component:

***TLS security profiles***

<table>
<thead>
<tr>
  <th>Profile</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Old</code></td>
  <td>This profile is intended for use with legacy clients or libraries. The profile is based on the <a href="https://wiki.mozilla.org/Security/Server_Side_TLS#Old_backward_compatibility">Old backward compatibility</a> recommended configuration.<br><br>The <code>Old</code> profile requires a minimum TLS version of 1.0.<br><br><dl><dt>Note</dt><dd>For the Ingress Controller, the minimum TLS version is converted from 1.0 to 1.1.</dd></dl></td>
</tr>
<tr>
  <td><code>Intermediate</code></td>
  <td>This profile is the default TLS security profile for the Ingress Controller, kubelet, and control plane. The profile is based on the <a href="https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29">Intermediate compatibility</a> recommended configuration.<br><br>The <code>Intermediate</code> profile requires a minimum TLS version of 1.2.<br><br><dl><dt>Note</dt><dd>This profile is the recommended configuration for the majority of clients.</dd></dl></td>
</tr>
<tr>
  <td><code>Modern</code></td>
  <td>This profile is intended for use with modern clients that have no need for backwards compatibility. This profile is based on the <a href="https://wiki.mozilla.org/Security/Server_Side_TLS#Modern_compatibility">Modern compatibility</a> recommended configuration.<br><br>The <code>Modern</code> profile requires a minimum TLS version of 1.3.</td>
</tr>
<tr>
  <td><code>Custom</code></td>
  <td>This profile allows you to define the TLS version and ciphers to use.<br><br><dl><dt>Warning</dt><dd>Use caution when using a <code>Custom</code> profile, because invalid configurations can cause problems.</dd></dl></td>
</tr>
</tbody>
</table>


:::note

When using one of the predefined profile types, the effective profile configuration is subject to change between releases. For example, given a specification to use the Intermediate profile deployed on release X.Y.Z, an upgrade to release X.Y.Z+1 might cause a new profile configuration to be applied, resulting in a rollout.

:::