{%- set _mod_docs_content_type = "CONCEPT" %}
# When not to use image short names {id="images-configuration-shortname-when-not-to-use_{{ context }}"}

To avoid deployment failures and security risks when using public registries in {{ product_title }}, use fully-qualified image names instead of short names. Short names work with Red&#160;Hat internal or private registries, but public registries that require authentication might not deploy images with short names. {._abstract}

You cannot list multiple public registries under the `containerRuntimeSearchRegistries` parameter if each public registry requires different credentials and a cluster does not list the public registry in the global pull secret.

For a public registry that requires authentication, you can use an image short name only if the registry has its credentials stored in the global pull secret.


:::warning

If you list public registries under the `containerRuntimeSearchRegistries` parameter (including the `registry.redhat.io`, `docker.io`, and `quay.io` registries), you expose your credentials to all the registries on the list, and you risk network and registry attacks. Because you can only have one pull secret for pulling images, as defined by the global pull secret, that secret is used to authenticate against every registry in that list. Therefore, if you include public registries in the list, you introduce a security risk.

:::