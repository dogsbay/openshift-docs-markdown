{%- set _mod_docs_content_type = "REFERENCE" %}
# Output image environment variables {id="builds-output-image-environment-variables_{{ context }}"}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
docker and
{%- endif %}
source-to-image (S2I) strategy builds set the following environment variables on output images:

| Variable | Description |
| --- | --- |
| `OPENSHIFT_BUILD_NAME` | Name of the build |
| `OPENSHIFT_BUILD_NAMESPACE` | Namespace of the build |
| `OPENSHIFT_BUILD_SOURCE` | The source URL of the build |
| `OPENSHIFT_BUILD_REFERENCE` | The Git reference used in the build |
| `OPENSHIFT_BUILD_COMMIT` | Source commit used in the build |

Additionally, any user-defined environment variable, for example those configured with
S2I
{%- if openshift_enterprise or openshift_webscale or openshift_origin %}
or docker
{%- endif %}
strategy options, will also be part of the output image environment variable list.