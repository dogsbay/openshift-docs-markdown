{% if context == "enabling-windows-container-workloads" %}
{%- set winc = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
# Image registry repository mirroring configuration parameters {id="images-configuration-registry-mirror-config-params_{{ context }}"}

You can use the following table for information about parameters when configuring your image repository for mirroring. {._abstract}

<table>
<thead>
<tr>
  <th><strong>Parameter</strong></th>
  <th><strong>Values and Information</strong></th>
  <th><code>apiVersion:</code></th>
  <th>Required. The value must be <code>config.openshift.io/v1</code> API.</th>
  <th><code>kind:</code></th>
  <th>The kind of object according to the pull type. The <code>ImageDigestMirrorSet</code> type pulls a digest reference image The <code>ImageTagMirrorSet</code> type pulls a tag reference image.</th>
  <th><code>spec: imageDigestMirrors:</code></th>
  <th>The type of image pull method. Use <code>imageDigestMirrors</code> for an <code>ImageDigestMirrorSet</code> CR. Use <code>imageTagMirrors</code> for an <code>ImageTagMirrorSet</code> CR.</th>
  <th><code>- mirrors: - example.io/example/ubi-minimal</code></th>
  <th>The name of the mirrored image registry and repository.</th>
  <th><code>- mirrors: -example.com/example2/ubi-minimal</code></th>
  <th>The value of this parameter is the name of a secondary mirror repository for each target repository. If one mirror is down the target repository can use the secondary mirror.</th>
  <th><code>source: registry.access.redhat.com/ubi9/ubi-minimal</code></th>
  <th>The registry and repository source. The source is the repository that is listed in an image pull specification.</th>
  <th><code>mirrorSourcePolicy: AllowContactingSource</code></th>
  <th>Optional parameter that indicates the fallback policy if the image pull fails. The <code>AllowContactingSource</code> value allows continued attempts to pull the image from the source repository. Default value. <code>NeverContactSource</code> prevents continued attempts to pull the image from the source repository.</th>
  {% if not winc %}<th><code>source: registry.example.com/redhat</code></th>{% endif %}
  {% if not winc %}<th>An optional parameter that indicates a namespace inside a registry. Setting a namespace inside a registry allows use of any image in that namespace. If you use a registry domain as a source, the object applies to all of the repositories from the registry.</th>{% endif %}
  {% if not winc %}<th><code>source: registry.example.com</code></th>{% endif %}
  {% if not winc %}<th>Optional parameter that indicates a registry. Allows us of any image in that registry. If you specify a registry name, the object applies to all repositories from a source registry to a mirror registry.</th>{% endif %}
  {% if not winc %}<th><code>source: registry.example.com/example/myimage</code></th>{% endif %}
  {% if not winc %}<th>Pulls the image <code>registry.example.com/example/myimage@sha256:...</code> from the mirror <code>mirror.example.net/image@sha256:..</code>.</th>{% endif %}
  {% if not winc %}<th><code>source: registry.example.com/example</code></th>{% endif %}
  {% if not winc %}<th>Pulls the image <code>registry.example.com/example/image@sha256:...</code> in the source registry namespace from the mirror <code>mirror.example.net/image@sha256:...</code>.</th>{% endif %}
  {% if not winc %}<th><code>source: registry.example.com</code></th>{% endif %}
  {% if not winc %}<th>Pulls the image <code>registry.example.com/myimage@sha256</code> from the mirror registry <code>example.net/registry-example-com/myimage@sha256:...</code>.</th>{% endif %}
</tr>
</thead>
</table>

{% if context == "enabling-windows-container-workloads" %}
{%- set winc = true -%}
{% endif %}