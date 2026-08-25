{%- set _mod_docs_content_type = "REFERENCE" %}
# Manual configuration of CLI profiles {id="manual-configuration-of-cli-profiles_{{ context }}"}

You can manually configure CLI profiles by using `oc config` subcommands to set clusters, contexts, and individual configuration values. {._abstract}

***CLI configuration subcommands***

<table>
<thead>
<tr>
  <th>Subcommand</th>
  <th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>set-cluster</code></td>
  <td>Sets a cluster entry in the CLI configuration file. If the referenced clusternickname already exists, the specified information is merged in.<pre>$ oc config set-cluster &lt;cluster_nickname&gt; [--server=&lt;master_ip_or_fqdn&gt;]&#10;[--certificate-authority=&lt;path/to/certificate/authority&gt;]&#10;[--api-version=&lt;apiversion&gt;] [--insecure-skip-tls-verify=true]</pre></td>
</tr>
<tr>
  <td><code>set-context</code></td>
  <td>Sets a context entry in the CLI configuration file. If the referenced contextnickname already exists, the specified information is merged in.<pre>$ oc config set-context &lt;context_nickname&gt; [--cluster=&lt;cluster_nickname&gt;]&#10;[--user=&lt;user_nickname&gt;] [--namespace=&lt;namespace&gt;]</pre></td>
</tr>
<tr>
  <td><code>use-context</code></td>
  <td>Sets the current context using the specified context nickname.<pre>$ oc config use-context &lt;context_nickname&gt;</pre></td>
</tr>
<tr>
  <td><code>set</code></td>
  <td>Sets an individual value in the CLI configuration file.<pre>$ oc config set &lt;property_name&gt; &lt;property_value&gt;</pre>The <code><property_name></code> is a dot-delimited name where each token represents either an attribute name or a map key. The <code><property_value></code> is the new value being set.</td>
</tr>
<tr>
  <td><code>unset</code></td>
  <td>Unsets individual values in the CLI configuration file.<pre>$ oc config unset &lt;property_name&gt;</pre>The <code><property_name></code> is a dot-delimited name where each token represents either an attribute name or a map key.</td>
</tr>
<tr>
  <td><code>view</code></td>
  <td>Displays the merged CLI configuration currently in use.<pre>$ oc config view</pre><br><br>Displays the result of the specified CLI configuration file.<pre>$ oc config view --config=&lt;specific_filename&gt;</pre></td>
</tr>
</tbody>
</table>