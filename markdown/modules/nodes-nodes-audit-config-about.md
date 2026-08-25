{%- set _mod_docs_content_type = "CONCEPT" %}
# About audit log policy profiles {id="about-audit-log-profiles_{{ context }}"}

To monitor activity and maintain compliance, you can apply audit log profiles that define the level of detail recorded for API server requests. While more comprehensive profiles provide request bodies for troubleshooting, they also increase resource overhead on the host system. {._abstract}

{% if not microshift %}
Audit log profiles define how to log requests that come to the OpenShift API server, Kubernetes API server, OpenShift OAuth API server, and OpenShift OAuth server.
{% endif %}

{% if microshift %}
Audit log profiles define how to log requests that come to the OpenShift API server and the Kubernetes API server.
{% endif %}

{% if not microshift %}
{{ product_title }} provides the following predefined audit policy profiles:
{% endif %}

{% if microshift %}
{{ microshift_short }} supports the following predefined audit policy profiles:
{% endif %}

<table>
<thead>
<tr>
  <th>Profile</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Default</code></td>
  <td>Logs only metadata for read and write requests; does not log request bodies except for OAuth access token requests. This is the default policy.</td>
</tr>
<tr>
  <td><code>WriteRequestBodies</code></td>
  <td>In addition to logging metadata for all requests, logs request bodies for every write request to the API servers (<code>create</code>, <code>update</code>, <code>patch</code>, <code>delete</code>, <code>deletecollection</code>). This profile has more resource overhead than the <code>Default</code> profile. ^[1]^</td>
</tr>
<tr>
  <td><code>AllRequestBodies</code></td>
  <td>In addition to logging metadata for all requests, logs request bodies for  every read and write request to the API servers (<code>get</code>, <code>list</code>, <code>create</code>, <code>update</code>, <code>patch</code>). This profile has the most resource overhead. ^[1]^</td>
</tr>
<tr>
  {% if not microshift %}<td><code>None</code></td>{% endif %}
  {% if not microshift %}<td>No requests are logged, including OAuth access token requests and OAuth authorize token requests. Custom rules are ignored when this profile is set.</td>{% endif %}
</tr>
<tr>
  {% if microshift %}<td><code>None</code></td>{% endif %}
  {% if microshift %}<td>No requests are logged, including OAuth access token requests and OAuth authorize token requests.<br><br><dl><dt>Warning</dt><dd>Do not disable audit logging by using the <code>None</code> profile unless you are fully aware of the risks of not logging data that can be beneficial when troubleshooting issues. If you disable audit logging and a support situation arises, you might need to enable audit logging and reproduce the issue to troubleshoot properly.</dd></dl></td>{% endif %}
</tr>
</tbody>
</table>

1.  Sensitive resources, such as `Secret`, `Route`, and `OAuthClient` objects, are only logged at the metadata level.
{%- if not microshift %}
OpenShift OAuth server events are only logged at the metadata level.
{%- endif %}
{%- if not microshift %}
By default, {{ product_title }} uses the `Default` audit log profile. You can use another audit policy profile that also logs request bodies, but be aware of the increased resource usage such as CPU, memory, and I/O.
{% endif %}

{% if microshift %}
By default, {{ microshift_short }} uses the `Default` audit log profile. You can use another audit policy profile that also logs request bodies, but be aware of the increased resource usage such as CPU, memory, and I/O.
{% endif %}