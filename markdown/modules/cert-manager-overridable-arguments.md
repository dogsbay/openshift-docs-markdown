{%- set _mod_docs_content_type = "REFERENCE" %}
# Overridable arguments for the cert-manager components {id="cert-manager-overridable-arguments_{{ context }}"}

You can configure the overridable arguments for the cert-manager components in the `spec.controllerConfig`, `spec.webhookConfig`, and `spec.cainjectorConfig` sections in the `CertManager` CR to customize the cert-manager controller, webhook, and cainjector components. {._abstract}

The following table describes the overridable arguments for the cert-manager components:

**Overridable arguments for the cert-manager components**

<table>
<thead>
<tr>
  <th>Argument</th>
  <th>Component</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>--dns01-recursive-nameservers=&lt;server_address&gt;</code></td>
  <td>Controller</td>
  <td>Provide a comma-separated list of nameservers to query for the DNS-01 self check. The nameservers can be specified either as <code>&lt;host&gt;:&lt;port&gt;</code>, for example, <code>1.1.1.1:53</code>, or use DNS over HTTPS (DoH), for example, <code>\https://1.1.1.1/dns-query</code>.<br><br><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>DNS over HTTPS (DoH) is supported starting only from {{ cert_manager_operator }} version 1.13.0 and later.</dd></dl></td>
</tr>
<tr>
  <td><code>--dns01-recursive-nameservers-only</code></td>
  <td>Controller</td>
  <td>Specify to only use recursive nameservers instead of checking the authoritative nameservers associated with that domain.</td>
</tr>
<tr>
  <td><code>--acme-http01-solver-nameservers=&lt;host&gt;:&lt;port&gt;</code></td>
  <td>Controller</td>
  <td>Provide a comma-separated list of <code>&lt;host&gt;:&lt;port&gt;</code> nameservers to query for the Automated Certificate Management Environment (ACME) HTTP01 self check. For example, <code>--acme-http01-solver-nameservers=1.1.1.1:53</code>.</td>
</tr>
<tr>
  <td><code>--metrics-listen-address=&lt;host&gt;:&lt;port&gt;</code></td>
  <td>Controller</td>
  <td>Specify the host and port for the metrics endpoint. The default value is <code>--metrics-listen-address=0.0.0.0:9402</code>.</td>
</tr>
<tr>
  <td><code>--issuer-ambient-credentials</code></td>
  <td>Controller</td>
  <td>You can use this argument to configure an ACME Issuer to solve DNS-01 challenges by using ambient credentials.</td>
</tr>
<tr>
  <td><code>--enable-certificate-owner-ref</code></td>
  <td>Controller</td>
  <td>This argument sets the certificate resource as an owner of the secret where the TLS certificate is stored. For more information, see "Deleting a TLS secret automatically upon Certificate removal".</td>
</tr>
<tr>
  <td><code>--acme-http01-solver-resource-limits-cpu</code></td>
  <td>Controller</td>
  <td>Defines the maximum CPU limit for ACME HTTP‑01 solver pods. The default value is <code>100m</code>.</td>
</tr>
<tr>
  <td><code>--acme-http01-solver-resource-limits-memory</code></td>
  <td>Controller</td>
  <td>Defines the maximum memory limit for ACME HTTP‑01 solver pods. The default value is <code>64Mi</code>.</td>
</tr>
<tr>
  <td><code>--acme-http01-solver-resource-request-cpu</code></td>
  <td>Controller</td>
  <td>Defines the minimum CPU request for ACME HTTP‑01 solver pods. The default value is <code>10m</code>.</td>
</tr>
<tr>
  <td><code>--acme-http01-solver-resource-request-memory</code></td>
  <td>Controller</td>
  <td>Defines the minimum memory request for ACME HTTP‑01 solver pods. The default value is <code>64Mi</code>.</td>
</tr>
<tr>
  <td><code>--certificate-request-minimum-backoff-duration</code></td>
  <td>Controller</td>
  <td>Specify the minimum backoff duration for certificate requests. The default value is <code>1h0m0s</code>.</td>
</tr>
<tr>
  <td><code>--concurrent-workers</code></td>
  <td>Controller</td>
  <td>The number of concurrent workers for each controller. The default value is <code>5</code>.</td>
</tr>
<tr>
  <td><code>--kube-api-qps</code></td>
  <td>Controller</td>
  <td>The maximum number of queries per second sent to the Kubernetes API server. The default value is <code>20</code>.</td>
</tr>
<tr>
  <td><code>--kube-api-burst</code></td>
  <td>Controller</td>
  <td>The maximum burst of queries per second sent to the Kubernetes API server. Must be greater than or equal to <code>--kube-api-qps</code>. The default value is <code>50</code>.</td>
</tr>
<tr>
  <td><code>--max-concurrent-challenges</code></td>
  <td>Controller</td>
  <td>The maximum number of ACME challenges that can run concurrently. The default value is <code>60</code>.</td>
</tr>
<tr>
  <td><code>--v=&lt;verbosity_level&gt;</code></td>
  <td>Controller, Webhook, CA injector</td>
  <td>Specify the log level verbosity to determine the verbosity of log messages.</td>
</tr>
</tbody>
</table>