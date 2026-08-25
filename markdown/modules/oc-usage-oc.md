{%- set _mod_docs_content_type = "CONCEPT" %}
# The oc binary {id="oc-usage-oc_{{ context }}"}

The {{ oc_first }} binary offers the same capabilities as the `kubectl` binary, but it extends to natively support additional {{ product_title }} features. {._abstract}


Full support for {{ product_title }} resources
:   Resources such as `DeploymentConfig`, `BuildConfig`, `Route`, `ImageStream`, and `ImageStreamTag` objects are specific to {{ product_title }} distributions, and build upon standard Kubernetes primitives.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}

Authentication
:   The `oc` binary offers a built-in `login` command for authentication and lets you work with projects, which map Kubernetes namespaces to authenticated users.
    Read "Understanding authentication" for more information.
{% endif %}


Additional commands
:   The additional command `oc new-app`, for example, makes it easier to get new applications started using existing source code or pre-built images. Similarly, the additional command `oc new-project` makes it easier to start a project that you can switch to as your default.


:::important

If you installed an earlier version of the `oc` binary, you cannot use it to complete all of the commands in
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
{{ product_title }} {{ product_version }}
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
. If you want the latest features, you must download and install the latest version of the `oc` binary corresponding to your {{ product_title }} server version.

:::


Non-security API changes will involve, at minimum, two minor releases (4.1 to 4.2 to 4.3, for example) to allow older `oc` binaries to update. Using new capabilities might require newer `oc` binaries. A 4.3 server might have additional capabilities that a 4.2 `oc` binary cannot use and a 4.3 `oc` binary might have additional capabilities that are unsupported by a 4.2 server.

**Compatibility matrix**

|     |     |     |
| --- | --- | --- |
|  | **X.Y** (`oc` Client) | **X.Y+N** footnote:versionpolicyn[Where **N** is a number greater than or equal to 1.] (`oc` Client) |
| **X.Y** (Server) | ![Red circle 1](/_assets/images/redcircle-1.png) | ![Red circle 3](/_assets/images/redcircle-3.png) |
| **X.Y+N** footnote:versionpolicyn[] (Server) | ![Red circle 2](/_assets/images/redcircle-2.png) | ![Red circle 1](/_assets/images/redcircle-1.png) |
![Red circle 1](/_assets/images/redcircle-1.png) Fully compatible.

![Red circle 2](/_assets/images/redcircle-2.png) `oc` client might not be able to access server features.

![Red circle 3](/_assets/images/redcircle-3.png) `oc` client might provide options and features that might not be compatible with the accessed server.