{%- set _mod_docs_content_type = "CONCEPT" %}
# Omitting the imagePullPolicy parameter {id="images-image-pull-policy-default-behavior_{{ context }}"}

When you omit the `imagePullPolicy` parameter, {{ product_title }} automatically determines the policy based on the image tag. This default behavior ensures that the `latest` tag always pulls the newest image, while specific version tags use locally cached images when available to improve efficiency. {._abstract}

| Image tag | `imagePullPolicy` setting | Behavior |
| --- | --- | --- |
| `latest` | `Always` | Always pulls the image. This policy helps ensure that the container always uses the latest version of the image. |
| Any other tag (for example, `v1.2.3`, `stable`, `production`) | `IfNotPresent` | Pull only if necessary. This policy uses the locally cached version of the image if it exists on the node, avoiding unnecessary pulls from the registry. |